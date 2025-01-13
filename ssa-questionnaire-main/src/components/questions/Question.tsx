import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import {
  EQuestionType,
  IAge,
  IQuestionError,
  IStepsContentItem,
  QuestTypeProps,
} from '@/interfaces';
import { EAlertType } from '@/interfaces/IGlobalContext';
import React from 'react';
import { CustomActions } from '../common';
import { Title } from '../common';
import {
  answerIsValid,
  defaultQuestionInputs,
  IQuestionInputs,
  questType2InputMapper,
} from './question-helpers';
import {
  Checkboxes,
  DateField,
  MultipleActions,
  MultipleChoice,
  ProgressiveReveal,
  Textarea,
} from './question-types';
import styles from './Question.module.css';
import { QuestionActions } from './QuestionActions';
import { QuestionError } from './QuestionError';
import { QuestionInfo } from './QuestionInfo';
import { QuestionSubtitle } from './QuestionSubtitle';

export const Question = (props: IStepsContentItem) => {
  let {
    questionType,
    question,
    id: questionId,
    subTitle,
    subTitleType,
    info,
  } = props;
  const { t } = React.useContext(GlobalContext);
  const { step, updateAnswers, stepsSequence, answers, set__ageAndBday } =
    React.useContext(StepsContext);
  const [inputs, set__inputs] = React.useState<IQuestionInputs>({
    ...defaultQuestionInputs,
  });
  const [error, set__error] = React.useState<IQuestionError>({
    message: '',
    type: EAlertType.info,
  });

  React.useEffect(() => {
    scrollTopOfQuesContainerIntoView();
  }, []);

  React.useEffect(() => {
    prepopulateQuest();
  }, [answers]);

  function scrollTopOfQuesContainerIntoView() {
    let scrollQuesContainerIntoView = false;
    if (
      import.meta &&
      import.meta.env &&
      import.meta.env.VITE_APP &&
      import.meta.env.VITE_APP !== 'feedback'
    ) {
      scrollQuesContainerIntoView = true;
    }
    if (!scrollQuesContainerIntoView) return;

    // setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, 1000);

    // const questionContainerElement = document.querySelector(
    //   `[data-test="question-container"]`,
    // );
    // if (!questionContainerElement) return;
    // questionContainerElement.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // data-test="question-container" VITE_APP = feedback
  }

  function prepopulateQuest() {
    const questionsIsAnswered = !!answers[questionId];
    if (!questionsIsAnswered) return;
    const newInputs = { ...inputs };
    // @ts-ignorets-ignore
    newInputs[questType2InputMapper[questionType]] = answers[questionId].value;
    set__inputs(newInputs);
  }

  function handleChange<TVal>(
    inputName: string,
    value: TVal,
    age?: IAge,
    birthdate?: string,
  ) {
    let newInputs = { ...inputs };
    newInputs[inputName] = value;
    set__inputs(newInputs);
    if (inputName === 'dateInputs' && age && birthdate)
      set__ageAndBday({ age, birthdate });
    updateAnswers({ questionId, value });
  }

  const isFirst = () => {
    const currentStepIndex = stepsSequence.indexOf(step);
    return currentStepIndex === 0;
  };

  const questProps: QuestTypeProps = {
    ...props,
    inputs,
    handleChange,
    set__error,
  };

  function getQuestionType() {
    switch (questionType) {
      case EQuestionType.multiple_choice:
        return <MultipleChoice {...questProps} />;
      case EQuestionType.multiple_actions:
        return <MultipleActions {...questProps} />;
      case EQuestionType.checkboxes:
        return <Checkboxes {...questProps} />;
      case EQuestionType.date:
        return <DateField {...questProps} />;
      case EQuestionType.progressive_reveal:
        return <ProgressiveReveal {...questProps} />;
      case EQuestionType.textarea:
        return <Textarea {...questProps} />;
      default:
        return null;
    }
  }

  const nextBtnIsDisabled = !answerIsValid({ ...props, inputs });

  if (!question) return null;

  return (
    <div
      className={styles.Question}
      data-test="question-container"
      data-qid={questionId}
    >
      <Title title={question.title} />
      {subTitle ? (
        <QuestionSubtitle
          subTitle={subTitle}
          questionType={questionType}
          type={subTitleType}
        />
      ) : null}
      <div className={styles.questionBody}>
        <div
          className={styles.questionTypeWrapper}
          data-test={`quest-type-${questionType}`}
        >
          {getQuestionType()}
          {error.message.length ? <QuestionError error={error} /> : null}
          {info ? <QuestionInfo info={info} /> : null}
          {question.nextPrevBtns && question.nextPrevBtns === 'hide' ? (
            question.customActions ? (
              <CustomActions {...questProps} />
            ) : null
          ) : (
            <QuestionActions
              {...props}
              isFirst={isFirst}
              nextBtnIsDisabled={nextBtnIsDisabled}
              inputs={inputs}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// under line 162:

// {step}
// </div>
// ) : null} */}

// <div className={styles.questionContainer}>
// <div className={styles.questionTitleContainer}>
//   <p className={styles.questionTitle} data-test="question-title">
//     {/* <strong>{questionId}.</strong>{" "} */}
//     {question.title}
//   </p>
// </div>
// {subTitle && (
//   <div className={styles.questionSubTitleContainer}>
//     <p className={styles.questionSubTitle} data-test="question-subtitle">{subTitle}</p>
//   </div>
// )}
// <div className={styles.questionBody}>
//   <div className={styles.questionTypeWrapper}>
//     {questionType === 'multiple_choice' && (
//       <MultipleChoice {...multipleChoiceProps} />
//     )}

//     {questionType === 'date' && <DateField {...dateFieldProps} />}

//     {error.message.length ? (
//       <div className={styles.alertWrapper}>
//         <div
//           className={`usa-alert usa-alert--${error.type} usa-alert--slim`}
//         >
//           <div className="usa-alert__body">
//             <p className="usa-alert__text">{error.message}</p>
//           </div>
//         </div>
//       </div>
//     ) : null}

//     {info ? (
//       <section
//         className={`usa-site-alert usa-site-alert--info usa-site-alert--no-heading usa-site-alert--no-icon ${styles.info}`}
//         aria-label={info}
//       >
//         <div className="usa-alert">
//           <div className="usa-alert__body">
//             <p className="usa-alert__text">{info}</p>
//           </div>
//         </div>
//       </section>
//     ) : null}

//     <Actions>
//       <Button
//         type={EButton.button}
//         onClick={() => {
//           const targetStep = goToNextStep();
//           gtmOnStepChange({
//             targetStep,
//             dir: EDirection.forward,
//             stepId: questionId,
//             title: question.title,
//           });
//         }}
//         disabled={answerIsValid() ? false : true}
//         data-test="ques-next-btn"
//       >
//         {t('next')}
//       </Button>
//       <Button
//         outlined
//         onClick={() => {
//           const targetStep = goToPreviousStep();
//           gtmOnStepChange({
//             targetStep,
//             dir: EDirection.backward,
//             stepId: questionId,
//             title: question.title,
//           });
//         }}
//         type={EButton.button}
//         disabled={isFirst() ? true : false}
//         data-test="ques-prev-btn"
//       >
//         {t('previous')}
//       </Button>
//     </Actions>
//   </div>
