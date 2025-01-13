import { ECategory } from './IPagesComponenets';
import { IProgressiveRevealeInputs } from './IQuestionComponents';

export interface IResponse {
  question: string;
  answers: string[];
}

export enum EProcessor {
  monthAndYearOfEntitlement = 'monthAndYearOfEntitlement',
}

export interface IDynamicExplanation {
  templateString: string;
  variables: string[];
  processor: EProcessor;
}

export interface IAgeReq {
  months?: number;
  days?: number;
  years?: number;
}

export type TAgeCalc = (birthday: string) => boolean;

export interface IRequirement {
  id?: string;
  explanation?: string;
  dynamicExplanation?: IDynamicExplanation;
  minAge?: IAgeReq;
  maxAge?: IAgeReq;
  ageCalc?: TAgeCalc;
  determineStateIdEligibility?: (state: string, docType: string) => boolean;
  determineStateVitalsParticipation?: (state: string) => boolean;
  marriedNameChangeAnswerBreakdown?: (
    input: IProgressiveRevealeInputs,
  ) => boolean;
  changeQuestionAnswerBreakdown?: (input: string[]) => boolean;
  NDAnswerBreakdown?: (input: string[]) => boolean;
  AAQuestionAnswerBreakdown?: (input: string[]) => boolean;
  NCQuestionAnswerBreakdown?: (input: string[]) => boolean;
  responses?: IResponse[];
}

export interface IPopulatedCategory {
  category: ECategory;
  categoryName: string;
  explanation: string;
  id: string;
  label: string;
  requirements: IRequirement[];
  title: string;
}

export interface IQualCatNames {
  categoryKey: ECategory;
  categoryName: string;
}

export interface IBuiltCategories {
  populatedCategories: {
    [key: string]: IPopulatedCategory[];
  };
  sortedCategoryNames: IQualCatNames[];
}

export interface IResult {
  id: string;
  category: ECategory;
  title: string;
  label: string;
  requirements: IRequirement[];
}

export interface IPersists {
  age: number;
  branch?: string;
  results: IResultComplete[];
}

export interface IResultComplete {
  id: string;
  category?: string;
  description: string;
  name?: string;
  label: string;
  reason: string;
  title: string;
}

export interface IPopulatedCatItem extends IResult {
  explanation: string;
  categoryName: string;
}

export interface IGtmResult extends IPopulatedCatItem {
  categoryName: string;
}

export interface IPopulatedCats {
  [categoryName: string]: IPopulatedCatItem[];
}
