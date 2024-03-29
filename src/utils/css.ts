// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@emotion/react';
import { CSSObject } from '@emotion/styled';
import isPlainObject from 'lodash.isplainobject';

import {
  ALL_ALLOWED_CSS_PROPS,
  AllowedCustomCssProps,
  AllowedCustomCssSpacingProps,
  CUSTOM_THEME_CSS_PROPS,
  RequiredStyleByBreakpointKeys,
  StyleByBreakpointKeys,
} from '~/constants/css';
import { Theme } from '~/constants/theme';
import { Color } from '~/typings/theme';

type CustomCssArgs = {
  currPropKey: keyof typeof CUSTOM_THEME_CSS_PROPS;
  theme: Theme;
  propValue: string | number;
};

const handleThemedCssProps = ({
  currPropKey,
  theme,
  propValue,
}: CustomCssArgs) => {
  // Get the corresponding theme key...
  const propCorrespondingThemeKey = CUSTOM_THEME_CSS_PROPS[currPropKey]!;
  // ... and if the value of the prop exists in the theme for that key...
  const propValueIsThemeSubkey = Object.keys(
    theme[propCorrespondingThemeKey]
  ).includes(String(propValue));

  if (propValueIsThemeSubkey) {
    // ... set the value of the prop to the corresponding theme value
    return theme[propCorrespondingThemeKey][
      propValue as keyof Theme[keyof Theme]
    ];
  }
  // ...otherwise, pass it through to the filtered props
  return propValue;
};

const customCssMapping: Record<
  keyof AllowedCustomCssProps,
  (theme: Theme, value: string | number) => CSSObject
> = {
  paddingX: (theme, value) => ({
    paddingLeft: handleThemedCssProps({
      currPropKey: 'paddingLeft',
      theme,
      propValue: value,
    }),
    paddingRight: handleThemedCssProps({
      currPropKey: 'paddingRight',
      theme,
      propValue: value,
    }),
  }),
  marginX: (theme, value) => ({
    marginLeft: handleThemedCssProps({
      currPropKey: 'marginLeft',
      theme,
      propValue: value,
    }),
    marginRight: handleThemedCssProps({
      currPropKey: 'marginRight',
      theme,
      propValue: value,
    }),
  }),
  paddingY: (theme, value) => ({
    paddingTop: handleThemedCssProps({
      currPropKey: 'paddingTop',
      theme,
      propValue: value,
    }),
    paddingBottom: handleThemedCssProps({
      currPropKey: 'paddingBottom',
      theme,
      propValue: value,
    }),
  }),
  marginY: (theme, value) => ({
    marginTop: handleThemedCssProps({
      currPropKey: 'marginTop',
      theme,
      propValue: value,
    }),
    marginBottom: handleThemedCssProps({
      currPropKey: 'marginBottom',
      theme,
      propValue: value,
    }),
  }),
};

type HandleCustomCssArgs = Omit<CustomCssArgs, 'currPropKey'> & {
  currPropKey: keyof AllowedCustomCssProps;
};

const isStyleByBreakpointObj = (value: unknown): boolean => {
  if (!value || (value && !isPlainObject(value))) {
    return false;
  }
  return (
    (value as Record<string, unknown>)[
      'base' as RequiredStyleByBreakpointKeys
    ] !== undefined
  );
};

const handleCustomCssProps = ({
  currPropKey,
  theme,
  propValue,
}: HandleCustomCssArgs): CSSObject => {
  const mappingFn = customCssMapping[currPropKey];
  if (mappingFn) {
    return mappingFn(theme, propValue);
  }
  // pass through to filtered props if no mapping function found
  return {
    [currPropKey]: propValue,
  };
};

type CssPropObj = Partial<CSSObject & AllowedCustomCssSpacingProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterCssProps = (props: Record<string, any>, theme: Theme) =>
  Object.keys(props).reduce((propObj: CssPropObj, currPropKey) => {
    // Create a copy of the propObj so we don't mutate it
    let nextPropObj = { ...propObj } as CssPropObj;
    const propValue = props[currPropKey];

    // Check if the current prop is a style-by-breakpoint object
    if (isStyleByBreakpointObj(propValue)) {
      const breakpoints = Object.keys(propValue) as StyleByBreakpointKeys[];
      // For each breakpoint...
      breakpoints.forEach((breakpoint) => {
        // ... if that breakpoint is "base", treat it like a regular prop ...
        if (breakpoint === 'base') {
          nextPropObj = {
            ...nextPropObj,
            ...filterCssProps({ [currPropKey]: propValue.base }, theme),
          };
        } else {
          // ...otherwise, get the mediaQuery from the theme and nest the prop
          // under that breakpoint
          const value = propValue[breakpoint];
          if (value !== undefined) {
            nextPropObj = {
              ...nextPropObj,
              [theme.breakpoints[breakpoint]]: {
                ...((nextPropObj[
                  theme.breakpoints[breakpoint]
                ] as CssPropObj) || {}),
                ...filterCssProps({ [currPropKey]: value }, theme),
              },
            };
          }
        }
      });
      // This else always true during a recursive call of this fn due to breakpoints
    } else {
      // Check if the current prop is a custom CSS prop
      // for ex. paddingX, paddingY, etc.
      const usesCustomCss = Object.keys(customCssMapping).includes(currPropKey);

      if (usesCustomCss) {
        // If it is, handle it using a helper function
        const customProps = handleCustomCssProps({
          currPropKey: currPropKey as keyof AllowedCustomCssProps,
          theme,
          propValue,
        });
        nextPropObj = { ...nextPropObj, ...customProps };
      } else {
        // Check if it is a custom theme prop
        // aka any prop for which we expect to match a defined theme value
        const usesCustomTheme = Object.keys(CUSTOM_THEME_CSS_PROPS).includes(
          currPropKey
        );
        if (usesCustomTheme) {
          // If it is, handle it using a helper function
          nextPropObj[currPropKey] = handleThemedCssProps({
            currPropKey: currPropKey as keyof typeof CUSTOM_THEME_CSS_PROPS,
            theme,
            propValue,
          });
        } else if (
          // If it isn't, check if it is a valid CSS prop
          ALL_ALLOWED_CSS_PROPS.includes(
            currPropKey as (typeof ALL_ALLOWED_CSS_PROPS)[number]
          )
        ) {
          // If it is, add it to the propObj
          nextPropObj[currPropKey] = propValue;
        }
      }
    }

    // Return the propObj
    return nextPropObj;
  }, {} as CssPropObj);

export const makeCssPropStyles = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { theme: Theme } & Record<string, any>
) => {
  const { theme, ...rest } = props;
  return filterCssProps(rest, theme);
};

export function hexToRgb(hex: string) {
  const fullHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export const hexToRgba = (hex: string, alpha: number) => {
  const rgb = hexToRgb(hex);
  if (rgb) {
    const { r, g, b } = rgb;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  console.error('Invalid hex color');
  return undefined;
};

export const makePageBgOverride = (color: Color, theme: Theme) => css`
  body,
  html,
  #__next {
    background-color: ${theme.colors[color]};
  }
`;
