import styled from '@emotion/styled';
import Button from './Button';
import Body from '../typography/Body';
import { ButtonProps } from './types';

type TextButtonProps = Omit<ButtonProps, 'children'> & {
  label: string;
  buttonClassName?: string;
};

const AnimationWrapper = styled.div`
  position: relative;
  padding: 0.375rem;
  display: inline-block;
  margin: ${({ theme }) => theme.spacing[4]};
`;

const StyledButton = styled(Button)`
  height: ${({ theme }) => theme.spacing[48]};
  padding: ${({ theme }) => theme.spacing[12]};
  min-width: 9.875rem;
  border-radius: 500px;
  border: ${({ theme, variant }) =>
    `solid 3px ${
      variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
    }`};
  ::before {
    content: ' ';
    position: absolute;
    top: -0.1rem;
    left: -0.1rem;
    right: -0.1rem;
    bottom: -0.1rem;
    border: ${({ theme, variant }) =>
      `1px solid ${
        variant === 'primary' ? theme.colors.text : theme.colors.textSecondary
      }`};
    border-radius: 60px;
    transform-origin: center center;
    transform: scale(0.91, 0.75);
    transition: transform 0.2s linear;
  }
  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

const StyledText = styled(Body)<Pick<TextButtonProps, 'variant'>>`
  color: ${({ theme, variant }) =>
    variant !== 'primary' && theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.subBody};
`;

const TextButton: React.FC<TextButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className,
  buttonClassName,
}) => (
  <AnimationWrapper className={className}>
    <StyledButton
      className={buttonClassName}
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
