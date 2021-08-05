import styled from '@emotion/styled';

import { MarginProps } from '../box/types';

type TitleProps = Pick<MarginProps, 'mb'> & {
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
  className?: string;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>(
  ({ theme, bold, mb = 24 }) => ({
    fontSize: theme.fontSize.mobileTitle,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing[mb],
    [theme.breakpoints.xs]: {
      fontSize: theme.fontSize.title,
    },
  })
);

const Title: React.FC<TitleProps> = ({ bold, className, children, mb }) => (
  <Text bold={bold} className={className} mb={mb}>
    {children}
  </Text>
);

export default Title;
