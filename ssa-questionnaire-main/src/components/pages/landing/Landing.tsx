import React from 'react';
import { StepsContext } from '@/context/steps/StepsContext';
import { emitGtmEvent } from '@/global-utils';
import styles from './Landing.module.css';

export const Landing = () => {
  const { wizard, goToNextStep, step } = React.useContext(StepsContext);
  //   const onClick = () => Steps.goToNextStep(props, questionnaire);
  // console.log('state = ', state);
  // console.log('step = ', step);
  // console.log('wizard = ', wizard);

  const handleGetStartedClick = (e: React.MouseEvent<HTMLElement>) => {
    emitGtmEvent('getStartedClicked', { stepId: step });
    goToNextStep();
  };

  return (
    <div>
      <div
        className={`usa-summary-box ${styles.hero}`}
        role="region"
        aria-labelledby="summary-box-key-information"
      >
        <div className="usa-summary-box__body">
          <h1
            className={`usa-summary-box__heading ${styles.heading}`}
            id="summary-box-key-information"
          >
            Replace your card
          </h1>
          <div className="usa-summary-box__text">
            <p className={styles.intro}>
              Getting a new or replacement social security card is always free!
              Depending on your situation, you can submit your application
              online, visit us in person, or both.
            </p>

            <div className={`usa-alert usa-alert--info ${styles.alert}`}>
              <div className="usa-alert__body">
                <p className={`usa-alert__text ${styles.alertText}`}>
                  All replacement card requests, whether made in-office or
                  online, require 7-14 days mailing time.
                </p>
              </div>
            </div>
            <button
              className={`usa-button ${styles.getStarted}`}
              //   data-testid={`next-button-${props.stepId}`}
              onClick={handleGetStartedClick}
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className={styles.callForSupport}>
        <h2 className={styles.callHeading}>Call for support</h2>
        <p className={styles.callItem}>
          Available in most U.S. time zones Monday - Friday 8 a.m. - 7 p.m.
        </p>
        <p className={styles.callItem}>
          Tell the agent you want to replace your card.
        </p>
        <p className={styles.callItem}>
          Call{' '}
          <a href="tel:+18007721213" className={styles.callLink}>
            +1 800-772-1213
          </a>
        </p>
        <p className={styles.callItem}>
          Call TTY{' '}
          <a href="tel:+18003250778" className={styles.callLink}>
            +1 800-325-0778
          </a>{' '}
          if you're deaf or hard of hearing.
        </p>
      </div>

      <div className={styles.returnTop}>
        <button
          className={styles.returnTopBtn}
          onClick={(e) => window.scrollTo(0, 0)}
        >
          Return to top
        </button>
      </div>
    </div>
  );
};
