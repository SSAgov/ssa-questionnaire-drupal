import { MonthNumbers } from 'luxon';
import { ELang } from './IGlobalContext';
import { IDynamicExplanation, IRequirement } from './IResults';
import { IAgeAndBday, IAnswers } from './IStepsContext';

export enum EReqType {
  responses = 'responses',
  minAge = 'minAge',
  maxAge = 'maxAge',
  ageCalc = 'ageCalc',
  determineStateIdEligibility = 'determineStateIdEligibility',
  determineStateVitalsParticipation = 'determineStateVitalsParticipation',
  marriedNameChangeAnswerBreakdown = 'marriedNameChangeAnswerBreakdown',
  changeQuestionAnswerBreakdown = 'changeQuestionAnswerBreakdown',
  NDAnswerBreakdown = 'NDAnswerBreakdown',
  AAQuestionAnswerBreakdown = 'AAQuestionAnswerBreakdown',
  NCQuestionAnswerBreakdown = 'NCQuestionAnswerBreakdown',
  explanation = 'explanation',
  dynamicExplanation = 'dynamicExplanation',
  thereAreNoResults = 'thereAreNoResults',
  id = 'id',
}

export interface IMeetsReqsProps {
  requirements: IRequirement[];
  answers: IAnswers;
  ageAndBday: IAgeAndBday;
  isResultsPage?: boolean;
  lang: ELang;
}

export interface IMeetsReqsReturnVal {
  explanation: string;
  oneOfReqsMet: boolean;
}

export interface IExpReqProps extends IDynamicExplanation {
  ageAndBday: IAgeAndBday;
}

export interface IExplanationReq {
  type: EReqType;
  text?: string;
  props?: IExpReqProps;
}

export interface ICalcFirstMOEResult {
  month: MonthNumbers;
  year: number;
}

export interface IMonthAndYearOfEnt {
  month: string;
  year: number;
}
