import styled from '@emotion/styled';

type HeadingProps = {
  children: string;
  bold?: boolean;
  className?: string;
};

const Text = styled.h3<Omit<HeadingProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.heading};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Heading: React.FC<HeadingProps> = ({ bold, className, children }) => (
  <Text bold={bold} className={className}>
    {children}
  </Text>
);

export default Heading;
