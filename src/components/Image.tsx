import styled from '@emotion/styled';
import { ComponentType } from 'react';

import { AllowedCommonCssProps, AllowedCustomCssProps } from '~/constants/css';
import { filterCssProps } from '~/utils/css';

type ImageProps = AllowedCommonCssProps &
  AllowedCustomCssProps & {
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    fitParent?: boolean;
  };

const StyledImage = styled.img<ImageProps>(({ theme, ...props }) => ({
  maxHeight: '100%',
  maxWidth: '100%',
  ...filterCssProps(props, theme),
  ...(props.fitParent && {
    width: '100%',
  }),
})) as ComponentType<ImageProps>;

function Image({
  src,
  alt,
  className,
  loading = 'lazy',
  fitParent,
  ...styleProps
}: ImageProps) {
  return (
    <StyledImage
      alt={alt}
      className={className}
      fitParent={fitParent}
      loading={loading}
      src={src}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...styleProps}
    />
  );
}

export default Image;
