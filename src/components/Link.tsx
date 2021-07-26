import styled from '@emotion/styled';
import throttle from 'lodash.throttle';
import NextLink from 'next/link';
import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HoverImageContext } from '~/contexts/hoverImageContext';

import Image from './Image';

type LinkProps = {
  internal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
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

const OnMouseSpan = styled.span`
  display: inline-flex;
`;

type HoverImageProps = Pick<
  HoverImageLinkProps,
  'hoverImgAlt' | 'hoverImgSrc'
> & {
  portalTarget: HTMLDivElement;
};

const PortalImage = styled(Image)<{ coords: [number, number] }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ coords }) => `translate(${coords[0]}px, ${coords[1]}px)`};
  width: 300px;
  max-height: none;
  display: ${({ coords }) => (coords[0] && coords[1] ? 'block' : 'none')};
`;

const HoverImage: React.FC<HoverImageProps> = ({
  hoverImgAlt,
  hoverImgSrc,
  portalTarget,
}) => {
  const [mouseCoords, setMouseCoords] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const setCoords = throttle(
      (e: MouseEvent) =>
        setMouseCoords([
          // The added number here needs to be great enough that an average user
          // won't scroll that distance in the # of seconds the function is throttled
          //
          // If they do, they'll overlap the calculated position of the image, thus
          // stopping their "hover" on the link, and removing the hover image
          e.clientX + 48,

          document.documentElement.scrollTop + e.clientY,
        ]),
      15
    );
    window.addEventListener('mousemove', setCoords);
    return () => {
      setCoords.cancel();
      window.removeEventListener('mousemove', setCoords);
    };
  }, []);

  return createPortal(
    <PortalImage
      alt={hoverImgAlt}
      coords={mouseCoords}
      fitParent
      src={hoverImgSrc}
    />,
    portalTarget
  );
};

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

  const onEnter: MouseEventHandler<HTMLSpanElement> = (e) => {
    if (hoverImgSrc) {
      setIsHovered(true);
    }
    onMouseEnter?.(e);
  };

  const onLeave: MouseEventHandler<HTMLSpanElement> = (e) => {
    if (hoverImgSrc) {
      setIsHovered(false);
    }
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
        >
          {/*
            Hack to allow mouseEvents inside nextjs links
            See https://github.com/vercel/next.js/issues/1490
          */}
          <OnMouseSpan onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {children}
          </OnMouseSpan>
        </StyledLink>
      </NextLink>
      {hoverImageContainer?.current && hoverImgSrc && isHovered && (
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
