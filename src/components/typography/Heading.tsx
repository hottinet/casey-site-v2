import styled from '@emotion/styled';

import { MarginProps } from '../box/types';

type HeadingProps = Pick<MarginProps, 'mb'> & {
  children: string;
  bold?: boolean;
  className?: string;
};

export const HeadingText = styled.h3<Omit<HeadingProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.heading};
  margin-bottom: ${({ theme, mb = 16 }) => theme.spacing[mb]};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Heading: React.FC<HeadingProps> = ({ bold, className, children, mb }) => (
  <HeadingText bold={bold} className={className} mb={mb}>
    {children}
  </HeadingText>
);

export default Heading;
