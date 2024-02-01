import { Color } from '~/typings/theme';

import { GridBoxProps } from '../box/GridBox';

export interface ShowoffBlockProps
  extends Omit<GridBoxProps, 'color' | 'backgroundColor'> {
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  title: string;
  linkHref: string;
  color: Color;
  backgroundColor: Color;
  imageAspectRatio: string;
}
