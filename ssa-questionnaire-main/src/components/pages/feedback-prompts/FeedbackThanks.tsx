import React from 'react';
import { Title } from '@/components/common';
import { StepsContext } from '@/context/steps/StepsContext';
import styles from './FeedbackPrompt.module.css';
import { GlobalContext } from '@/context/global/GlobalContext';

export const FeedbackThanks = () => {
  const { t } = React.useContext(GlobalContext);
  const { currentStepContent, stepsContent } = React.useContext(StepsContext);
  const title = stepsContent?.find((x) => x.id === 'feedback_prompt_1')
    ?.question.title;

  if (!title || !currentStepContent) {
    throw new Error(`title or currentStepContent are falsy`);
  }
  return (
    <div className={styles.FeedbackThanks} data-test="feedback-thanks">
      <Title title={title} />
      <p className={styles.body}>{t("thanks_feedback")}</p>
    </div>
  );
};
