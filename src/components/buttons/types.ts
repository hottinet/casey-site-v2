export type ButtonProps = {
  children: string | React.ReactNode;
  onClick: (() => void) | undefined;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
};
