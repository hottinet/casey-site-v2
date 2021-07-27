import styled from '@emotion/styled';
import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { PortalImageContext } from '~/contexts/portalImageContext';

import Image from './Image';

type MaxDimensionObj = { dimension: 'width' | 'height'; size: number };

type PortalImageProps = {
  imgSrc: string;
  imgAlt: string;
  coords: [number, number] | undefined;
  maxDimension?: MaxDimensionObj;
};

const defaultDimension: PortalImageProps['maxDimension'] = {
  dimension: 'width',
  size: 250,
};

const StyledImage = styled(Image)<
  Pick<PortalImageProps, 'coords'> & {
    maxDimension: MaxDimensionObj;
  }
>(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    maxHeight: 'none',
    maxWidth: 'none',
    width: 'auto',
    height: 'auto',
  },
  ({ coords, maxDimension }) => ({
    display: coords ? 'block' : 'none',
    [maxDimension.dimension]: `${maxDimension.size}px`,
    transform: `translate(${coords?.[0] || 0}px, ${coords?.[1] || 0}px)`,
  })
);

const PortalImage: React.FC<PortalImageProps> = ({
  imgAlt,
  imgSrc,
  coords,
  maxDimension = defaultDimension,
}) => {
  const portalTargetRef = useContext(PortalImageContext);
  return (
    <>
      {portalTargetRef?.current &&
        coords &&
        createPortal(
          <StyledImage
            alt={imgAlt}
            coords={coords}
            fitParent
            loading="eager"
            maxDimension={maxDimension}
            src={imgSrc}
          />,
          portalTargetRef.current
        )}
    </>
  );
};

export default PortalImage;
