import styled from '@emotion/styled';

import Arrow from '../icons/Arrow';
import IconButton from './IconButton';
import { ButtonProps } from './types';

type ArrowButtonProps = Pick<ButtonProps, 'onClick' | 'variant'> & {
  className?: string;
  title: string;
  forceHover?: boolean;
};

const ArrowIcon = styled(Arrow)`
  height: ${({ theme }) => theme.spacing[32]};
  width: ${({ theme }) => theme.spacing[32]};
`;

export function ArrowButton({
  onClick,
  title,
  variant = 'secondary',
  className,
  forceHover,
}: ArrowButtonProps) {
  return (
    <IconButton
      className={className}
      forceHover={forceHover}
      variant={variant}
      onClick={onClick}
    >
      <ArrowIcon title={`Navigate to ${title}`} titleId={`${title}Id`} />
    </IconButton>
  );
}
