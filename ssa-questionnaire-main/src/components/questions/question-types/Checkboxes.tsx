import React from 'react';
import { EQuestionInputNames, IChoice, QuestTypeProps } from '@/interfaces';
import styles from './Checkboxes.module.css';

export const Checkboxes: React.FC<QuestTypeProps> = ({
  question,
  inputs,
  handleChange,
}) => {
  const choices = question.choices;
  const checkboxesInput = inputs.checkboxesInput;

  const handleCheckboxesAnswerChange = (value: string) => {
    let newChecks = [...checkboxesInput];
    const noneAlreadyChecked = newChecks.includes('none_of_the_above');
    const valIsNone = value === 'none_of_the_above';
    const valAlreadyChecked = newChecks.includes(value);

    if (valIsNone) {
      if (noneAlreadyChecked) {
        newChecks = [];
      } else {
        newChecks = ['none_of_the_above'];
      }
    } else if (valAlreadyChecked) {
      newChecks = newChecks.filter((x) => x !== value);
    } else {
      newChecks.push(value);
      newChecks = newChecks.filter((x) => x !== 'none_of_the_above');
    }
    handleChange<string[]>(EQuestionInputNames.checkboxesInput, newChecks);
  };

  if (!choices) return null;

  return (
    <fieldset className={`usa-fieldset ${styles.fieldset}`} data-test="checkboxes">
      {choices.map((choice: IChoice, i: number) => {
        return (
          <div className={`usa-checkbox ${styles.checkboxesGroup}`} key={i}>
            <input
              className={`usa-checkbox__input usa-checkbox__input--tile ${styles.checkboxesInput}`}
              id={choice.id}
              type="checkbox"
              name={choice.id}
              value={choice.value}
              checked={checkboxesInput.includes(choice.value)}
              // onChange={handleChange}
              onChange={(e) => handleCheckboxesAnswerChange(e.target.value)}
              data-test={`checkboxes-button-${choice.id}`}
            />
            <label
              className={`usa-checkbox__label ${styles.checkboxesLabel}`}
              htmlFor={choice.id}
              data-test={`checkboxes-label-${choice.id}`}
            >
              {choice.title}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

// const handleCheckboxesAnswerChange = (value: string) => {
//   let newChecks = [...checkboxesInput];
//   const noneAlreadyChecked = newChecks.includes('none_of_the_above');
//   const valIsNone = value === 'none_of_the_above';
//   const valAlreadyChecked = newChecks.includes(value);

//   if (valIsNone) {
//     if (noneAlreadyChecked) {
//       newChecks = [];
//     } else {
//       newChecks = ['none_of_the_above'];
//     }
//   } else if (valAlreadyChecked) {
//     newChecks = newChecks.filter((x) => x !== value);
//   } else {
//     newChecks.push(value);
//     newChecks = newChecks.filter((x) => x !== 'none_of_the_above');
//   }

//   set__checkboxesInput(newChecks);
//   updateAnswers({ questionId, value: newChecks });
// };
