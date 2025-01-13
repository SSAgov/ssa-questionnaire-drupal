import React from 'react';
import {
  EButtonVariant,
  IStepsContentItem,
  QuestTypeProps,
} from '@/interfaces';
import { IQuestionInputs } from '../questions/question-helpers';
import styles from './CustomActions.module.css';
import { Button } from './Actions';
import { StepsContext } from '@/context/steps/StepsContext';
import DOMPurify from 'dompurify';
import isEmail from 'validator/lib/isEmail';
import validator from 'validator';
import { GlobalContext } from '@/context/global/GlobalContext';

export const CustomActions: React.FC<QuestTypeProps> = (props) => {
  const customActionsMapper = {
    feedback_submit: <FeedbackSubmit {...props} />,
  };
  return customActionsMapper[props.question.customActions]
    ? customActionsMapper[props.question.customActions]
    : null;
};

function check4Paterns(str: string) {
  const contains = {
    email: false,
    ssn: false,
    ccn: false,
    phone: false,
  };

  const emailRE =
    /\b(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\b/gim;
  const ssnRe = /\b(?!000)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}\b/gim;
  const visaRegEx = /\b4[0-9]{12}(?:[0-9]{3})?\b/gim;
  const mastercardRegEx =
    /\b(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}\b/gim;
  const amexpRegEx = /\b3[47][0-9]{13}\b/gim;
  const discovRegEx = /\b6(?:011|5[0-9]{2})[0-9]{12}\b/gim;
  const phoneRe =
    /\b[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}\b/gim;
  const containsCCNum = [
    visaRegEx,
    mastercardRegEx,
    amexpRegEx,
    discovRegEx,
  ].some((re) => re.test(str));

  if (emailRE.test(str)) contains.email = true;
  if (ssnRe.test(str)) contains.ssn = true;
  if (phoneRe.test(str)) contains.phone = true;
  if (containsCCNum) contains.ccn = true;

  return contains;
}

export const FeedbackSubmit: React.FC<QuestTypeProps> = (props) => {
  const { t } = React.useContext(GlobalContext);
  const { stepsContent, gtmFeedback, answers, goToNextStep } =
    React.useContext(StepsContext);

  function handleClick(_: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const prompt2Content = stepsContent.find(
      (x) => x.id === 'feedback_prompt_2',
    );
    const prompt3Content = stepsContent.find(
      (x) => x.id === 'feedback_prompt_3',
    );

    let prompt2Gtm = {
      questionId: 'feedback_prompt_2',
      question: prompt2Content.question.title,
      answer: `None selected.`,
    };

    let prompt3Gtm = {
      questionId: 'feedback_prompt_3',
      question: prompt3Content.question.title,
      answer: 'No feedback provided.',
    };

    if (
      prompt2Content &&
      answers?.feedback_prompt_2 &&
      answers?.feedback_prompt_2?.value
    ) {
      const val = answers?.feedback_prompt_2?.value as string[];
      let answer = ``;
      val
        .map(
          (x) => prompt2Content.question.choices.find((c) => c.id === x).title,
        )
        .forEach((t, i) => {
          if (i === 0 && val.length === 1) {
            answer = `${t}.`;
          } else if (i === 0) {
            answer += `${t}`;
          } else if (i + 1 === val.length) {
            answer += `, and ${t}.`;
          } else {
            answer += `, ${t}`;
          }
        });

      prompt2Gtm = {
        ...prompt2Gtm,
        answer,
      };
    }

    if (
      prompt3Content &&
      answers?.feedback_prompt_3 &&
      answers?.feedback_prompt_3?.value
    ) {
      const val = answers?.feedback_prompt_3?.value as string;
      const escaped = validator.escape(val);
      const sanitized = DOMPurify.sanitize(escaped);
      const contains = check4Paterns(sanitized);

      const containsIllegalPattern = Object.keys(contains).some(
        (key) => contains[key],
      );
      if (!containsIllegalPattern) {
        prompt3Gtm = {
          ...prompt3Gtm,
          answer: sanitized,
        };
      } else {
        console.log('containsIllegalPattern: ', contains);
      }
    }

    gtmFeedback(prompt2Gtm);
    gtmFeedback(prompt3Gtm);
    goToNextStep();
  }

  return (
    <div className={styles.customActionContainer} data-test={`custom-action`}>
      <Button variant={EButtonVariant.primary} onClick={handleClick}>
        {t('submit')}
      </Button>
    </div>
  );
};
