import NextLink from 'next/link';
import styled from '@emotion/styled';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Link: React.FC<LinkProps> = ({ internal, href, children, className }) => (
  <NextLink href={href} passHref>
    <StyledLink
      className={className}
      rel="noopener noreferrer"
      target={internal ? '_self' : '_blank'}
    >
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;
