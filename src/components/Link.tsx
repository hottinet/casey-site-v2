import styled from '@emotion/styled';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  noHover?: boolean;
};

const StyledLink = styled.a<Pick<LinkProps, 'noHover'>>`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  padding: ${({ theme, noHover }) => !noHover && theme.spacing[4]};
  :hover,
  :active {
    background-color: ${({ theme, noHover }) =>
      !noHover && theme.colors.yellow};
    color: ${({ theme, noHover }) => !noHover && theme.colors.textSecondary};
  }
`;

const Link: React.FC<LinkProps> = ({
  internal,
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  noHover,
}) => (
  <NextLink href={href} passHref>
    <StyledLink
      className={className}
      noHover={noHover}
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
