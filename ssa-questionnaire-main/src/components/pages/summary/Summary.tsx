import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
// import { gtmOnStepChange } from '@/global-utils';
import {
  EButton,
  EButtonVariant,
  EDirection,
  EQuestionType,
  ICompleteAnswersInfoItem,
  IDateInputs,
} from '@/interfaces';
import React from 'react';
import { Actions, Button } from '../../common';
import summaryStyles from './Summary.module.css';

export const Summary = () => {
  const { t } = React.useContext(GlobalContext);
  const {
    step,
    answers,
    stepsContent,
    goToPreviousStep,
    gtmOnStepChange,
    goToNextStep,
    goToSpecificStep,
  } = React.useContext(StepsContext);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // console.log('answers = ', answers);
  // console.log('stepsContent = ', stepsContent);
  const completeAnswersInfo: ICompleteAnswersInfoItem[] = [];

  for (const questionId in answers) {
    const foundQuestionObj = stepsContent.find((s) => s.id === questionId);
    const ncompleteQuesObj: ICompleteAnswersInfoItem = {
      ...foundQuestionObj,
      answer: answers[questionId].value,
    };
    completeAnswersInfo.push(ncompleteQuesObj);
  }

  // questionType

  return (
    <div>
      <h1 className={summaryStyles.title} data-test="summary-title">
        {t('review_answers')}
      </h1>
      <p className={summaryStyles.subTitle} data-test="summary-subtitle">
        {t('review_subtitle')}
      </p>

      <ul
        className={summaryStyles.questionAnswersList}
        data-test="question-answer-list"
      >
        {completeAnswersInfo.map((completeAnswer, i) => {
          let answerText = '';

          if (
            completeAnswer.questionType === EQuestionType.date &&
            typeof completeAnswer.answer !== 'string'
          ) {
            const dateAnswer = completeAnswer.answer as IDateInputs;
            answerText = `${dateAnswer.month}/${dateAnswer.day}/${dateAnswer.year}`;
          }

          if (completeAnswer.questionType === EQuestionType.multiple_choice) {
            const foundChoice = completeAnswer.question.choices.find(
              (choice) => choice.id === completeAnswer.answer,
            );
            if (!foundChoice) return null;
            answerText = foundChoice.title;
          }

          return (
            <li
              key={i}
              className={summaryStyles.questionAnswerItem}
              data-test={`summary-item-${completeAnswer.id}`}
            >
              <button
                className={`usa-button usa-button--unstyled ${summaryStyles.questionTitle}`}
                onClick={(_) => {
                  goToSpecificStep(completeAnswer.id);
                }}
                data-test={`summary-item-btn-${completeAnswer.id}`}
              >
                {completeAnswer.question.title}
              </button>
              <p
                className={summaryStyles.answerText}
                data-test={`summary-item-text-${completeAnswer.id}`}
              >
                {answerText}
              </p>
            </li>
          );
        })}
      </ul>

      <Actions>
        <Button
          type={EButton.button}
          onClick={() => {
            const targetStep = goToNextStep();
            gtmOnStepChange({
              targetStep,
              dir: EDirection.forward,
              stepId: step,
              title: t('review_answers'),
            });
          }}
          data-test="summary-get-res-btn"
          variant={EButtonVariant.primary}
        >
          {t('get_results')}
        </Button>
        <Button
          type={EButton.button}
          onClick={() => {
            const targetStep = goToPreviousStep();
            gtmOnStepChange({
              targetStep,
              dir: EDirection.backward,
              stepId: step,
              title: t('review_answers'),
            });
          }}
          data-test="summary-prev-btn"
          variant={EButtonVariant.secondary}
        >
          {t('previous')}
        </Button>
      </Actions>
    </div>
  );
};
