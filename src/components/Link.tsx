import styled from '@emotion/styled';
import throttle from 'lodash.throttle';
import NextLink from 'next/link';
import { MouseEventHandler, useEffect, useState } from 'react';

import PortalImage from './PortalImage';

export type LinkProps = {
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

const StyledLink = styled(NextLink)<Pick<LinkProps, 'noHoverStyles'>>(
  ({ theme, noHoverStyles }) => ({
    color: theme.colors.text,
    display: 'inline-block',
    padding: noHoverStyles ? 0 : theme.spacing[4],
    ':hover, :active': {
      backgroundColor: noHoverStyles ? 'transparent' : theme.colors.yellow,
      color: noHoverStyles ? 'inherit' : theme.colors.textSecondary,
    },
  })
);

const OnMouseSpan = styled.span`
  display: inline-flex;
  width: 100%;
`;

type PortalImageWrapperProps = Pick<
  HoverImageLinkProps,
  'hoverImgAlt' | 'hoverImgSrc'
>;

const PortalImageWrapper: React.FC<PortalImageWrapperProps> = ({
  hoverImgAlt,
  hoverImgSrc,
}) => {
  const [mouseCoords, setMouseCoords] = useState<[number, number]>();

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
    if (hoverImgSrc) {
      window.addEventListener('mousemove', setCoords);
    }
    return () => {
      setCoords.cancel();
      window.removeEventListener('mousemove', setCoords);
    };
  }, [hoverImgSrc]);
  return (
    <PortalImage
      coords={mouseCoords}
      imgAlt={hoverImgAlt}
      imgSrc={hoverImgSrc}
    />
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
      <StyledLink
        className={className}
        href={href}
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
      {hoverImgSrc && isHovered && (
        <PortalImageWrapper
          hoverImgAlt={hoverImgAlt}
          hoverImgSrc={hoverImgSrc}
        />
      )}
    </>
  );
};

export default Link;
