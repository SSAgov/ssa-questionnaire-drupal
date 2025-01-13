import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import {
  EQuestionType,
  ICompleteAnswersInfoItem,
  IDateInputs,
} from '@/interfaces';
import React from 'react';
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group';
import styles from './AnswersSummary.module.css';

const duration = 500;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  maxHeight: '0px',
  overflow: 'hidden',
};

const transitionStyles = {
  entering: { maxHeight: '2100px' },
  entered: { maxHeight: '2100px' },
  exiting: { maxHeight: '0px' },
  exited: { maxHeight: '0px' },
};

export const AnswersSummary: React.FC<{ withTopLine?: boolean }> = ({
  withTopLine = false,
}) => {
  const { t } = React.useContext(GlobalContext);
  const { answers, stepsContent, goToSpecificStep } =
    React.useContext(StepsContext);
  const [showSummary, set__showSummary] = React.useState(false);
  const transitionNodeRef = React.useRef(null);

  const completeAnswersInfo: ICompleteAnswersInfoItem[] = [];

  for (const questionId in answers) {
    const foundQuestionObj = stepsContent.find((s) => s.id === questionId);
    const ncompleteQuesObj: ICompleteAnswersInfoItem = {
      ...foundQuestionObj,
      answer: answers[questionId].value,
    };
    completeAnswersInfo.push(ncompleteQuesObj);
  }

  return (
    <div
      className={`${styles.AnswersSummary} ${
        withTopLine ? styles.withTopLine : ''
      }`}
    >
      {withTopLine && <hr className={`${styles.line} ${styles.top}`} />}
      <h3 className={`ssa-h3 ${styles.title}`} data-test="summary-title">
        {t('review_answers')}
      </h3>
      <p
        className={`ssa-p-body prevent-margin-collapse ${styles.subTitle}`}
        data-test="summary-subtitle"
      >
        {t('review_subtitle')}
      </p>

      <Transition
        transitionNodeRef={transitionNodeRef}
        in={showSummary}
        timeout={duration}
      >
        {(state) => (
          <div
            ref={transitionNodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <ul
              className={styles.questionAnswersList}
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

                if (
                  completeAnswer.questionType === EQuestionType.multiple_choice
                ) {
                  const foundChoice = completeAnswer.question.choices.find(
                    (choice) => choice.id === completeAnswer.answer,
                  );
                  if (!foundChoice) return null;
                  answerText = foundChoice.title;
                }

                const completeTitle = `${t('question_first_letter')}) ${
                  completeAnswer.question.title.trim()
                }:`;

                return (
                  <li
                    key={i}
                    className={styles.questionAnswerItem}
                    data-test={`summary-item-${completeAnswer.id}`}
                  >
                    <p className={`ssa-p-body ${styles.questionTitle}`}>
                      {completeTitle}
                    </p>
                    <span>
                      <span className="ssa-p-body">
                        {t('answer_first_letter')}
                        {') '}
                      </span>
                      <span className="ssa-p-body-bold">{answerText}</span>
                    </span>
                    <button
                      className={`ssa-btn-stripped ssa-hyperlink ${styles.editBtn}`}
                      onClick={(_) => {
                        goToSpecificStep(completeAnswer.id);
                      }}
                      data-test={`summary-item-btn-${completeAnswer.id}`}
                    >
                      {t('edit')}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Transition>

      <button
        className={`ssa-btn-stripped ssa-hyperlink ${styles.showMoreLessBtn}`}
        onClick={(_) => set__showSummary((oldShowState) => !oldShowState)}
      >
        <TransitionGroup className="show-more-group">
          <CSSTransition key={`${showSummary}`} timeout={500} classNames="item">
            <span className={`${showSummary ? 'show-less' : 'show-more'}`}>
              {showSummary ? t('show_less') : t('show_more')}
            </span>
          </CSSTransition>
        </TransitionGroup>
      </button>

      <hr className={styles.line} />
    </div>
  );
};
