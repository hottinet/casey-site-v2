import styled from '@emotion/styled';

import { MarginProps } from '../box/types';

type TitleProps = Pick<MarginProps, 'mb'> & {
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
  className?: string;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-bottom: ${({ theme, mb = 24 }) => theme.spacing[mb]};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Title: React.FC<TitleProps> = ({ bold, className, children, mb }) => (
  <Text bold={bold} className={className} mb={mb}>
    {children}
  </Text>
);

export default Title;
