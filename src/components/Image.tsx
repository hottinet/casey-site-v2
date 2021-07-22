import styled from '@emotion/styled';
import NextImage from 'next/image';

import { MarginProps } from './box/types';

type ImageProps = MarginProps & {
  src: string;
  alt: string;
  className?: string;
};

const ImageContainer = styled.div<MarginProps>`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: ${({ mt = 0, theme }) => theme.spacing[mt]};
  margin-bottom: ${({ mb = 0, theme }) => theme.spacing[mb]};
  margin-right: ${({ mr = 0, theme }) => theme.spacing[mr]};
  margin-left: ${({ ml = 0, theme }) => theme.spacing[ml]};
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...styleProps
}) => (
  <ImageContainer
    className={className}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...styleProps}
  >
    <NextImage
      alt={alt}
      layout="fill"
      loading="lazy"
      objectFit="contain"
      src={src}
    />
  </ImageContainer>
);

export default Image;
