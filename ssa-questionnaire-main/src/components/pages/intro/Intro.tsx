import React from 'react';
import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import styles from './Intro.module.css';

export const Intro = () => {
  const { t } = React.useContext(GlobalContext);
  const { wizard, goToNextStep, goToPreviousStep } =
    React.useContext(StepsContext);

  //   const onClick = () => Steps.goToNextStep(props, questionnaire);

  return (
    <div>
      <div className="usa-summary-box__body">
        <h1 className={styles.heading} id="summary-box-key-information">
          Find the fastest way to apply
        </h1>
        <div className="usa-summary-box__text">
          <p className={styles.intro}>
            Let's face it, no one likes going to the office, so let's see if we
            can get you a replacement card without the extra trip.
          </p>
          <p className={styles.instructions}>
            We're going to ask you some questions to determine the quickest,
            easiest way to apply. If you do need to come visit us, we'll make
            sure you have everything you need the first time so you can get in
            and out as quickly as possible
          </p>

          <div className={styles.buttons}>
            <button
              className={`usa-button ${styles.next}`}
              onClick={() => goToNextStep()}
              type="button"
            >
              {t('next')}
            </button>

            <button
              onClick={() => goToPreviousStep()}
              type="button"
              className={`usa-button usa-button--unstyled ${styles.back}`}
            >
              {t('previous')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
