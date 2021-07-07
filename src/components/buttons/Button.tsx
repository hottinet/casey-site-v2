import styled from '@emotion/styled';

import { ButtonProps } from './types';

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  background-color: transparent;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
}) => (
  <StyledButton
    className={className}
    type="button"
    variant={variant}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
