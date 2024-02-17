import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Theme } from '~/constants/theme';
import { BorderWidth, Color } from '~/typings/theme';

import { FlexBox } from '../box/FlexBox';
import Button from './Button';
import { ButtonProps } from './types';

type IconButtonProps = Omit<ButtonProps, 'children' | 'variant'> & {
  forceHover?: boolean;
  color?: Color;
};

const AnimationWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

export const wobble = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(-30deg)
  }
`;

interface RotatingStylesArgs {
  theme: Theme;
  color: Color;
  forceHover: boolean;
  borderWidth?: BorderWidth;
}

export const Animator = styled(FlexBox)`
  transform-origin: center center;
  transition: transform 0.2s linear;
  height: 100%;
  width: 100%;
`;

export const makeSharedRotatingButtonStyles = ({
  theme,
  color,
  forceHover,
  borderWidth = 3,
}: RotatingStylesArgs) => {
  const hoverStyles = {
    borderWidth: theme.borderWidth[1],
    animation: `${wobble} 0.5s forwards`,
    [`${Animator}`]: {
      transform: 'scale(0.81)',
      border: `${theme.borderWidth[borderWidth]} solid ${theme.colors[color]}`,
    },
  };

  return {
    borderRadius: '50%',
    padding: 0,
    margin: 0,
    borderColor: theme.colors[color],
    borderStyle: 'solid',
    borderWidth: theme.borderWidth[borderWidth],
    '&:hover': hoverStyles,
    ...(forceHover && hoverStyles),
  };
};

const StyledButton = styled(Button)<IconButtonProps>(
  ({ theme, color = 'text', forceHover }) => ({
    height: theme.spacing[48],
    width: theme.spacing[48],
    ...makeSharedRotatingButtonStyles({
      theme,
      color,
      forceHover: Boolean(forceHover),
    }),
  })
);

export function RotatingIconButton({
  children,
  onClick,
  className,
  color,
  forceHover,
}: PropsWithChildren<IconButtonProps>) {
  return (
    <StyledButton
      className={className}
      color={color}
      forceHover={forceHover}
      onClick={onClick}
    >
      <AnimationWrapper center>
        <Animator borderRadius="50%" center>
          {children}
        </Animator>
      </AnimationWrapper>
    </StyledButton>
  );
}
