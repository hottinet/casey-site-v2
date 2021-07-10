import styled from '@emotion/styled';

type BodyProps = {
  className?: string;
  children: string;
  bold?: boolean;
};

const BodyText = styled.p<Pick<BodyProps, 'bold'>>`
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: ${({ theme }) => theme.lineHeight.body};
  margin-bottom: ${({ theme }) => theme.spacing[48]};
`;

const Body: React.FC<BodyProps> = ({ children, className, bold }) => (
  <BodyText bold={bold} className={className}>
    {children}
  </BodyText>
);

export default Body;
