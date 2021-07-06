import styled from '@emotion/styled';
import Button from './Button';
import { ButtonProps } from './types';

type IconButtonProps = Omit<ButtonProps, 'childre'> & {
  children: React.ReactNode;
};

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Animator = styled.div<Pick<IconButtonProps, 'variant'>>`
  transform-origin: center center;
  transition: transform 0.2s linear;
  border-radius: 50%;
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
  border-width: 0.1875rem;
  &:hover {
    border-width: 1px;
    ${Animator} {
      transform: scale(0.81);
      border: ${({ theme, variant }) =>
        `solid 3px ${
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
    <AnimationWrapper>
      <Animator variant={variant}>{children}</Animator>
    </AnimationWrapper>
  </StyledButton>
);

export default IconButton;
