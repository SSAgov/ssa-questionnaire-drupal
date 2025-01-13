import React from 'react';
import { StepsContext } from '@/context/steps/StepsContext';
import { meetsRequirements } from '@/context/steps/utils';
import { mockResultsData } from '@/context/steps/utils/mockStepsData';
import styles from '@/components/questions/Question.module.css';
import { GlobalContext } from '@/context/global/GlobalContext';
import { Actions, Button } from '@/components/common';
import { EButton, EButtonVariant, ELetterCase } from '@/interfaces';

export const Results = () => {
  const { t, language } = React.useContext(GlobalContext);
  const { answers, goToPreviousStep, ageAndBday } =
    React.useContext(StepsContext);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {mockResultsData(t).map((resultItem, i) => {
          const reqs = resultItem.requirements;
          const reqsMet = meetsRequirements({
            requirements: reqs,
            answers,
            ageAndBday,
            lang: language,
          });
          return (
            <li key={i}>
              <strong>{resultItem.label}</strong>:{' '}
              {reqsMet ? (
                <span style={{ color: 'green' }}>Requirements met</span>
              ) : (
                <span style={{ color: 'red' }}>Requirements NOT met</span>
              )}
            </li>
          );
        })}
      </ul>
      <Actions>
        <Button
          onClick={() => goToPreviousStep()}
          type={EButton.button}
          data-test="results-prev-btn"
          variant={EButtonVariant.secondary}
        >
          {t('previous', ELetterCase.capitalized)}
        </Button>
      </Actions>
    </div>
  );
};
