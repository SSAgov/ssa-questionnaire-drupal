import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import styles from './Section.module.css';
import { ELang } from '@/interfaces';

export const SigningIn = () => {
  const { t, language } = React.useContext(GlobalContext);

  function generateBodyTextWithLinks() {
    let result = t('submit_online_app');
    const txtEn = `online application`;
    const linkEn = `<a href="https://secure.ssa.gov/ossnap/public/landingOSsnap" target="_blank" rel="noopener noreferrer">online application</a>`;
    if (language === ELang.en) {
      result = result.replaceAll(txtEn, linkEn);
    }

    return result;
  }

  return (
    <div className={styles.SigningIn}>
      <h3 className={styles.title}>{t('trouble_signing_in')}</h3>
      <p className={styles.body}>{t('trouble_signing_in_body')}</p>
      <div className={styles.body}>
        <ol>
          <li
            dangerouslySetInnerHTML={{ __html: generateBodyTextWithLinks() }}
          />
          <li>{t('visit_office_verify')}</li>
          <li>{t('receive_card_in_mail')}</li>
        </ol>
      </div>
    </div>
  );
};
