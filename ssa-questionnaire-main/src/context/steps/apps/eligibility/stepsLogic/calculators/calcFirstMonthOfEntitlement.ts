import { getDateTime } from '@/components/questions/question-types/dateFieldHelpers';
import { ICalcFirstMOEResult } from '@/interfaces';

export function calcFirstMonthOfEntitlement(
  dateOfBirth: string,
): ICalcFirstMOEResult | undefined {
  // Convert a string date into a Luxon date object to perform operations against it
  const luxonDate = getDateTime(dateOfBirth);
  if (!luxonDate) return undefined;

  // English common law that finds that a person attains an age on the day before the birthday
  const attainedBirthdate = luxonDate.minus({ day: 1 });

  // Month of Entitlement (MOE) is 62 years and a month from attained birth for most people
  let moe = attainedBirthdate.plus({ years: 62, months: 1 });

  // When someone is born on the second day of the month, they are still entitled for the entire month
  // because their attained date is the first; therefore, they will be 62 the entire month
  if (luxonDate.day === 2) {
    moe = moe.minus({ months: 1 });
  }

  const result = { month: moe.month, year: moe.year };

  return result;
}
