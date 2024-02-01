import styled from '@emotion/styled';
import upperCase from 'lodash.uppercase';
import { useState } from 'react';

import { FlexBox } from '../box/FlexBox';
import { ArrowButton } from '../buttons/ArrowButton';
import { Link } from '../Link';
import { Text } from '../typography/Text';
import { ShowoffBlockProps } from './types';

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[8]};
`;

interface ShowoffLinkProps
  extends Pick<ShowoffBlockProps, 'title' | 'linkHref' | 'color'> {}

function ShowoffLink({ title, linkHref, color }: ShowoffLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={linkHref}
      internal
      noHoverStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexBox flexDirection="column" gap={8}>
        <Text as="span" color={color} variant="title-lg">
          {title}
        </Text>
        <ArrowButton forceHover={isHovered} title="" onClick={undefined} />
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
    <FlexBox flexDirection="column" justifyContent="center">
      <FlexBox flexWrap="wrap" gap={8}>
        {tags && (
          <TagList>
            {tags.map((t) => (
              <li key={t}>
                <Text as="span" variant="caption">
                  {upperCase(t)}
                </Text>
              </li>
            ))}
          </TagList>
        )}
        <ShowoffLink color={color} linkHref={linkHref} title={title} />
      </FlexBox>
    </FlexBox>
  );
}
