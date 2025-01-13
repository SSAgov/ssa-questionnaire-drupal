import React from 'react';
import { Question } from '@/components/questions';
import { StepsContext } from '@/context/steps/StepsContext';
import styles from './FeedbackPrompt.module.css';
import { EButtonVariant, EStepType, TStep } from '@/interfaces';
import { pagesMap } from '../utils/pagesMap';
import { Button } from '@/components/common';
import { GlobalContext } from '@/context/global/GlobalContext';

export const FeedbackPrompt = () => {
  const { t } = React.useContext(GlobalContext);
  const { step, currentStepContent } = React.useContext(StepsContext);

  if (!currentStepContent || !currentStepContent.id || !currentStepContent.type)
    return null;

  const prompt = (
    // <div style={{ padding: '50px 200px' }}>
    <div className={styles.FeedbackPrompt}>
      {currentStepContent.type === EStepType.question &&
        step === 'feedback_prompt_1' && (
          <Question {...currentStepContent} key={currentStepContent.id} />
        )}
      {currentStepContent.type === EStepType.question &&
        step === 'feedback_prompt_2' && (
          <QuestionAndComment
            currentStepContent={currentStepContent}
            componentKey={currentStepContent.id}
          />
        )}
      {currentStepContent.type === EStepType.page &&
        pagesMap[step] &&
        pagesMap[step]}
      <div className={`ssa-p-body-light ${styles.OMBFormNum}`}>
        <span>{t('form_approved')}</span>
      </div>
    </div>
    // </div>
  );

  if (
    import.meta.env.VITE_DEPLOYMENT_PLATFORM === 'mobile_lab' ||
    import.meta.env.VITE_DEPLOYMENT_PLATFORM === 'local' ||
    import.meta.env.DEV
  ) {
    return <div style={{ padding: '24px' }}>{prompt}</div>;
  }

  return prompt;
};

const QuestionAndComment = ({ componentKey, currentStepContent }) => {
  const { step, stepsContent } = React.useContext(StepsContext);

  const prompt3 = React.useMemo(() => {
    const foundItem = stepsContent.find((x) => x.id === 'feedback_prompt_3');
    if (foundItem) return foundItem;
    return null;
  }, [stepsContent]);

  if (!prompt3) return null;

  return (
    <div>
      <Question {...currentStepContent} key={componentKey} />
      <Question {...prompt3} key={'feedback_prompt_3'} />
    </div>
  );
};
