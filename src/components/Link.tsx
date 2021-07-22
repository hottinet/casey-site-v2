import styled from '@emotion/styled';
import Image from 'next/image';
import NextLink from 'next/link';
import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HoverImageContext } from '~/contexts/hoverImageContext';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  noHoverStyles?: boolean;
};

type HoverImageLinkProps = LinkProps & {
  hoverImgSrc: string;
  hoverImgAlt: string;
};

const StyledLink = styled.a<Pick<LinkProps, 'noHoverStyles'>>`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  padding: ${({ theme, noHoverStyles }) => !noHoverStyles && theme.spacing[4]};
  :hover,
  :active {
    background-color: ${({ theme, noHoverStyles }) =>
      !noHoverStyles && theme.colors.yellow};
    color: ${({ theme, noHoverStyles }) =>
      !noHoverStyles && theme.colors.textSecondary};
  }
`;

const HoverImage: React.FC<
  Pick<HoverImageLinkProps, 'hoverImgAlt' | 'hoverImgSrc'> & {
    portalTarget: HTMLDivElement;
  }
> = ({ hoverImgAlt, hoverImgSrc, portalTarget }) =>
  createPortal(<Image alt={hoverImgAlt} src={hoverImgSrc} />, portalTarget);

const Link: React.FC<LinkProps | HoverImageLinkProps> = (props) => {
  const {
    internal,
    href,
    children,
    className,
    onMouseEnter,
    onMouseLeave,
    noHoverStyles,
  } = props;
  const { hoverImgSrc, hoverImgAlt } = props as HoverImageLinkProps;

  const hoverImageContainer = useContext(HoverImageContext);
  const [isHovered, setIsHovered] = useState(false);

  const onEnter: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const onLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  useEffect(() => () => setIsHovered(false), []);

  return (
    <>
      <NextLink href={href} passHref>
        <StyledLink
          className={className}
          noHoverStyles={noHoverStyles}
          rel="noopener noreferrer"
          target={internal ? '_self' : '_blank'}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          {children}
        </StyledLink>
      </NextLink>
      {isHovered && hoverImgSrc && hoverImageContainer?.current && (
        <HoverImage
          hoverImgAlt={hoverImgAlt}
          hoverImgSrc={hoverImgSrc}
          portalTarget={hoverImageContainer.current}
        />
      )}
    </>
  );
};

export default Link;
