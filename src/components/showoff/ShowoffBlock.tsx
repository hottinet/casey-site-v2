import Image from 'next/image';

import { pxToRem } from '~/utils/pxToRem';

import { Box } from '../box/Box';
import { GridBox } from '../box/GridBox';
import { ShowoffContent } from './ShowoffContent';
import { ShowoffBlockProps } from './types';

export function ShowoffBlock({
  imageSrc,
  imageAlt,
  tags,
  title,
  linkHref,
  backgroundColor,
  color,
  marginX,
  imageAspectRatio,
  marginY,
  ...gridBoxProps
}: ShowoffBlockProps) {
  return (
    <Box marginX={marginX} marginY={marginY} position="relative">
      <GridBox
        backgroundColor={backgroundColor}
        color={color}
        columns={2}
        minHeight={pxToRem(450)}
        {...gridBoxProps}
      >
        <Box />
        <ShowoffContent
          color={color}
          linkHref={linkHref}
          tags={tags}
          title={title}
        />
      </GridBox>
      <Box
        alignItems="center"
        display="flex"
        height="100%"
        left={0}
        position="absolute"
        top={0}
        width="50%"
      >
        <Box aspectRatio={imageAspectRatio} position="relative" width="100%">
          <Image alt={imageAlt} fill src={imageSrc} />
        </Box>
      </Box>
    </Box>
  );
}
