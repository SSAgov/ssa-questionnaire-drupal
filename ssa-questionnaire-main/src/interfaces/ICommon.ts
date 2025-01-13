export enum EButton {
  button = 'button',
  submit = 'submit',
}

export enum EButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface IButtonProps {
  children: JSX.Element | string;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: EButton;
  variant: EButtonVariant;
  isNextBtn?: boolean;
  isDisabled?: boolean;
  tabIndex?: number;
  'aria-disabled'?: boolean;
}
