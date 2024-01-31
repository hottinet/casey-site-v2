import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { AllowedCommonCssProps } from '~/constants/css';
import { Color, Spacing } from '~/typings/theme';

type TitleProps = Pick<AllowedCommonCssProps, 'marginBottom'> & {
  bold?: boolean;
  className?: string;
  color?: Color;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>(
  ({ theme, bold, marginBottom = 24, color }) => ({
    fontSize: theme.fontSize.mobileTitle,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing[marginBottom as Spacing],
    color: color ? theme.colors[color] : '',
    [theme.breakpoints.xs]: {
      fontSize: theme.fontSize.title,
    },
  })
);

export function Title({
  bold,
  className,
  children,
  marginBottom,
  color,
}: PropsWithChildren<TitleProps>) {
  return (
    <Text
      bold={bold}
      className={className}
      color={color}
      marginBottom={marginBottom}
    >
      {children}
    </Text>
  );
}
