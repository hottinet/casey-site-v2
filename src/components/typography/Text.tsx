import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { AllowedCommonCssProps, AllowedTextCssProps } from '~/constants/css';
import { filterCssProps } from '~/utils/css';

export type TextProps = AllowedCommonCssProps &
  AllowedTextCssProps & {
    className?: string;
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    variant?: 'caption' | 'body-sm' | 'body' | 'body-lg' | 'title-sm' | 'title';
  };

type VariantOrAs = NonNullable<TextProps['variant'] | TextProps['as']>;

const getFontSize = (theme: Theme, variantOrAs: VariantOrAs) => {
  const bodySize = theme.fontSize.body;
  const bodyLgSize = theme.fontSize.heading;
  const titleSmSize = theme.fontSize.heading;
  const titleSize = theme.fontSize.title;
  // const titleLgSize = theme.fontSize[40];
  // const titleXlSize = theme.fontSize[56];

  const fontSizeLookup: Record<VariantOrAs, string> = {
    // Variants
    caption: theme.fontSize.caption,
    'body-sm': theme.fontSize.subBody,
    body: bodySize,
    'body-lg': bodyLgSize,
    'title-sm': titleSmSize,
    title: titleSize,
    // 'title-lg': theme.fontSize[40],
    // 'title-xl': titleXlSize,

    // As
    h1: titleSize,
    h2: titleSize,
    h3: titleSmSize,
    h4: bodyLgSize,
    h5: bodyLgSize,
    h6: bodyLgSize,
    p: bodySize,
    span: bodySize,
    label: bodySize,
  };

  const fontSize = fontSizeLookup[variantOrAs];

  return fontSize || theme.fontSize[16];
};

export const Text = styled('span')<TextProps>(({
  as,
  variant,
  theme,
  ...rest
}) => {
  const fontSize = getFontSize(theme, variant || as || 'body');

  return {
    fontWeight: theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    fontSize,
    ...filterCssProps(rest, theme),
  };
});
