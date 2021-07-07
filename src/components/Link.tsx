import NextLink from 'next/link';
import styled from '@emotion/styled';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Link: React.FC<LinkProps> = ({
  internal,
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}) => (
  <NextLink href={href} passHref>
    <StyledLink
      className={className}
      rel="noopener noreferrer"
      target={internal ? '_self' : '_blank'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;
