import styled from '@emotion/styled';

import Arrow from '../icons/Arrow';
import IconButton from './IconButton';
import { ButtonProps } from './types';

type ArrowButton = Pick<ButtonProps, 'onClick' | 'variant'> & {
  className?: string;
  title: string;
};

const ArrowIcon = styled(Arrow)`
  height: ${({ theme }) => theme.spacing[32]};
  width: ${({ theme }) => theme.spacing[32]};
`;

const ArrowButton: React.FC<ArrowButton> = ({
  onClick,
  title,
  variant = 'secondary',
}) => (
  <IconButton variant={variant} onClick={onClick}>
    <ArrowIcon title={`Navigate to ${title}`} titleId={`${title}Id`} />
  </IconButton>
);

export default ArrowButton;
