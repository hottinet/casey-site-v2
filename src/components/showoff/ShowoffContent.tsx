import styled from '@emotion/styled';
import upperCase from 'lodash.uppercase';
import { useState } from 'react';

import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

import { FlexBox } from '../box/FlexBox';
import { ArrowButton } from '../buttons/ArrowButton';
import { Link } from '../Link';
import { Text } from '../typography/Text';
import { ShowoffBlockProps } from './types';

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[16]};
`;

interface ShowoffLinkProps
  extends Pick<ShowoffBlockProps, 'title' | 'linkHref' | 'color'> {}

function ShowoffLink({ title, linkHref, color }: ShowoffLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const smDown = useBreakpointsLessThan('md');

  return (
    <Link
      href={linkHref}
      internal
      noHoverStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexBox flexDirection="column" gap={16}>
        <Text as="span" color={color} variant={smDown ? 'title' : 'title-lg'}>
          {title}
        </Text>
        <ArrowButton
          color={color}
          forceHover={isHovered}
          title=""
          onClick={undefined}
        />
      </FlexBox>
    </Link>
  );
}

interface ShowoffContentProps
  extends Pick<ShowoffBlockProps, 'tags' | 'color' | 'linkHref' | 'title'> {}

export function ShowoffContent({
  tags,
  color,
  linkHref,
  title,
}: ShowoffContentProps) {
  return (
    <FlexBox flexDirection="column" gap={8} justifyContent="center">
      <FlexBox flexWrap="wrap">
        {tags && (
          <TagList>
            {tags.map((t) => (
              <li key={t}>
                <Text as="span" variant="body">
                  {upperCase(t)}
                </Text>
              </li>
            ))}
          </TagList>
        )}
      </FlexBox>
      <ShowoffLink color={color} linkHref={linkHref} title={title} />
    </FlexBox>
  );
}
