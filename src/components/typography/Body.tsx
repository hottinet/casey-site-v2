import styled from '@emotion/styled';

type BodyProps = {
  className?: string;
  children: string;
  bold?: boolean;
};

const BodyText = styled.p<Pick<BodyProps, 'bold'>>`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontFamily};
  line-height: ${({ theme }) => theme.lineHeight.body};
`;

const Body: React.FC<BodyProps> = ({ children, className, bold }) => (
  <BodyText bold={bold} className={className}>
    {children}
  </BodyText>
);

export default Body;
