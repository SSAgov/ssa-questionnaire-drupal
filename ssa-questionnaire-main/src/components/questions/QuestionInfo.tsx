import { EAlertType } from '@/interfaces';
import { Alert, EAlertVariant } from '../common';
import styles from './Question.module.css';

export const QuestionInfo = ({ info = '' }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <Alert
        variant={EAlertVariant.noIcon}
        type={EAlertType.info}
        alertText={info}
      />
    </div>
  );
};
