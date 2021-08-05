import styled from '@emotion/styled';

import Body from '../typography/Body';
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

const StyledButton = styled(Button)<Pick<TextButtonProps, 'forceHover'>>(
  ({ theme, variant, forceHover }) => ({
    height: theme.spacing[48],
    padding: theme.spacing[12],
    minWidth: '9.875rem',
    borderRadius: 500,
    border: `solid 3px ${
      variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
    }`,
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
      transform: forceHover ? 'scale(1)' : 'scale(0.91, 0.75)',
      transition: 'transform 0.2s linear',
    },
    '&:hover': {
      '&:before': {
        transform: 'scale(1)',
      },
    },
  })
);

const StyledText = styled(Body)<Pick<TextButtonProps, 'variant'>>`
  color: ${({ theme, variant }) =>
    variant !== 'primary' && theme.colors.textSecondary};
  font-size: 0.8rem;
`;

const TextButton: React.FC<TextButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className,
  buttonClassName,
  type,
  forceHover,
}) => (
  <AnimationWrapper className={className}>
    <StyledButton
      className={buttonClassName}
      forceHover={forceHover}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      <StyledText bold variant={variant}>
        {label}
      </StyledText>
    </StyledButton>
  </AnimationWrapper>
);

export default TextButton;
