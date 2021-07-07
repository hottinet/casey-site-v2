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

const LinkWrapper: React.FC<LinkProps> = ({ internal, href, children }) =>
  internal ? <NextLink href={href}>{children}</NextLink> : <>{children}</>;

const Link: React.FC<LinkProps> = ({ internal, href, children, className }) => (
  <LinkWrapper href={href} internal={internal}>
    <StyledLink
      className={className}
      href={internal ? undefined : href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </StyledLink>
  </LinkWrapper>
);

export default Link;
