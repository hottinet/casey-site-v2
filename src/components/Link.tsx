import styled from '@emotion/styled';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';

import { Text, TextProps } from './typography/Text';

type BaseLinkProps = {
  internal?: boolean;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
  noHoverStyles?: boolean;
};

type ChildLinkProps = {
  label?: never;
  children: React.ReactNode;
};

type LabelLinkProps = {
  label: string;
  children?: never;
} & Omit<TextProps, 'children'>;

export type LinkProps = BaseLinkProps & (ChildLinkProps | LabelLinkProps);

const StyledLink = styled(NextLink)(({ theme }) => ({
  color: theme.colors.text,
  display: 'inline-block',
  cursor: 'pointer',
}));

const LinkText = styled(Text)<Pick<LinkProps, 'noHoverStyles'>>`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: ${({ noHoverStyles }) =>
      noHoverStyles ? 'none' : 'underline'};
  }
`;

const OnMouseSpan = styled.span`
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

function LinkChildren(
  props: (ChildLinkProps | LabelLinkProps) &
    Pick<BaseLinkProps, 'noHoverStyles'>
) {
  if ('label' in props) {
    const { label, ...textProps } = props;
    return (
      // @ts-expect-error This component is all fucked typewise
      <LinkText as="span" {...textProps}>
        {label}
      </LinkText>
    );
  }
  const { children } = props;
  return <>{children}</>;
}

export function Link({
  internal,
  href,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: LinkProps) {
  return (
    <StyledLink
      className={className}
      href={href}
      rel="noopener noreferrer"
      target={internal ? '_self' : '_blank'}
    >
      {/*
            Hack to allow mouseEvents inside nextjs links
            See https://github.com/vercel/next.js/issues/1490
          */}
      <OnMouseSpan
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <LinkChildren {...rest} />
      </OnMouseSpan>
    </StyledLink>
  );
}
