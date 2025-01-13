import { EAlertType } from '@/interfaces';
import { Alert, EAlertVariant } from '../common';
import styles from './Question.module.css';

export const QuestionInfo = ({ info = '' }) => {
  if (!info) return null;

  return (
    <>
      <h3 className="ssa-h3">Default</h3>
      <div className={styles.info}>
        Info:
        <Alert
          variant={EAlertVariant.default}
          type={EAlertType.info}
          title="Alert title goes here"
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Success:
        <Alert
          variant={EAlertVariant.default}
          type={EAlertType.success}
          title="Alert title goes here"
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Warning:
        <Alert
          variant={EAlertVariant.default}
          type={EAlertType.warning}
          title="Alert title goes here"
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Error:
        <Alert
          variant={EAlertVariant.default}
          type={EAlertType.error}
          title="Alert title goes here"
          alertText={info}
        />
      </div>
      <br/>
      <hr />

      <h3 className="ssa-h3">Slim</h3>
      <div className={styles.info}>
        Info:
        <Alert
          variant={EAlertVariant.slim}
          type={EAlertType.info}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Success:
        <Alert
          variant={EAlertVariant.slim}
          type={EAlertType.success}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Warning:
        <Alert
          variant={EAlertVariant.slim}
          type={EAlertType.warning}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Error:
        <Alert
          variant={EAlertVariant.slim}
          type={EAlertType.error}
          alertText={info}
        />
      </div>
      <br/>
      <hr />

      <h3 className="ssa-h3">No Icon</h3>
      <div className={styles.info}>
        Info:
        <Alert
          variant={EAlertVariant.noIcon}
          type={EAlertType.info}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Success:
        <Alert
          variant={EAlertVariant.noIcon}
          type={EAlertType.success}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Warning:
        <Alert
          variant={EAlertVariant.noIcon}
          type={EAlertType.warning}
          alertText={info}
        />
      </div>
      <div className={styles.info}>
        Error:
        <Alert
          variant={EAlertVariant.noIcon}
          type={EAlertType.error}
          alertText={info}
        />
      </div>
      <br/>
      <hr />
    </>
  );

  // return (
  //   <section
  //     className={`usa-site-alert usa-site-alert--info usa-site-alert--no-heading usa-site-alert--no-icon ${styles.info}`}
  //     aria-label={info}
  //   >
  //     <div className="usa-alert">
  //       <div className="usa-alert__body">
  //         <p className="usa-alert__text">{info}</p>
  //       </div>
  //     </div>
  //   </section>
  // );
};
