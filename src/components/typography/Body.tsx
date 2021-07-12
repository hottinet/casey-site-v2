import styled from '@emotion/styled';

type BodyProps = {
  className?: string;
  children: string;
  bold?: boolean;
  padded?: boolean;
};

const BodyText = styled.p<Omit<BodyProps, 'children'>>`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: ${({ theme }) => theme.lineHeight.body};
  margin-bottom: ${({ theme, padded }) => (padded ? theme.spacing[48] : 0)};
`;

const Body: React.FC<BodyProps> = ({
  children,
  className,
  bold,
  padded = true,
}) => (
  <BodyText bold={bold} className={className} padded={padded}>
    {children}
  </BodyText>
);

export default Body;
