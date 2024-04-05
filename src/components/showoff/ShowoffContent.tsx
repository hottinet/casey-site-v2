import styled from '@emotion/styled';
import upperCase from 'lodash.uppercase';
import { PropsWithChildren, useState } from 'react';

import { useXByBreakpoint } from '~/utils/useBreakpoints';

import { FlexBox } from '../box/FlexBox';
import { ArrowButton } from '../buttons/ArrowButton';
import { Link } from '../Link';
import { Text, TextProps } from '../typography/Text';
import { ShowoffBlockProps } from './types';

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const ShowoffStyledLink = styled(Link)`
  text-decoration: none;
`;

export interface ShowoffContentProps
  extends Pick<ShowoffBlockProps, 'tags' | 'color' | 'linkHref' | 'title'> {
  mini?: boolean;
  underline?: boolean;
}

interface ShowoffLinkProps
  extends Pick<
    ShowoffContentProps,
    'title' | 'linkHref' | 'color' | 'mini' | 'underline'
  > {}

interface ShowoffBodyWrapperProps
  extends Pick<ShowoffLinkProps, 'mini' | 'linkHref'> {
  setIsHovered: (hovered: boolean) => void;
}

function ShowoffBodyWrapper({
  children,
  mini,
  linkHref,
  setIsHovered,
}: PropsWithChildren<ShowoffBodyWrapperProps>) {
  if (mini) {
    return <>{children}</>;
  }
  return (
    <ShowoffStyledLink
      href={linkHref}
      internal
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </ShowoffStyledLink>
  );
}

function ShowoffLink({
  title,
  linkHref,
  color,
  mini,
  underline,
}: ShowoffLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variant = useXByBreakpoint<TextProps['variant']>({
    base: mini ? 'bodyMedium' : 'headline4',
    md: mini ? 'bodyLarge' : 'headline3',
  });

  return (
    <ShowoffBodyWrapper
      linkHref={linkHref}
      mini={mini}
      setIsHovered={setIsHovered}
    >
      <FlexBox flexDirection="column" gap={16} width="100%">
        <Text
          as="span"
          color={color}
          lineHeight="115%"
          textDecoration={underline ? 'underline' : 'none'}
          variant={variant}
        >
          {title}
        </Text>
        {!mini && (
          <ArrowButton
            color={color}
            forceHover={isHovered}
            title=""
            onClick={undefined}
          />
        )}
      </FlexBox>
    </ShowoffBodyWrapper>
  );
}

export function ShowoffContent({
  tags,
  color,
  linkHref,
  title,
  mini,
  underline,
}: ShowoffContentProps) {
  return (
    <FlexBox flexDirection="column" gap={8} justifyContent="center">
      <FlexBox flexWrap="wrap">
        {tags && (
          <TagList>
            {tags.map((t) => (
              <li key={t}>
                <Text
                  as="span"
                  fontWeight="bold"
                  variant={mini ? 'subtitle3' : 'bodySmall'}
                >
                  {upperCase(t)}
                </Text>
              </li>
            ))}
          </TagList>
        )}
      </FlexBox>
      <ShowoffLink
        color={color}
        linkHref={linkHref}
        mini={mini}
        title={title}
        underline={underline}
      />
    </FlexBox>
  );
}
