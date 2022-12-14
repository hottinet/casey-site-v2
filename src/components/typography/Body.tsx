import styled from '@emotion/styled';

import { Color } from '~/typings/theme';

import { MarginProps } from '../box/types';

type BodyProps = Pick<MarginProps, 'mb'> & {
  className?: string;
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
  italic?: boolean;
  color?: Color;
};

const BodyText = styled.p<Omit<BodyProps, 'children'>>(
  ({ theme, bold, mb = 48, italic, color = 'text' }) => ({
    fontSize: theme.fontSize.body,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeight.body,
    marginBottom: theme.spacing[mb],
    fontStyle: italic ? 'italic' : 'normal',
    color: theme.colors[color],
  })
);

const Body: React.FC<BodyProps> = ({
  children,
  className,
  bold,
  mb,
  italic,
  color,
}) => (
  <BodyText
    bold={bold}
    className={className}
    color={color}
    italic={italic}
    mb={mb}
  >
    {children}
  </BodyText>
);

export default Body;
