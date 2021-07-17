import styled from '@emotion/styled';

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
  width: 87%;
`;

const PickleGrid = styled(ContentBox)`
  grid-column-gap: 7%;
`;

const DetailPickle: React.FC<DetailPickleProps> = ({
  columns,
  children,
  className,
}) => (
  <StyledPickle className={className}>
    <PickleGrid center columns={columns} grid widthRatio={1.13}>
      {children}
    </PickleGrid>
  </StyledPickle>
);

export default DetailPickle;
