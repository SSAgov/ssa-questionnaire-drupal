import React from 'react';
import { StepsContext } from '@/context/steps/StepsContext';
import { emitGtmEvent } from '@/global-utils';
import styles from '@/components/questions/Question.module.css';

export const DefaultPausePoint = ({ stepId }) => {
  const {
    step,
    wizard,
    goToNextStep,
    goToPreviousStep,
    updateAnswers,
    answers,
    stepsSequence,
  } = React.useContext(StepsContext);
  const finalPause = [
    'pause_2',
    'pause_4',
    'pause_6',
    'pause_8',
    'pause_10',
    'pause_12',
    'pause_14',
    'pause_16',
    'pause_18',
    'pause_20',
    'pause_22',
    'pause_24',
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '5px 10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {stepId}
      </div>
      <h1>This is a pause point page for {stepId}</h1>
      <br />

      <div className={styles.buttonsContainer}>
        {!finalPause.includes(stepId) && (
          <button
            onClick={() => {
              emitGtmEvent('nextButtonClickOnPausePointPage', {
                pausePointId: stepId,
              });
              goToNextStep();
            }}
            className={`usa-button ${styles.next}`}
            disabled={!finalPause.includes(stepId) ? false : true}
          >
            Next
          </button>
        )}
        <button
          onClick={() => {
            emitGtmEvent('previousButtonClickOnPausePointPage', {
              pausePointId: stepId,
            });
            goToPreviousStep();
          }}
          type="button"
          className={`usa-button usa-button--outline ${styles.previous}`}
        >
          Previous
        </button>
      </div>
    </div>
  );
};
