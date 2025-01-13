import {
  IDateInputs,
  EDateInputs,
  IAge,
  TStep,
  IDatePartsProps,
} from '@/interfaces';
import { DateTime } from 'luxon';

export const dateUnitIsValid = (unit: string, val: string): boolean => {
  const valStr = `${val}`;

  if (valStr.length === 0) return false;

  const comparator = +valStr;
  const currentYear = new Date().getFullYear();

  const isZero = valStr.length <= 1 && comparator === 0;

  switch (unit) {
    case EDateInputs.day:
      if (isZero) return true;
      const dayIsOutOfRange = comparator < 1 || comparator > 31;
      if (dayIsOutOfRange) return false;
      break;

    case EDateInputs.month:
      if (isZero) return true;
      const monthIsOutOfRange = comparator < 1 || comparator > 12;
      if (monthIsOutOfRange) return false;
      break;

    case EDateInputs.year:
      if (valStr.length === 1 && comparator !== 1 && comparator !== 2)
        return false;

      if (
        valStr.length === 2 &&
        !valStr.startsWith('19') &&
        !valStr.startsWith('20')
      )
        return false;

      if (
        valStr.length === 4 &&
        (comparator < 1900 || comparator > currentYear)
      )
        return false;

      break;
    default:
      return false;
  }
  return true;
};

// Converts a Date of Birth type into a string
export function toBirthdate(dob: IDateInputs): string | undefined {
  if (dob.month && dob.day && dob.year) {
    if (+dob.month < 1 || +dob.month > 12) return undefined;

    if (+dob.day < 1 || +dob.day > 31) return undefined;

    if (+dob.year < 1900 || +dob.year > new Date().getFullYear())
      return undefined;

    return `${dob.month.padStart(2, '0')}/${dob.day.padStart(2, '0')}/${
      dob.year
    }`;
  }

  return undefined;
}

/**
 * Parses a date/time string and returns an Age object
 * @param dateOfBirth - should always be in the format `MM/DD/YYYY`
 * @returns an age, if the date is valid
 */
export function getAge(dateOfBirth: string | undefined): IAge {
  if (!dateOfBirth || !isValidDate(dateOfBirth)) return undefined;

  const dob = getDateTime(dateOfBirth);
  if (!dob) return undefined;

  return getDateTimeAge(dob);
}

// Determines if a string can be parsed into a valid Date
export function isValidDate(dt: string) {
  return !(!dt || dt.length < 8);
}

/**
 * Gets a luxon DateTime object from a date string
 * @param dt DateTime as string- should always be in the format `MM/DD/YYYY`
 * @returns DateTime or undefined
 */
export function getDateTime(dt: string): DateTime {
  if (!isValidDate(dt)) return undefined;
  const date = new Date(
    +dt.substring(6, 10),
    +dt.substring(0, 2) - 1,
    +dt.substring(3, 5),
  );
  return DateTime.fromJSDate(date);
}

/**
 * Gets an age from a DateTime object
 * @param dob - luxon DateTime
 * @returns an age with years, months, days
 */
export function getDateTimeAge(dob: DateTime): IAge {
  const now = DateTime.now();
  const yearNow = now.year;
  const monthNow = now.month;
  const dateNow = now.day;

  const yearDob = dob.year;
  const monthDob = dob.month;
  const dateDob = dob.day;

  let years = yearNow - yearDob;
  let months = 0;

  if (monthNow >= monthDob) {
    months = monthNow - monthDob;
  } else {
    years -= 1;
    months = 12 + monthNow - monthDob;
  }

  let days = 0;
  if (dateNow >= dateDob) {
    days = dateNow - dateDob;
  } else {
    days = 31 + dateNow - dateDob;
    months += -1;
    if (months < 0) {
      months = 11;
      years -= 1;
    }
  }

  return {
    days,
    months,
    years,
  };
}

export function getDatePartsProps(
  t: (unit: string, letterCase?: string) => string,
  questionId: TStep,
): IDatePartsProps {
  const result = {
    month: {
      id: `${questionId}-month`,
      label: t('month'),
      minLength: 1,
      maxLength: 2,
    },
    day: {
      id: `${questionId}-day`,
      label: t('day'),
      minLength: 1,
      maxLength: 2,
    },
    year: {
      id: `${questionId}-year`,
      label: t('year'),
      minLength: 4,
      maxLength: 4,
    },
  };

  return result;
}
