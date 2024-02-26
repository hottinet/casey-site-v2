import styled from '@emotion/styled';

import { ButtonProps } from './types';

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  background-color: transparent;
  cursor: pointer;
`;

function Button({
  children,
  onClick,
  className,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  return (
    <StyledButton
      aria-hidden={!onClick}
      className={className}
      role={onClick ? 'button' : 'none'}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
