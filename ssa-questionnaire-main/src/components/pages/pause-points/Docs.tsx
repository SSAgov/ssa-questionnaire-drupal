import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import { ReactComponent as CheckIcon } from '@/assets/check_circle.svg';
import { ReactComponent as CancelIcon } from '@/assets/cancel.svg';
import styles from './Section.module.css';

export const Docs = () => {
  const { t } = React.useContext(GlobalContext);
  return (
    <div className={styles.Docs}>
      <h4 className={`${styles.docsTitle} margin-top-0 margin-bottom-8px ssa-h4`}>{t('docs_must')}</h4>
      <ul className={styles.docsList}>
        <li className={styles.docsItem}>
          <CheckIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_do_1')}</span>
        </li>
        <li className={styles.docsItem}>
          <CheckIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_do_2')}</span>
        </li>
      </ul>

      <h4 className={`${styles.docsTitle} margin-top-20px margin-bottom-8px ssa-h4`}>{t('docs_cannot')}</h4>
      <ul className={styles.docsList}>
        <li className={styles.docsItem}>
          <CancelIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_dont_1')}</span>
        </li>
        <li className={styles.docsItem}>
          <CancelIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_dont_2')}</span>
        </li>
        <li className={styles.docsItem}>
          <CancelIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_dont_3')}</span>
        </li>
        <li className={styles.docsItem}>
          <CancelIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_dont_4')}</span>
        </li>
        <li className={styles.docsItem}>
          <CancelIcon fill="1C1D1F" width={20} height={20} />
          <span className={`ssa-p-body`}>{t('docs_dont_5')}</span>
        </li>
      </ul>
    </div>
  );
};
