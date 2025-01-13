import { GlobalContext } from '@/context/global/GlobalContext';
import { ELang } from '@/interfaces';
import React from 'react';
import styles from './Section.module.css';

export const Mail = () => {
  const { t, language } = React.useContext(GlobalContext);
  function generateBodyTextWithLinks() {
    // You can mail a completed SS-5 application along with required documents to your local office.
    let result = t('mail_us_body');
    const ss5EnTxtEn = `Application for a Social Security Card (Form SS-5) (PDF)`;
    const localOfficeTxtEn = `local office`;
    const ss5EnLinkEn = `<a href="https://www.ssa.gov/forms/ss-5.pdf" target="_blank" rel="noopener noreferrer">${ss5EnTxtEn}</a>`;
    const localOfficeLinkEn = `<a href="https://secure.ssa.gov/ICON/main.jsp" target="_blank" rel="noopener noreferrer">${localOfficeTxtEn}</a>`;
    if (language === ELang.en) {
      result = result.replaceAll(ss5EnTxtEn, ss5EnLinkEn);
      result = result.replaceAll(localOfficeTxtEn, localOfficeLinkEn);
    }

    return result;
  }

  return (
    <div className={styles.Mail}>
      <h3 className={styles.title}>{t('other_ways_to_complete')}</h3>
      <h4 className={styles.subTitle}>{t('mail_us_section_title')}</h4>
      <p
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: generateBodyTextWithLinks() }}
      />
    </div>
  );
};
