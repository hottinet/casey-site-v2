import styled from '@emotion/styled';

type BodyProps = {
  className?: string;
  children: string;
};

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text};
`;

const Body: React.FC<BodyProps> = ({ children, className }) => (
  <BodyText className={className}>{children}</BodyText>
);

export default Body;
