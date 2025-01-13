import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import styles from './Section.module.css';

export const NotEligible = () => {
  const { t } = React.useContext(GlobalContext);

  return (
    <div className={styles.Call} data-test="not-eligible-service-channel">
      <p className={styles.body}>{t('notprpap_not_qual')}</p>
      <p className={styles.body}>{t('notprpap_if_think_is_eligible')}</p>
      <p className={styles.body}>{t('available_from_to')}</p>
      <p
        className={`${styles.body} ${styles.noBottomMargin}`}
        dangerouslySetInnerHTML={{ __html: t('call_us_phone_number') }}
      />
      <p className={styles.body}>{t('notprpap_tell_req_ssc')}</p>
      <p
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: t('call_us_phone_number_tty') }}
      />
    </div>
  );
};
