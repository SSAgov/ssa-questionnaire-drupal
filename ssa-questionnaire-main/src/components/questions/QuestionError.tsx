import { IQuestionErrorProps } from '@/interfaces';
import styles from './Question.module.css';

export const QuestionError = ({ error }: IQuestionErrorProps) => {
  return (
    <div className={styles.alertWrapper}>
      <div className={`usa-alert usa-alert--${error.type} usa-alert--slim`}>
        <div className="usa-alert__body">
          <p className="usa-alert__text">{error.message}</p>
        </div>
      </div>
    </div>
  );
};
