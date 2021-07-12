import styled from '@emotion/styled';

type HeadingProps = {
  children: string;
  bold?: boolean;
  className?: string;
  padded?: boolean;
};

export const HeadingText = styled.h3<Omit<HeadingProps, 'children'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.heading};
  margin-bottom: ${({ theme, padded }) => (padded ? theme.spacing[16] : 0)};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
`;

const Heading: React.FC<HeadingProps> = ({
  bold,
  className,
  children,
  padded = true,
}) => (
  <HeadingText bold={bold} className={className} padded={padded}>
    {children}
  </HeadingText>
);

export default Heading;
