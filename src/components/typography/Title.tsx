import styled from '@emotion/styled';

type TitleProps = {
  children: string;
  bold?: boolean;
  secondary?: boolean;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Title: React.FC<TitleProps> = ({ bold, secondary, children }) => (
  <Text bold={bold} secondary={secondary}>
    {children}
  </Text>
);

export default Title;
