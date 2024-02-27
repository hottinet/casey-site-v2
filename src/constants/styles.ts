import { keyframes } from '@emotion/react';

import { pxToRem } from '~/utils/pxToRem';

export const NAV_BAR_HEIGHT = pxToRem(66);
export const SM_NAV_BAR_HEIGHT = pxToRem(44);

export const spin = keyframes`
  from {
    transform: rotate3D(0, 1, 0, 0deg);
  }
  to {
    transform: rotate3D(0, 1, 0, 360deg);
  }
`;
