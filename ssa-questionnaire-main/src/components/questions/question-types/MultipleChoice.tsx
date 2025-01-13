import React from 'react';
import { EQuestionInputNames, IChoice, QuestTypeProps } from '@/interfaces';
import styles from './MultipleChoice.module.css';

export const MultipleChoice: React.FC<QuestTypeProps> = ({
  question,
  inputs,
  handleChange,
}) => {
  const choices = question.choices;
  const textInput = inputs.textInput;

  if (!choices) return null;

  return (
    <fieldset className={`usa-fieldset ${styles.fieldset}`}>
      {choices.map((choice: IChoice, i: number) => {
        return (
          <div className={`usa-radio ${styles.radioGroup}`} key={i}>
            <input
              className={`usa-radio__input usa-radio__input--tile ${styles.radiosInput}`}
              id={choice.id}
              type="radio"
              name={choice.id}
              value={choice.value}
              checked={textInput === choice.value}
              onChange={(e) =>
                handleChange<string>(EQuestionInputNames.textInput, e.target.value)
              }
              data-test={`radio-button-${choice.id}`}
            />
            <label
              className={`usa-radio__label ${styles.radiosLabel}`}
              htmlFor={choice.id}
              data-test={`radio-label-${choice.id}`}
            >
              {choice.title}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};
