import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import styles from './Section.module.css';

export const Call = () => {
  const { t } = React.useContext(GlobalContext);

  return (
    <div className={styles.Call}>
      <h3 className={styles.title}>{t('for_support')}</h3>
      <h4 className={styles.subTitle}>{t('call_us_section_title')}</h4>
      <p className={styles.body}>{t('available_from_to')}</p>
      <p
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: t('call_us_phone_number') }}
      />
      <p className={styles.body}>{t('tell_req_ssc')}</p>
      <p
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: t('call_us_phone_number_tty') }}
      />
    </div>
  );
};
