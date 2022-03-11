import styled from '@emotion/styled';

import { MarginProps } from '../box/types';

type HeadingProps = Pick<MarginProps, 'mb'> & {
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
};

const HeadingText = styled.h3<Omit<HeadingProps, 'children'>>(
  ({ theme, bold, mb = 16 }) => ({
    fontSize: theme.fontSize.heading,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing[mb],
  })
);

const Heading: React.FC<HeadingProps> = ({ bold, className, children, mb }) => (
  <HeadingText bold={bold} className={className} mb={mb}>
    {children}
  </HeadingText>
);

export default Heading;
