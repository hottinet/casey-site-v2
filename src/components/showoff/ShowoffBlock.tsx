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
        height={pxToRem(450)}
        paddingRight={48}
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
        display="flex"
        height="100%"
        justifyContent="center"
        left={0}
        position="absolute"
        top={0}
        width="50%"
      >
        <Box
          alignItems="center"
          display="flex"
          height="100%"
          justifyContent="center"
          maxWidth={pxToRem(442)}
          width="100%"
        >
          <Box aspectRatio={imageAspectRatio} position="relative" width="100%">
            <Image alt={imageAlt} fill src={imageSrc} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
