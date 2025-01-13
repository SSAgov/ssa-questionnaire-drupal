import {
  EReqType,
  IExplanationReq,
  IMeetsReqsProps,
  IMeetsReqsReturnVal,
} from '@/interfaces';
import { parseDynamicExplanation } from './parseDynamicExplanation';
import {
  AAQuestionAnswerBreakdown,
  changeQuestionAnswerBreakdown,
  determineStateVitalsParticipation,
  marriedNameChangeAnswerBreakdown,
  NCQuestionAnswerBreakdown,
  NDAnswerBreakdown,
} from './reqs-helpers';
import {
  meetAgeReq,
  meetMaxAgeReq,
  meetMinAgeReq,
  meetNoResultsReq,
  meetResponsesReqs,
  meetStateEligibilityReq,
} from './reqs-helpers';

// Checks if all requirements have been met
export function meetsRequirements(
  props: IMeetsReqsProps,
): boolean | IMeetsReqsReturnVal {
  const { requirements, answers, ageAndBday, isResultsPage, lang } = props;
  let extractedExplanation = '';

  try {
    const oneOfReqsMet = requirements.some((req) => {
      const reqArr: (boolean | IExplanationReq)[] = Object.keys(req).map(
        (reqKey) => {
          switch (reqKey) {
            case EReqType.responses:
              return meetResponsesReqs(req[reqKey], answers, ageAndBday);
            case EReqType.minAge:
              return meetMinAgeReq(req[reqKey], answers, ageAndBday);
            case EReqType.maxAge:
              return meetMaxAgeReq(req[reqKey], answers, ageAndBday);
            case EReqType.ageCalc:
              return meetAgeReq(req[reqKey], answers, ageAndBday);
            case EReqType.determineStateIdEligibility:
              return meetStateEligibilityReq(req[reqKey], answers);
            case EReqType.determineStateVitalsParticipation:
              return determineStateVitalsParticipation(req[reqKey], answers);
            case EReqType.marriedNameChangeAnswerBreakdown:
              return marriedNameChangeAnswerBreakdown(req[reqKey], answers);
            case EReqType.changeQuestionAnswerBreakdown:
              return changeQuestionAnswerBreakdown(req[reqKey], answers);
            case EReqType.NDAnswerBreakdown:
              return NDAnswerBreakdown(req[reqKey], answers);
            case EReqType.AAQuestionAnswerBreakdown:
              return AAQuestionAnswerBreakdown(req[reqKey], answers);
            case EReqType.NCQuestionAnswerBreakdown:
              return NCQuestionAnswerBreakdown(req[reqKey], answers);
            case EReqType.thereAreNoResults:
              return meetNoResultsReq(req[reqKey], answers, ageAndBday);
            case EReqType.explanation:
              return { type: EReqType.explanation, text: req[reqKey] };
            case EReqType.dynamicExplanation:
              return {
                type: EReqType.dynamicExplanation,
                props: { ...req[reqKey], ageAndBday, lang },
              };
            case EReqType.id:
              return true;

            default:
              return false;
          }
        },
      );

      // Every property of an entry requirement needs to evaluate as true
      let tempExplanation = '';
      const everyReqMet = reqArr
        .filter((subReqItem) => {
          if (typeof subReqItem !== 'boolean') {
            if (subReqItem.type && subReqItem.type === EReqType.explanation) {
              tempExplanation = subReqItem.text;
            }
            if (
              subReqItem.type &&
              subReqItem.type === EReqType.dynamicExplanation
            ) {
              tempExplanation = parseDynamicExplanation({
                ...subReqItem.props,
                lang,
              });
            }

            return false;
          }
          return true;
        })
        .every((subReqItem) => subReqItem === true);

      if (everyReqMet) extractedExplanation = tempExplanation;
      return everyReqMet;
    });

    if (isResultsPage) {
      return {
        explanation: extractedExplanation,
        oneOfReqsMet,
      };
    }

    return oneOfReqsMet;
  } catch (error) {
    console.log('error = ', error);
    throw new Error(error);
  }
}


//     // TODO : handle DateInput types of questions
//     // If a quesiton was a date input, for now just return true
//     if (typeof foundAnswer.value !== 'string') return true;
//     // If answer does exist, check if the answer is included among expected answers
//     return expectedAnswers.includes(foundAnswer.value);
//   });
// }

// export function meetMinAgeReq(
//   minAge: IAgeReq,
//   _: IAnswers,
//   ageAndBday: IAgeAndBday,
// ): boolean {
//   const { age } = ageAndBday;
//   if (
//     age === undefined ||
//     age === null ||
//     age.years === undefined ||
//     age.years === null ||
//     age.months === undefined ||
//     age.months === null
//   )
//     return false;

//   const reqsMet =
//     age.years > minAge?.years ||
//     (age.years >= minAge?.years && age.months >= minAge?.months);

//   return reqsMet;
// }

// export function meetMaxAgeReq(
//   maxAge: IAgeReq,
//   _: IAnswers,
//   ageAndBday: IAgeAndBday,
// ): boolean {
//   const { age } = ageAndBday;
//   if (
//     age === undefined ||
//     age === null ||
//     age.years === undefined ||
//     age.years === null ||
//     age.months === undefined ||
//     age.months === null
//   )
//     return false;

//   const reqsMet =
//     age.years < maxAge?.years ||
//     (age.years <= maxAge?.years && age.months <= maxAge?.months);

//   return reqsMet;
// }

// export function meetAgeReq(
//   ageCalcCallBack: TAgeCalc,
//   _: IAnswers,
//   ageAndBday: IAgeAndBday,
// ): boolean {
//   if (!ageCalcCallBack) return true;
//   if (ageAndBday.birthdate === undefined) return false;
//   return ageCalcCallBack(ageAndBday.birthdate);
// }

// export function meetNoResultsReq(
//   ageCalcCallBack: TAgeCalc,
//   _: IAnswers,
//   ageAndBday: IAgeAndBday,
// ): boolean {
//   return true;
//   if (!ageCalcCallBack) return true;
//   if (ageAndBday.birthdate === undefined) return false;
//   return ageCalcCallBack(ageAndBday.birthdate);