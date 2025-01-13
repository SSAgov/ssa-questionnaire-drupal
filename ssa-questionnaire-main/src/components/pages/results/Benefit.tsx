import { ReactComponent as LabelIcon } from '@/assets/label.svg';
import React from 'react';
import styles from './Results.module.css';

export const Benefit: React.FC<{
  title: string;
  explanation: string;
}> = ({ title, explanation }) => {
  return (
    <li className={styles.Benefit} data-test="benefit-item">
      <div className={styles.benefitIconContainer}>
        <LabelIcon fill="#0076d6" width={19} height={14} />
      </div>
      <div className={styles.benefitContent}>
        {title ? (
          <p className={`ssa-p-body-bold ${styles.benefitTitle}`}>{title}</p>
        ) : null}
        <p className={`ssa-p-body ${styles.benefitExplanation}`}>
          {explanation}
        </p>
      </div>
    </li>
  );
};
