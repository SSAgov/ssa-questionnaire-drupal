import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import React from 'react';
import styles from './ReturnToTop.module.css';

const COMPONENT_RENDER_DELAY_TIME = 500;

export const ReturnToTop = () => {
  const { t } = React.useContext(GlobalContext);
  const { step, currentStepContent } = React.useContext(StepsContext);
  const [showReturnToTop, set__showReturnToTop] = React.useState(false);

  React.useEffect(() => {
    set__showReturnToTop(false);
    const showTimeout = setTimeout(() => {
      set__showReturnToTop(true);
    }, COMPONENT_RENDER_DELAY_TIME);

    return () => clearTimeout(showTimeout);
  }, [step]);

  if (!currentStepContent || currentStepContent?.type !== 'page') return null;

  const deploymentPlatform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;
  const inProd = deploymentPlatform === 'drupal';

  return (
    <div
      className={`${styles.ReturnToTop} ${!inProd ? styles.notInProd : ''} ${
        showReturnToTop ? styles.show : styles.hide
      }`}
    >
      <button
        className={styles.returnToTopBtn}
        onClick={() => {
          const progressElement = document.getElementById('progress-bar');
          if (progressElement) {
            progressElement.scrollIntoView({
              block: 'end',
              behavior: 'smooth',
            });
          }
        }}
      >
        {t('return_to_top')}
      </button>
    </div>
  );
};
