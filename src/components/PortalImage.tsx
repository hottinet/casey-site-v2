import styled from '@emotion/styled';
import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { PortalImageContext } from '~/contexts/portalImageContext';

import Image from './Image';

type PortalImageProps = {
  imgSrc: string;
  imgAlt: string;
  coords: [number, number];
};

const StyledImage = styled(Image)<Pick<PortalImageProps, 'coords'>>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ coords }) => `translate(${coords[0]}px, ${coords[1]}px)`};
  width: 250px;
  max-height: none;
  display: ${({ coords }) => (coords[0] && coords[1] ? 'block' : 'none')};
`;

const PortalImage: React.FC<PortalImageProps> = ({
  imgAlt,
  imgSrc,
  coords,
}) => {
  const portalTargetRef = useContext(PortalImageContext);

  return (
    <>
      {portalTargetRef?.current &&
        createPortal(
          <StyledImage alt={imgAlt} coords={coords} fitParent src={imgSrc} />,
          portalTargetRef.current
        )}
    </>
  );
};

export default PortalImage;
