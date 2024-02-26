import styled from '@emotion/styled';

import { pxToRem } from '~/utils/pxToRem';
import { useIsIOS } from '~/utils/useIsIOS';

import { Text } from '../typography/Text';
import Button from './Button';
import { ButtonProps } from './types';

type TextButtonProps = Omit<ButtonProps, 'children'> & {
  label: string;
  buttonClassName?: string;
  forceHover?: boolean;
};

const AnimationWrapper = styled.div`
  position: relative;
  padding: 0.375rem;
  display: inline-block;
  margin: ${({ theme }) => theme.spacing[4]};
`;

const StyledButton = styled(Button)<
  Pick<TextButtonProps, 'forceHover'> & { isIOS: boolean }
>(({ theme, variant, forceHover, isIOS }) => ({
  height: theme.spacing[48],
  padding: theme.spacing[12],
  minWidth: '9.875rem',
  borderRadius: 500,
  border: `solid 3px ${
    variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
  }`,
  // IOS appears to have issues with percentage scales
  // which makes the buttons look broken. Disabling the hover effect
  // on IOS devices
  ...(!isIOS && {
    '::before': {
      content: '" "',
      position: 'absolute',
      top: '-0.1rem',
      left: '-0.1rem',
      right: '-0.1rem',
      bottom: '-0.1rem',
      border: `1px solid ${
        variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
      }`,
      borderRadius: 60,
      transformOrigin: 'center center',
      transform: forceHover ? 'scale(1)' : 'scale(0.895, 0.75)',
      transition: 'transform 0.2s linear',
    },
    '&:hover': {
      '&:before': {
        transform: 'scale(1)',
      },
    },
  }),
}));

function TextButton({
  label,
  onClick,
  variant = 'primary',
  className,
  buttonClassName,
  type,
  forceHover,
}: TextButtonProps) {
  const isIOS = useIsIOS();

  return (
    <AnimationWrapper className={className}>
      <StyledButton
        className={buttonClassName}
        forceHover={forceHover}
        isIOS={isIOS}
        type={type}
        variant={variant}
        onClick={onClick}
      >
        <Text
          color={variant !== 'primary' ? 'textSecondary' : undefined}
          fontSize={pxToRem(12)}
          fontWeight="bold"
        >
          {label}
        </Text>
      </StyledButton>
    </AnimationWrapper>
  );
}

export default TextButton;
