import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import FlexBox from '../box/FlexBox';
import Button from './Button';
import { ButtonProps } from './types';

type IconButtonProps = Omit<ButtonProps, 'childre'> & {
  children: React.ReactNode;
};

const AnimationWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

const wobble = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(-30deg)
  }
`;

const Animator = styled(FlexBox)<Pick<IconButtonProps, 'variant'>>`
  transform-origin: center center;
  transition: transform 0.2s linear;
  height: 100%;
  width: 100%;
`;

const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '50%',
  padding: 0,
  margin: 0,
  height: theme.spacing[64],
  width: theme.spacing[64],
  borderColor:
    variant === 'primary' ? theme.colors.text : theme.colors.textSecondary,
  borderStyle: 'solid',
  borderWidth: theme.border.borderWidth[3],
  '&:hover': {
    borderWidth: theme.border.borderWidth[1],
    animation: `${wobble} 0.5s forwards`,
    [`${Animator}`]: {
      transform: 'scale(0.81)',
      border: `${theme.border.borderWidth[3]} solid ${
        variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
      }`,
    },
  },
}));

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
}) => (
  <StyledButton className={className} variant={variant} onClick={onClick}>
    <AnimationWrapper center>
      <Animator borderRadius="50%" center variant={variant}>
        {children}
      </Animator>
    </AnimationWrapper>
  </StyledButton>
);

export default IconButton;
