import Image from 'next/image';

import { pxToRem } from '~/utils/pxToRem';
import {
  useBreakpointsIsExactly,
  useBreakpointsLessThan,
} from '~/utils/useBreakpoints';

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
  imageMaxWidth = pxToRem(442),
  smScreenImageHeight = pxToRem(444),
  ...gridBoxProps
}: ShowoffBlockProps) {
  const exactlySm = useBreakpointsIsExactly('sm');
  const smAndDown = useBreakpointsLessThan('md');
  const xsAndDown = useBreakpointsLessThan('sm');
  const blockHeight = pxToRem(450);

  return (
    <Box marginX={marginX} marginY={marginY} position="relative">
      <GridBox
        backgroundColor={backgroundColor}
        color={color}
        columns={xsAndDown ? 1 : 2}
        gap={xsAndDown ? 0 : 8}
        gridTemplateRows={xsAndDown ? 'auto auto' : '1fr'}
        height={xsAndDown ? undefined : blockHeight}
        paddingBottom={xsAndDown ? 32 : 0}
        paddingRight={xsAndDown ? 0 : 48}
        paddingTop={0}
        {...gridBoxProps}
      >
        <Box
          display="flex"
          height={
            // eslint-disable-next-line no-nested-ternary
            exactlySm
              ? blockHeight
              : xsAndDown
                ? smScreenImageHeight
                : undefined
          }
          justifyContent="center"
          paddingY={exactlySm ? 24 : 0}
        >
          {/*
            At the sm breakpoint and below, the image should be "inside" the block,
            rather than "floating"
          */}
          {smAndDown && (
            <Box
              aspectRatio={imageAspectRatio}
              height="100%"
              position="relative"
              transform={xsAndDown ? 'translateY(-10%) scale(1.1)' : 'none'}
            >
              <Image alt={imageAlt} fill src={imageSrc} />
            </Box>
          )}
        </Box>
        <ShowoffContent
          color={color}
          linkHref={linkHref}
          tags={tags}
          title={title}
        />
      </GridBox>
      {!xsAndDown && (
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
            maxWidth={imageMaxWidth}
            width="100%"
          >
            <Box
              aspectRatio={imageAspectRatio}
              position="relative"
              width="100%"
            >
              <Image alt={imageAlt} fill src={imageSrc} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
