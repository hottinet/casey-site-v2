export type ButtonProps = {
  children: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
};
