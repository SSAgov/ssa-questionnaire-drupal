import React from 'react';
import styles from './DateField.module.css';
import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import { emitGtmEvent } from '@/global-utils';
import {
  dateUnitIsValid,
  toBirthdate,
  getAge,
  getDatePartsProps,
} from './dateFieldHelpers';
import {
  EAlertType,
  EDateInputs,
  ELetterCase,
  EQuestionInputNames,
  IDateInputs,
  QuestTypeProps,
} from '@/interfaces';

const MIN_AGE = 18;

export const DateField: React.FC<QuestTypeProps> = ({
  inputs,
  id: questionId,
  set__error,
  handleChange,
}) => {
  const { t } = React.useContext(GlobalContext);
  const { ageAndBday } = React.useContext(StepsContext);
  const refs = {
    month: React.useRef(null),
    day: React.useRef(null),
    year: React.useRef(null),
  };
  const [rawValues, set__rawValues] = React.useState({
    month: '',
    day: '',
  });

  const dateInputs = inputs.dateInputs;
  const dateParts = getDatePartsProps(t, questionId);

  const handleDateInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateUnit = e.target.name;
    let newDateInputs = { ...dateInputs };
    let value;
    value = +e.target.value;
    value = `${e.target.value}`;

    if (dateUnit === 'day' || dateUnit === 'month') {
      newDateInputs = {
        ...newDateInputs,
        [dateUnit]: value,
        // [dateUnit]: value.padStart(2, '0'),
        // [`unpadded__${dateUnit}`]: e.target.value,
      };
      set__rawValues((oldVal) => {
        if (oldVal[dateUnit] === '0') {
          return {
            ...oldVal,
            [dateUnit]: `0${e.target.value}`,
          };
        } else {
          return {
            ...oldVal,
            [dateUnit]: e.target.value,
          };
        }
      });
    } else {
      newDateInputs = {
        ...newDateInputs,
        [dateUnit]: value,
      };
    }

    const bd = toBirthdate(newDateInputs);
    const age = getAge(bd);
    const newAgeAndBday = { age, birthdate: bd };
    const monthIsValid = dateUnitIsValid('month', newDateInputs.month || '');
    const dayIsValid = dateUnitIsValid('day', newDateInputs.day || '');
    const yearIsValid = dateUnitIsValid('year', newDateInputs.year || '');

    const message = [];
    
    if (age && bd) {
      set__error({ message: '', type: EAlertType.info });
      // setAge(cookieName, age.years);
      if (age.years >= 0) {
        const invalid = age.years < MIN_AGE;
        if (invalid) {
          const newMessageItem = t('underage_validation_message').replaceAll(
            `{{min_age}}`,
            MIN_AGE.toString(),
          );
          message.push(newMessageItem);
        }
      }
    } else if (
      monthIsValid ||
      dayIsValid ||
      yearIsValid ||
      (ageAndBday?.age?.years && ageAndBday?.age?.years > 0)
    ) {
      let text = '';
      if ((yearIsValid && !monthIsValid) || (dayIsValid && !monthIsValid)) {
        // text += ' month';
        text += ` ${t('month', ELetterCase.lowercase)}`;
      }
      if (yearIsValid && !dayIsValid) {
        if (text.length > 0) {
          // text += ' and';
          text += ` ${t('and', ELetterCase.lowercase)}`;
        }
        // text += ' day';
        text += ` ${t('day', ELetterCase.lowercase)}`;
      }
      if (text.length > 0) {
        // message.push(`Enter the ${text} you were born.`);
        message.push(t('enter_month_and_dob').replace('{{month_day}}', text));
      }
    }

    if (message.length > 0) {
      set__error({
        message: `${message.join(' ')}`,
        type: EAlertType.error,
      });
      newAgeAndBday.age = {
        ...newAgeAndBday.age,
        years: 0,
      };
      newAgeAndBday.birthdate = '';
    }

    const validation = {
      monthIsValid,
      dayIsValid,
      yearIsValid,
    };

    // handleFocus({
    //   newDateInputs,
    //   dateUnit,
    //   value: e.target.value,
    //   validation,
    // });
    // handleChange({ newDateInputs, ...newAgeAndBday });
    handleChange<IDateInputs>(
      EQuestionInputNames.dateInputs,
      newDateInputs,
      newAgeAndBday.age,
      newAgeAndBday.birthdate,
    );
  };

  const handleFocus = ({ dateUnit, value, validation, newDateInputs }) => {
    if (!refs.month || !refs.day || !refs.year) return;
    if (!refs.month?.current || !refs.day?.current || !refs.year?.current)
      return;
    const month = refs.month?.current;
    const day = refs.day?.current;
    const year = refs.year?.current;
    if (!month?.focus || !day.focus || !year.focus) return;
    const wait = 1000;

    if (dateUnit === 'month' && validation.monthIsValid) {
      // if (month.value === '0') return;
      if (rawValues.month === '0') return;
      console.log('rawValues.month = ', rawValues.month);
      // setTimeout(() => day.focus(), month.value.length === 2 ? 1 : wait);
      setTimeout(() => day.focus(), rawValues.month.length === 2 ? 1 : wait);
    }
    if (dateUnit === 'day' && validation.monthIsValid) {
      // if (day.value === '0') return;
      if (rawValues.day === '0') return;
      // setTimeout(() => year.focus(), day.value.length === 2 ? 1 : wait);
      setTimeout(() => year.focus(), rawValues.day.length === 2 ? 1 : wait);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    dateUnit: EDateInputs,
  ) => {
    if (e.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
    const isNumber = /[0-9]/;
    if (!isNumber.test(e.key)) {
      e.preventDefault();
      return;
    }
    const val = +`${e.currentTarget.value}${e.key}`;
    const unitIsInvalid = !dateUnitIsValid(dateUnit, val.toString());
    if (unitIsInvalid) {
      e.preventDefault();
    }
  };

  const isDisabled = (dateUnit: EDateInputs) => {
    if (dateUnit === EDateInputs.month) return false;
    if (dateUnit === EDateInputs.day) {
      return !dateUnitIsValid(EDateInputs.month, dateInputs[EDateInputs.month]);
    }
    if (dateUnit === EDateInputs.year) {
      return (
        !dateUnitIsValid(EDateInputs.day, dateInputs[EDateInputs.day]) ||
        !dateUnitIsValid(EDateInputs.month, dateInputs[EDateInputs.month])
      );
    }
    return false;
  };

  const fieldsetId = `date-fieldset-${questionId}`; 

  return (
    <fieldset className="usa-fieldset" id={fieldsetId} data-test={fieldsetId}>
      {/* <legend className="usa-legend">Date of birth</legend> */}
      <span className="usa-sr-only usa-hint" id="dobHint">
        For example: 4 28 1986
      </span>
      <div className="usa-memorable-date">
        {Object.keys(dateParts).map((dateUnit: EDateInputs) => {
          const { id, label, minLength, maxLength } = dateParts[dateUnit];
          // const unPaddedValue = dateInputs[dateUnit].replace(/\b0+/g, '');
          const unPaddedValue = dateInputs[dateUnit];

          return (
            <div
              className={`usa-form-group usa-form-group--${dateUnit} ${styles.dateInputGroup}`}
              key={dateUnit}
            >
              <div>
                <label htmlFor={id} className={`usa-label ${styles.label} ssa-p-body-sm`}>
                  {label}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={unPaddedValue}
                  onChange={handleDateInputsChange}
                  onKeyPress={(e) => handleKeyPress(e, dateUnit)}
                  name={dateUnit}
                  id={id}
                  className={`usa-input ${
                    isDisabled(dateUnit) ? 'is-disabled' : ''
                  } ${styles.dateInput} ssa-p-body-lg`}
                  aria-describedby="dobHint"
                  aria-label={dateUnit
                    .split('')
                    .map((l) => l.toUpperCase())
                    .join('')}
                  minLength={minLength}
                  maxLength={maxLength}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  disabled={isDisabled(dateUnit)}
                  ref={refs[dateUnit]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};
