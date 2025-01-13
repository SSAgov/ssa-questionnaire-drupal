import React from 'react';
import {
  EQuestionInputNames,
  IAction,
  IChoice,
  QuestTypeProps,
} from '@/interfaces';
import styles from './MultipleActions.module.css';
import { Actions, Button } from '@/components/common';
import { StepsContext } from '@/context/steps/StepsContext';

export const MultipleActions: React.FC<QuestTypeProps> = ({
  question,
  handleChange,
}) => {
  const { step, answers, currentStepContent, goToNextStep, gtmFeedback } =
    React.useContext(StepsContext);
  const [selectedAction, set__selectedAction] = React.useState<string>();

  React.useEffect(() => {
    goToNext();
  }, [step, answers, selectedAction, goToNextStep]);

  function onClick(id: string) {
    handleChange<string>(EQuestionInputNames.textInput, id);
    set__selectedAction(id);
    if (step === 'feedback_prompt_1' && currentStepContent) {
      const foundItem = currentStepContent.question.actions.find(
        (x) => x.id === id,
      );
      if (!foundItem || !foundItem.title) return;
      gtmFeedback({
        questionId: 'feedback_prompt_1',
        question: currentStepContent.question.title,
        answer: foundItem.title,
      });
    }
    // const targetStep = goToNextStep();
    // gtmOnStepChange({
    //   targetStep,
    //   dir: EDirection.forward,
    //   stepId: questionId,
    //   title: question.title,
    // });
  }

  function goToNext() {
    // Find just answered question
    if (!answers[step] || !answers[step].value) return;
    if (selectedAction === null || selectedAction === undefined) return;
    if (answers[step].value !== selectedAction) return;
    goToNextStep();
  }

  const actions = question.actions;

  if (!actions) return null;

  return (
    <div className={styles.MultipleActions}>
      <div className={styles.actionsWrapper} data-test="mult-actions-wrapper">
        {actions.map((action: IAction, i: number) => {
          return (
            <Button
              variant={action.variant}
              onClick={(_) => onClick(action.id)}
              key={i}
              className={styles.actionsBtn}
              data-test={`multiple-action-btn-${action.id}`}
            >
              {action.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
