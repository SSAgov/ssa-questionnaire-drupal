import {
  IAgeAndBday,
  IAgeReq,
  IAnswers,
  IProgressiveRevealeInputs,
  IResponse,
  TAgeCalc,
} from '@/interfaces';

// Checks if all expected responses exist
export function meetResponsesReqs(
  responses: IResponse[],
  answers: IAnswers,
  ageAndBday: IAgeAndBday,
): boolean {
  // All responses need to evaluate as true
  return responses.every((response) => {
    // Iterate through every required response extracting question ID and expected answers
    const questionId = response.question;
    const expectedAnswers = response.answers;

    // Check if the answer to specific question exists
    const foundAnswer = answers[questionId];
    if (!foundAnswer) {
      const allowUnanswered = expectedAnswers.includes('unanswered');
      if (allowUnanswered) return true;
      return false;
    }

    // TODO : handle DateInput types of questions
    // If a quesiton was a date input, for now just return true
    if (typeof foundAnswer.value !== 'string') return true;
    // If answer does exist, check if the answer is included among expected answers
    return expectedAnswers.includes(foundAnswer.value);
  });
}

export function meetMinAgeReq(
  minAge: IAgeReq,
  _: IAnswers,
  ageAndBday: IAgeAndBday,
): boolean {
  const { age } = ageAndBday;
  if (
    age === undefined ||
    age === null ||
    age.years === undefined ||
    age.years === null ||
    age.months === undefined ||
    age.months === null
  )
    return false;

  const reqsMet =
    age.years > minAge?.years ||
    (age.years >= minAge?.years && age.months >= minAge?.months);

  return reqsMet;
}

export function meetMaxAgeReq(
  maxAge: IAgeReq,
  _: IAnswers,
  ageAndBday: IAgeAndBday,
): boolean {
  const { age } = ageAndBday;
  if (
    age === undefined ||
    age === null ||
    age.years === undefined ||
    age.years === null ||
    age.months === undefined ||
    age.months === null
  )
    return false;

  const reqsMet =
    age.years < maxAge?.years ||
    (age.years <= maxAge?.years && age.months <= maxAge?.months);

  return reqsMet;
}

export function meetAgeReq(
  ageCalcCallBack: TAgeCalc,
  _: IAnswers,
  ageAndBday: IAgeAndBday,
): boolean {
  if (!ageCalcCallBack) return true;
  if (ageAndBday.birthdate === undefined) return false;
  return ageCalcCallBack(ageAndBday.birthdate);
}

export function meetStateEligibilityReq(
  stateEligibilityCB: (state: string, docType: string) => boolean,
  answers: IAnswers,
): boolean {
  const NO_ID = '2';
  const foundAnswer = answers['G'];
  if (!foundAnswer) return false;
  const answer = foundAnswer.value as IProgressiveRevealeInputs;
  if (
    answer.mainInput === null ||
    answer.mainInput === undefined ||
    answer.mainInput === NO_ID
  )
    return false;
  if (!answer.followupInput || !answer.followupInput.abbreviation) return false;
  const stateAbbriviation = answer.followupInput.abbreviation;
  const docType = answer.mainInput === '0' ? 'drivers_license' : 'state_id'

  return stateEligibilityCB(stateAbbriviation, docType);
}

export function meetNoResultsReq(
  ageCalcCallBack: TAgeCalc,
  _: IAnswers,
  ageAndBday: IAgeAndBday,
): boolean {
  return true;
  if (!ageCalcCallBack) return true;
  if (ageAndBday.birthdate === undefined) return false;
  return ageCalcCallBack(ageAndBday.birthdate);
}
