import React from 'react';
import { Progress, QuestionLoader, ReturnToTop } from '@/components/common';
import { StepsContext } from '@/context/steps/StepsContext';
import { GlobalContext } from '@/context/global/GlobalContext';
import { stepTypeToComponentMapper } from './stepTypeToComponentMapper';
import { pagesMap } from '../pages';
import { Question, DefaultQuestion } from '../questions';
import { DefaultPausePoint } from '../pages/pause-points';
import { GlobalAlert } from '@/components/common';
import { app, inDevelopment, useGlobalStyles } from '@/constants';
import styles from './Steps.module.css';
import { handleGlobalStyles, nonDrupalStyles } from '@/global-utils';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Steps = () => {
  const stepsContextValues = React.useContext(StepsContext);
  const globalContextValues = React.useContext(GlobalContext);

  React.useEffect(() => {
    document.title = t('document_title'); // app === 'eligibility' ? 'Eligibility' : 'Card Replacement';
    handleGlobalStyles();
  }, [app]);

  if (!globalContextValues || !stepsContextValues) return null;

  const { t, language, showGlobalAlert } = globalContextValues;

  const {
    step,
    wizard,
    stepsContent,
    goToPreviousStep,
    currentStepContent,
    loading,
  } = stepsContextValues;

  if (loading) {
    return <QuestionLoader />;
  }

  if (!step || !stepsContent || !stepsContent.length) {
    return null;
  }

  const deploymentPlatform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;
  const inProd = deploymentPlatform === 'drupal';

  const foundStepItem = stepsContent.find((stepItem) => stepItem.id === step);
  // if (!componentsMap[step]) return null;

  function getComponent() {
    if (!foundStepItem) return tryDefaults();
    if (foundStepItem.type === 'page') {
      if (pagesMap[step])
        return (
          <div>
            {pagesMap[step]}
            <ReturnToTop />
          </div>
        );
      return tryDefaults();
    }
    return <Question {...foundStepItem} key={foundStepItem.id} />;
  }

  function tryDefaults() {
    const type = step.toString().split('_')[0];
    if (type === 'pause') return <DefaultPausePoint stepId={step} />;
    if (type === 'question') return <DefaultQuestion stepId={step} />;
    return inDevelopment ? (
      <div>
        <h1>Step ID is not mapped to a page component</h1>
        <button
          onClick={() => {
            goToPreviousStep();
          }}
          type="button"
          className={`usa-button usa-button--outline `}
        >
          {t('previous')}
        </button>
      </div>
    ) : null;
  }

  function printStepIDForDev() {
    if (inProd) {
      return null;
    } else {
      return (
        <div className={styles.stepId}>
          <span>
            Step ID: <strong>{step}</strong>
          </span>
        </div>
      );
    }
  }

  return (
    <section
      className={`${styles.stepsWrapper} ${!inProd ? styles.notInProd : ''}`}
      // className={`section ${styles.stepsWrapper}`}
    >
      {printStepIDForDev()}
      {/* <GlobalAlert /> */}
      {currentStepContent &&
      currentStepContent.progressBar &&
      currentStepContent.progressBar === 'hide' ? null : (
        <Progress />
      )}
      <TransitionGroup className="steps-group" data-test-stepid={step}>
        <CSSTransition key={step} timeout={500} classNames="item">
          {getComponent()}
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
};
