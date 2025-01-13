import React from 'react';
import { StepsContext } from '@/context/steps/StepsContext';

export const NotFound = () => {
  const { step, wizard, stepsContent, stepsSequence, goToNextStep } =
    React.useContext(StepsContext);

  function getPrev() {
    const withoutNotFount = wizard.history.filter((x) => x !== 'not_found');

    return withoutNotFount[withoutNotFount.length - 1];
  }
  return (
    <div>
      <h1>This step was not found: {getPrev()}</h1>
    </div>
  );
};
