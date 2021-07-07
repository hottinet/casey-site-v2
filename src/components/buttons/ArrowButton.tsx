import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Arrow from '../icons/Arrow';
import IconButton from './IconButton';
import { ButtonProps } from './types';

type ArrowButton = Pick<ButtonProps, 'onClick' | 'variant'> & {
  className?: string;
  title: string;
};

const wobble = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(-30deg)
  }
`;

const Button = styled(IconButton)`
  :hover {
    animation: ${wobble} 0.5s alternate infinite;
  }
`;

const ArrowIcon = styled(Arrow)`
  height: ${({ theme }) => theme.spacing[32]};
  width: ${({ theme }) => theme.spacing[32]};
`;

const ArrowButton: React.FC<ArrowButton> = ({
  onClick,
  title,
  variant = 'secondary',
}) => (
  <Button variant={variant} onClick={onClick}>
    <ArrowIcon title={`Navigate to ${title}`} titleId={`${title}Id`} />
  </Button>
);

export default ArrowButton;
