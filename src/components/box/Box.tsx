/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import {
  AllowedCommonCssProps,
  AllowedCustomCssSpacingProps,
  AllowedFlexboxCssProps,
  AllowedGridBoxCssProps,
} from '~/constants/css';
import { makeCssPropStyles } from '~/utils/css';

type BoxProps = Omit<AllowedCommonCssProps, 'borderWidth' | 'borderRadius'> &
  AllowedCustomCssSpacingProps &
  AllowedFlexboxCssProps &
  AllowedGridBoxCssProps &
  HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };

export const Box: React.FC<BoxProps> =
  styled('div')<BoxProps>(makeCssPropStyles);
