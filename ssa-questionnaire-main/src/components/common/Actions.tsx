import { EButtonVariant, IButtonProps } from '@/interfaces';
import React from 'react';
import styles from './Actions.module.css';

export interface IPrProps {
  isPr: boolean;
  revealed: boolean;
}
export interface IActionsProps {
  children: JSX.Element | JSX.Element[];
  prProps?: IPrProps;
}

export const Actions = ({ children, prProps }: IActionsProps) => {
  return (
    <div
      data-test="actions-wrapper"
      className={`${styles.actionsWrapper} ${
        prProps && prProps.isPr ? styles.onProgressiveReveal : ''
      } ${prProps && prProps.revealed ? styles.onPRRevealed : ''}`}
    >
      {children}
    </div>
  );
};

export const Button: React.FC<IButtonProps> = (
  componentProps: IButtonProps,
) => {
  const {
    children,
    variant = EButtonVariant.primary,
    className = '',
    isNextBtn = false,
    ...props
  } = componentProps;

  function getProps() {
    let buttonProps = { ...props };
    if (buttonProps.disabled) {
      buttonProps = { ...buttonProps, 'aria-disabled': true };
    } else {
      buttonProps = { ...buttonProps, 'aria-disabled': false };
    }
    return buttonProps;
  }

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        isNextBtn ? styles.isNextBtn : ''
      } ${className}`}
      {...getProps()}
    >
      {children}
    </button>
  );
};
