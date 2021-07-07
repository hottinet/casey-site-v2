import styled from '@emotion/styled';
import { AlignItems, JustifyContent } from './types';

type GridBoxProps = {
  children: React.ReactNode | React.ReactNode[];
  center?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  inline?: boolean;
  columns?: 2 | 3 | 4;
};

const GridContainer = styled.div<Omit<GridBoxProps, 'children'>>(
  { display: 'grid' },
  ({ center, justifyContent, alignItems, inline, columns = 2 }) => ({
    justifyContent,
    alignItems,
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
  <GridContainer {...rest}>{children}</GridContainer>
);

export default GridBox;
