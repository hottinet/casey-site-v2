import styled from '@emotion/styled';
import Button from './Button';
import Body from '../typography/Body';
import { ButtonProps } from './types';

type TextButtonProps = Omit<ButtonProps, 'children'> & {
  label: string;
};

const StyledButton = styled(Button)`
  height: ${({ theme }) => theme.spacing[48]};
  min-width: 9.875rem;
`;

const StyledText = styled(Body)<Pick<TextButtonProps, 'variant'>>`
  color: ${({ theme, variant }) =>
    variant !== 'primary' && theme.colors.textSecondary};
`;

const TextButton: React.FC<TextButtonProps> = ({ label, onClick, variant }) => (
  <StyledButton onClick={onClick}>
    <StyledText bold variant={variant}>
      {label}
    </StyledText>
  </StyledButton>
);

export default TextButton;
