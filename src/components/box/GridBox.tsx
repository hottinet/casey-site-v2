import styled from '@emotion/styled';

import { Theme } from '~/constants/theme';

import Box from './Box';
import { AlignItems, BoxProps, JustifyContent } from './types';

type GridBoxProps = BoxProps & {
  center?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  inline?: boolean;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  columnGap?: keyof Theme['spacing'];
};

const Grid = styled(Box)<GridBoxProps>(
  { display: 'grid' },
  ({ center, justifyContent, alignItems, inline, columns = 2, columnGap }) => ({
    justifyContent,
    alignItems,
    columnGap,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    ...(center && {
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...(inline && {
      display: 'inline-grid',
    }),
  })
);

const GridBox: React.FC<GridBoxProps> = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Grid {...rest}>{children}</Grid>
);

export default GridBox;
