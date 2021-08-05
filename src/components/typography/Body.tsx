import styled from '@emotion/styled';

import { MarginProps } from '../box/types';

type BodyProps = Pick<MarginProps, 'mb'> & {
  className?: string;
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
};

const BodyText = styled.p<Omit<BodyProps, 'children'>>(
  ({ theme, bold, mb = 48 }) => ({
    fontSize: theme.fontSize.body,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeight.body,
    marginBottom: theme.spacing[mb],
  })
);

const Body: React.FC<BodyProps> = ({ children, className, bold, mb }) => (
  <BodyText bold={bold} className={className} mb={mb}>
    {children}
  </BodyText>
);

export default Body;
