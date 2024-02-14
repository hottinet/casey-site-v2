import styled from '@emotion/styled';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';

import { Text, TextProps } from './typography/Text';

export type BaseLinkProps = {
  internal?: boolean;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
};

type ChildLinkProps = {
  children: React.ReactNode;
  label?: never;
};

type LabelLinkProps = {
  label: string;
  children?: never;
} & TextProps;

type LinkProps = BaseLinkProps & (ChildLinkProps | LabelLinkProps);

const StyledLink = styled(NextLink)(({ theme }) => ({
  color: theme.colors.text,
  display: 'inline-block',
  cursor: 'pointer',
}));

const LinkText = styled(Text)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

const OnMouseSpan = styled.span`
  display: inline-flex;
  width: 100%;
`;

function LinkChildren(props: ChildLinkProps | LabelLinkProps) {
  if ('label' in props) {
    const { label, ...textProps } = props;
    return (
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
