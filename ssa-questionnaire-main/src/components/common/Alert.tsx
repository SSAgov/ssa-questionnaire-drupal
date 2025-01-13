import { EAlertType } from '@/interfaces';
import React from 'react';
import styles from './Alert.module.css';

export enum EAlertVariant {
  default = 'default',
  slim = 'slim',
  noIcon = 'noIcon',
}

export const Alert: React.FC<{
  type: EAlertType;
  variant: EAlertVariant;
  title?: string;
  alertText?: string;
  alertJsx?: React.ReactNode;
}> = ({
  type,
  variant = EAlertVariant.default,
  title,
  alertText,
  alertJsx,
}) => {
  return (
    <div
      className={`usa-alert usa-alert--${type} ${
        variant === EAlertVariant.noIcon ? 'usa-alert--no-icon' : ''
      } ${styles.Alert} ${styles[type]} ${styles[variant]}`}
      data-test="alert-component"
    >
      <div className="usa-alert__body">
        {variant === EAlertVariant.default && (
          <h4 className="usa-alert__heading ssa-h4">{title}</h4>
        )}
        <p className={`usa-alert__text ssa-p-body ${styles.alertTextDesktop}`}>
          {alertText && alertText}
          {alertJsx && alertJsx}
        </p>
      </div>
      <div className={`ssa-p-body ${styles.alertTextMobile}`}>
        {alertText && alertText}
        {alertJsx && alertJsx}
      </div>
    </div>
  );
};
