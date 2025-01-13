import React from 'react';
import { StepsContext } from '@/context/steps/StepsContext';

export const DefaultQuestion = ({ stepId }) => {
  const {
    step,
    wizard,
    goToNextStep,
    goToPreviousStep,
    updateAnswers,
    answers,
    stepsSequence,
  } = React.useContext(StepsContext);
  const finalPause = ['pause_14'];

  return (
    <div>
      <h1>This is a question page for {stepId}</h1>
      <br />
      <button
        onClick={() => {
          goToPreviousStep();
        }}
      >
        Previous
      </button>
      {!finalPause.includes(stepId) && (
        <button
          onClick={() => {
            goToNextStep();
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
