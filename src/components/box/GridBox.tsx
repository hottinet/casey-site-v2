import styled from '@emotion/styled';

import { Spacing } from '~/typings/theme';

import Box from './Box';
import { AlignItems, BoxProps, JustifyContent } from './types';

export type GridBoxProps = BoxProps & {
  center?: boolean;
  justifyContent?: JustifyContent;
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
    justifyContent,
    alignItems,
    inline,
    columns = 2,
    columnGap,
    rowGap,
    theme,
  }) => ({
    justifyContent,
    alignItems,
    columnGap,
    rowGap,
    gridTemplateColumns: '1fr',
    ...(center && {
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...(inline && {
      display: 'inline-grid',
    }),
    [theme.breakpoints.md]: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    },
  })
);

const GridBox: React.FC<GridBoxProps> = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Grid {...rest}>{children}</Grid>
);

export default GridBox;
