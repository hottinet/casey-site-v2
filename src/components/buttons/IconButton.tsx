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

const StyledButton = styled(Button)`
  border-radius: 50%;
  padding: 0;
  margin: 0;
  height: 4.125rem;
  width: 4.125rem;
  border-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.text : theme.colors.textSecondary};
  border-style: solid;
  border-width: ${({ theme }) => theme.border.borderWidth[3]};
  &:hover {
    border-width: ${({ theme }) => theme.border.borderWidth[1]};
    animation: ${wobble} 0.5s forwards;
    ${Animator} {
      transform: scale(0.81);
      border: ${({ theme, variant }) =>
        `solid ${theme.border.borderWidth[3]} ${
          variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
        }`};
    }
  }
`;

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
