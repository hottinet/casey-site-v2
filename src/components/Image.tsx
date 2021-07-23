import styled from '@emotion/styled';

import { MarginProps } from './box/types';

type ImageProps = MarginProps & {
  src: string;
  alt: string;
  className?: string;
  fitParent?: boolean;
};

const StyledImage = styled.img<ImageProps>`
  width: ${({ fitParent }) => fitParent && '100%'};
  max-height: 100%;
  max-width: 100%;
  margin-top: ${({ mt = 0, theme }) => theme.spacing[mt]};
  margin-bottom: ${({ mb = 0, theme }) => theme.spacing[mb]};
  margin-right: ${({ mr = 0, theme }) => theme.spacing[mr]};
  margin-left: ${({ ml = 0, theme }) => theme.spacing[ml]};
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fitParent,
  className,
  ...styleProps
}) => (
  <StyledImage
    alt={alt}
    className={className}
    fitParent={fitParent}
    loading="lazy"
    src={src}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...styleProps}
  />
);

export default Image;
