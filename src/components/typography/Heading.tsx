import styled from '@emotion/styled';

type HeadingProps = {
  children: string;
  bold?: boolean;
  secondary?: boolean;
};

const Text = styled.h3<Omit<HeadingProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Heading: React.FC<HeadingProps> = ({ bold, secondary, children }) => (
  <Text bold={bold} secondary={secondary}>
    {children}
  </Text>
);

export default Heading;
