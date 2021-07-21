import styled from '@emotion/styled';

import { Spacing } from '~/typings/theme';

import Box from './Box';
import { AlignItems, BoxProps, JustifyContent } from './types';

export type GridBoxProps = BoxProps & {
  center?: boolean;
  justifyItems?: JustifyContent;
  alignItems?: AlignItems;
  inline?: boolean;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  columnGap?: Spacing;
  rowGap?: Spacing;
};

const Grid = styled(Box)<GridBoxProps>(
  { display: 'grid' },
  ({
    center,
    justifyItems,
    alignItems,
    inline,
    columns = 2,
    columnGap,
    rowGap,
    theme,
  }) => ({
    alignItems,
    columnGap,
    rowGap,
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    ...(center && {
      justifyItems: 'center',
      alignItems: 'center',
    }),
    ...(inline && {
      display: 'inline-grid',
    }),
    [theme.breakpoints.md]: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      justifyItems,
    },
  })
);

const GridBox: React.FC<GridBoxProps> = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Grid {...rest}>{children}</Grid>
);

export default GridBox;
