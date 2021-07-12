import styled from '@emotion/styled';

type TitleProps = {
  children: string | (string | React.ReactElement)[];
  bold?: boolean;
  className?: string;
  padded?: boolean;
};

const Text = styled.h2<Omit<TitleProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-bottom: ${({ theme, padded }) => (padded ? theme.spacing[24] : 0)};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Title: React.FC<TitleProps> = ({
  bold,
  className,
  children,
  padded = true,
}) => (
  <Text bold={bold} className={className} padded={padded}>
    {children}
  </Text>
);

export default Title;
