import styled from '@emotion/styled';
import { useContext } from 'react';

import { BreakpointsContext } from '~/contexts/breakpointsContext';

import ContentBox from '../box/ContentBox';
import { GridBoxProps } from '../box/GridBox';
import Pickle from './Pickle';

type DetailPickleProps = {
  columns?: GridBoxProps['columns'];
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const StyledPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 95%;
  ${({ theme }) => theme.breakpoints.md} {
    width: 87%;
  }
`;

const PickleGrid = styled(ContentBox)`
  grid-column-gap: 7%;
`;

const DetailPickle: React.FC<DetailPickleProps> = ({
  columns,
  children,
  className,
}) => {
  const breakpoints = useContext(BreakpointsContext);
  return (
    <StyledPickle className={className}>
      <PickleGrid
        center
        columns={columns}
        grid
        widthRatio={breakpoints.includes('md') ? 1.13 : 1.05}
      >
        {children}
      </PickleGrid>
    </StyledPickle>
  );
};

export default DetailPickle;
