import { CTA, EIcon } from '@/components/common';
import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import React from 'react';
import styles from './Results.module.css';

export const EligibilityResultsCTA = () => {
  const { t, language } = React.useContext(GlobalContext);
  const { gtmOnActionClick } = React.useContext(StepsContext);

  const ctaHref = `${language === 'es' ? '/es' : ''}/apply?clickedApply=1`;

  return (
    <div className={styles.EligibilityResultsCTA}>
      <CTA
        icon={EIcon.laptop}
        title={t('learn_how_to_apply')}
        body={{
          type: 'jsx',
          jsx: (
            <div className={styles.resultsCtaBody}>
              <p className='ssa-p-body'>{t('results_eligible_p1')}</p>
              <p className='ssa-p-body'>{t('results_eligible_p2')}</p>
            </div>
          ),
        }}
        btnTxt={t('get_started')}
        offsetSubtitleAndAccordions={false}
        offsetLackOfBottomSection={true}
        btnCb={(_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          gtmOnActionClick(t('learn_how_to_apply'), ctaHref);
          window.open(ctaHref, '_blank');
        }}
        btnDataTestAttr="learn-how-to-apply-link"
      />
    </div>
  );
};
