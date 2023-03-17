import styled from '@emotion/styled';

import { Color } from '~/typings/theme';

import { MarginProps } from '../box/types';

type TitleProps = Pick<MarginProps, 'mb'> & {
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
  className?: string;
  color?: Color;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>(
  ({ theme, bold, mb = 24, color }) => ({
    fontSize: theme.fontSize.mobileTitle,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing[mb],
    color: color ? theme.colors[color] : '',
    [theme.breakpoints.xs]: {
      fontSize: theme.fontSize.title,
    },
  })
);

const Title: React.FC<TitleProps> = ({
  bold,
  className,
  children,
  mb,
  color,
}) => (
  <Text bold={bold} className={className} color={color} mb={mb}>
    {children}
  </Text>
);

export default Title;
