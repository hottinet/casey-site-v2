import styled from '@emotion/styled';

type TitleProps = {
  children: string;
  bold?: boolean;
  className?: string;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-bottom: ${({ theme }) => theme.spacing[24]};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Title: React.FC<TitleProps> = ({ bold, className, children }) => (
  <Text bold={bold} className={className}>
    {children}
  </Text>
);

export default Title;
