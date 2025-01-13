import React from 'react';
import { EQuestionInputNames, IChoice, QuestTypeProps } from '@/interfaces';
import DOMPurify from 'dompurify';
import styles from './Textarea.module.css';

const MAX_CHARS = 1000;

export const Textarea: React.FC<QuestTypeProps> = ({
  id: questionId,
  question,
  inputs,
  handleChange,
}) => {
  const charsCount = inputs.textInput.length;

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let val = e.target.value;
    let cleanVal = DOMPurify.sanitize(val);
    handleChange<string>(EQuestionInputNames.textInput, cleanVal);
  }

  return (
    <div className={styles.Textarea}>
      <textarea
        className={`${styles.textareaInput}`}
        data-test={`textarea-${questionId}`}
        id={questionId as string}
        name={questionId as string}
        value={inputs.textInput}
        maxLength={MAX_CHARS}
        minLength={4}
        onChange={onChange}
        rows={3}
      ></textarea>
      <div className={styles.helpTextContainer}>
        <p className={`ssa-p-body-light ${styles.helperText}`}>{charsCount} / 1,000 characters</p>
      </div>
    </div>
  );
};
