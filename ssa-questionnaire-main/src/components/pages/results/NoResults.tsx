import { GlobalContext } from '@/context/global/GlobalContext';
import { ELetterCase } from '@/interfaces';
import React from 'react';
import { AnswersSummary } from './AnswersSummary';
import { BackToPrev } from './BackToPrev';
import styles from './Results.module.css';

export const NoResults = () => {
  const { t, language } = React.useContext(GlobalContext);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.NoResults}>
      <BackToPrev />
      <h1
        className={`ssa-h1 ${styles.eligibilityResultsTitle}`}
        data-test="no-results-title"
      >
        {t('no_results_title')}
      </h1>

      <div className={styles.noResultsBody}>
        <p className="ssa-p-body margin-top-0 margin-bottom-20px">
          {t('no_results_body_p1')}
        </p>
        <p className="ssa-p-body margin-top-0 margin-bottom-20px">
          {t('apply_anyway').split(',')[0]}
          {`, `}
          <a
            className={`ssa-hyperlink`}
            href={`${language === 'es' ? '/es' : ''}/apply?clickedApply=1`}
          >
            {t('learn_how_to_apply', ELetterCase.lowercase)}
          </a>
        </p>
        <p className="ssa-p-body margin-top-0 margin-bottom-20px">
          {t('call_us')}
        </p>
        <p
          className={`ssa-p-body margin-top-0 margin-bottom-20px`}
          dangerouslySetInnerHTML={{ __html: t('call_us_phone_number') }}
        ></p>
        <p
          className={`ssa-p-body margin-top-0 margin-bottom-0`}
          dangerouslySetInnerHTML={{ __html: t('call_us_phone_number_tty') }}
        ></p>
      </div>

      <AnswersSummary withTopLine />
    </div>
  );
};
