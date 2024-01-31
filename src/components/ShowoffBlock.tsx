import upperCase from 'lodash.uppercase';
import Image from 'next/image';
import { useState } from 'react';

import { Color } from '~/typings/theme';

import { Box } from './box/Box';
import { FlexBox } from './box/FlexBox';
import { GridBox, GridBoxProps } from './box/GridBox';
import { ArrowButton } from './buttons/ArrowButton';
import { Link } from './Link';
import { Text } from './typography/Text';

interface ShowoffBlockProps
  extends Omit<GridBoxProps, 'color' | 'backgroundColor'> {
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  title: string;
  linkHref: string;
  color: Color;
  backgroundColor: Color;
}

interface ShowoffLinkProps
  extends Pick<ShowoffBlockProps, 'title' | 'linkHref' | 'color'> {}

function ShowoffLink({ title, linkHref, color }: ShowoffLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={linkHref}
      internal
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexBox flexDirection="column">
        <Text as="span" color={color} variant="title-lg">
          {title}
        </Text>
        <ArrowButton forceHover={isHovered} title="" onClick={undefined} />
      </FlexBox>
    </Link>
  );
}

export function ShowoffBlock({
  imageSrc,
  imageAlt,
  tags,
  title,
  linkHref,
  backgroundColor,
  color,
  ...gridBoxProps
}: ShowoffBlockProps) {
  return (
    <GridBox
      backgroundColor={backgroundColor}
      color={color}
      columns={2}
      {...gridBoxProps}
    >
      <Box position="relative">
        <Image alt={imageAlt} fill src={imageSrc} />
      </Box>
      <FlexBox flexDirection="column">
        <FlexBox flexWrap="wrap" gap={8}>
          {tags && (
            <ul>
              {tags.map((t) => (
                <li key={t}>
                  <Text as="span" variant="caption">
                    {upperCase(t)}
                  </Text>
                </li>
              ))}
            </ul>
          )}
          <ShowoffLink color={color} linkHref={linkHref} title={title} />
        </FlexBox>
      </FlexBox>
    </GridBox>
  );
}
