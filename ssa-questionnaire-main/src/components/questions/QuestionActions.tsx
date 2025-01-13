import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import {
  EButton,
  EButtonVariant,
  EDirection,
  EQuestionType,
  IProgressiveRevealeInputs,
  IStepsContentItem,
} from '@/interfaces';
import React from 'react';
import { Actions, Button } from '../common';
import { IQuestionInputs } from './question-helpers';

export interface IQuestionActionsProps extends IStepsContentItem {
  isFirst: () => boolean;
  nextBtnIsDisabled: boolean;
  inputs: IQuestionInputs;
}

export const QuestionActions: React.FC<IQuestionActionsProps> = ({
  isFirst,
  question,
  id: questionId,
  questionType,
  nextBtnIsDisabled,
  inputs,
}) => {
  const { t } = React.useContext(GlobalContext);
  const { goToNextStep, goToPreviousStep, gtmOnStepChange } =
    React.useContext(StepsContext);

  const progressiveRevealInputs = inputs.progressiveRevealInputs;

  return (
    <Actions
      prProps={{
        isPr: questionType === EQuestionType.progressive_reveal,
        revealed:
          questionType === EQuestionType.progressive_reveal
            ? question.progressiveRevealTriggers.includes(
                progressiveRevealInputs.mainInput,
              )
            : false,
      }}
    >
      <Button
        type={EButton.button}
        onClick={() => {
          const targetStep = goToNextStep();
          gtmOnStepChange({
            targetStep,
            dir: EDirection.forward,
            stepId: questionId,
            title: question.title,
          });
        }}
        disabled={nextBtnIsDisabled}
        data-test="ques-next-btn"
        variant={EButtonVariant.primary}
        isNextBtn={true}
        tabIndex={0}
      >
        {t('next')}
      </Button>
      <Button
        onClick={() => {
          const targetStep = goToPreviousStep();
          gtmOnStepChange({
            targetStep,
            dir: EDirection.backward,
            stepId: questionId,
            title: question.title,
          });
        }}
        type={EButton.button}
        disabled={isFirst() ? true : false}
        data-test="ques-prev-btn"
        variant={EButtonVariant.secondary}
        tabIndex={0}
      >
        {t('previous')}
      </Button>
    </Actions>
  );
};
