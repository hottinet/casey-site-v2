import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentType } from 'react';

import {
  AllowedCommonCssProps,
  AllowedCustomCssProps,
  AllowedTextCssProps,
} from '~/constants/css';
import { filterCssProps } from '~/utils/css';

type TextVariant = keyof {
  // only use keys from fontSize that aren't numbers
  [K in keyof Theme['fontSize'] as K extends number ? never : K]: K;
};

export type TextProps = AllowedCommonCssProps &
  AllowedTextCssProps &
  AllowedCustomCssProps & {
    className?: string;
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    variant?: TextVariant;
  };

type VariantOrAs = NonNullable<TextProps['variant'] | TextProps['as']>;

const getFontSize = (theme: Theme, variantOrAs: VariantOrAs) => {
  const fontSizeLookup: Record<NonNullable<TextProps['as']>, string> = {
    h1: theme.fontSize.headline1,
    h2: theme.fontSize.headline2,
    h3: theme.fontSize.headline3,
    h4: theme.fontSize.headline4,
    h5: theme.fontSize.bodyMedium,
    h6: theme.fontSize.bodyLarge,
    p: theme.fontSize.bodySmall,
    span: theme.fontSize.bodySmall,
    label: theme.fontSize.bodySmall,
  };

  const fontSize =
    theme.fontSize[variantOrAs as TextVariant] ||
    fontSizeLookup[variantOrAs as NonNullable<TextProps['as']>];

  return fontSize || theme.fontSize.bodySmall;
};

const getFontFamily = (theme: Theme, variantOrAs: VariantOrAs) => {
  switch (variantOrAs) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'headline1':
    case 'headline2':
    case 'headline3':
    case 'headline4':
      return theme.fontFamily.title;
    default:
      return theme.fontFamily.normal;
  }
};

const getFontWeight = (theme: Theme, variantOrAs: VariantOrAs) => {
  switch (variantOrAs) {
    case 'subtitle3':
    case 'subtitle2':
    case 'subtitle1':
    case 'headline4':
    case 'headline3':
    case 'headline2':
    case 'headline1':
      return theme.fontWeight.bold;
    default:
      return theme.fontWeight.regular;
  }
};

const getLetterSpacing = (variantOrAs: VariantOrAs) => {
  switch (variantOrAs) {
    case 'subtitle3':
    case 'subtitle2':
    case 'subtitle1':
      return '3%';
    default:
      return undefined;
  }
};

const getTextTransform = (variantOrAs: VariantOrAs) => {
  switch (variantOrAs) {
    case 'subtitle3':
    case 'subtitle2':
    case 'subtitle1':
      return 'uppercase';
    default:
      return undefined;
  }
};

const getLineHeight = (variantOrAs: VariantOrAs) => {
  switch (variantOrAs) {
    case 'bodySmall':
      return 1.2;
    default:
      return undefined;
  }
};

export const Text = styled('span')<TextProps>(
  ({ as, variant, theme, ...rest }) => {
    const fontSize = getFontSize(theme, variant || as || 'bodySmall');
    const fontFamily = getFontFamily(theme, variant || as || 'bodySmall');
    const fontWeight = getFontWeight(theme, variant || as || 'bodySmall');
    const textTransform = getTextTransform(variant || as || 'bodySmall');
    const lineHeight = getLineHeight(variant || as || 'bodySmall');

    return {
      fontWeight,
      fontFamily,
      fontSize,
      textTransform,
      lineHeight,
      letterSpacing: getLetterSpacing(variant || as || 'bodySmall'),
      ...filterCssProps(rest, theme),
    };
  }
  /**
   * the root 'span' element has a lot of innate props that we don't want
   * merged with our explicit css props since they add a lot of
   * overly generic prop values
   * (for ex. our explicit 'color' types get merged with `span`'s 'string' type)
   * so we're just casting this as ONLY allowing our props. This doesn't change any
   * functionality; just ts
   */
) as ComponentType<TextProps>;
