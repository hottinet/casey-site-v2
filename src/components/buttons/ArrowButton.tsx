import styled from '@emotion/styled';

import { Color } from '~/typings/theme';

import Arrow from '../icons/Arrow';
import { RotatingIconButton } from './RotatingIconButton';
import { ButtonProps } from './types';

type ArrowButtonProps = Pick<ButtonProps, 'onClick' | 'variant'> & {
  className?: string;
  title: string;
  forceHover?: boolean;
  color?: Color;
};

const ArrowIcon = styled(Arrow)`
  height: ${({ theme }) => theme.spacing[32]};
  width: ${({ theme }) => theme.spacing[32]};
`;

export function ArrowButton({
  onClick,
  title,
  color = 'textSecondary',
  className,
  forceHover,
}: ArrowButtonProps) {
  return (
    <RotatingIconButton
      className={className}
      color={color}
      forceHover={forceHover}
      onClick={onClick}
    >
      <ArrowIcon
        color={color}
        title={`Navigate to ${title}`}
        titleId={`${title}Id`}
      />
    </RotatingIconButton>
  );
}
