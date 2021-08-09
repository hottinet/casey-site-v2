import styled from '@emotion/styled';

import { MarginProps } from './box/types';

type ImageProps = MarginProps & {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fitParent?: boolean;
};

const StyledImage = styled.img<ImageProps>(
  ({ theme, mt = 0, mb = 0, mr = 0, ml = 0, fitParent }) => ({
    maxHeight: '100%',
    maxWidth: '100%',
    marginTop: theme.spacing[mt],
    marginRight: theme.spacing[mr],
    marginLeft: theme.spacing[ml],
    marginBottom: theme.spacing[mb],
    ...(fitParent && {
      width: '100%',
    }),
  })
);

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  loading = 'lazy',
  fitParent,
  ...styleProps
}) => (
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

export default Image;
