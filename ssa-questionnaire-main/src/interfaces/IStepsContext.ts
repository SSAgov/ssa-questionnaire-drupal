import { EIcon, ICTABodyHTML, ICTABodyJSX } from '@/components/common';
import { IWizard } from 'use-wizard/lib/cjs/useWizard/types/IWizard';
import { TStep as TStep__original } from 'use-wizard/lib/cjs/useWizard/types/TStep';
import { IDrupalResponse } from './IApi';
import { EButtonVariant } from './ICommon';
import { ELang } from './IGlobalContext';
import { IOnStepChangeProps } from './IGTM';
import { IDateInputs, IProgressiveRevealeInputs } from './IQuestionComponents';
import { IGtmResult, IRequirement } from './IResults';

export enum EQuestionType {
  multiple_choice = 'multiple_choice',
  checkboxes = 'checkboxes',
  date = 'date',
  progressive_reveal = 'progressive_reveal',
  multiple_actions = 'multiple_actions',
  textarea = 'textarea',
}

export enum EStepType {
  question = 'question',
  page = 'page',
  feedback_prompt = 'feedback_prompt',
}

export type TAnswer =
  | string
  | IDateInputs
  | string[]
  | IProgressiveRevealeInputs;

export interface IAnswers {
  [key: string]: { value: TAnswer };
}

export interface IChoice {
  id: string;
  title: string;
  value: string;
}
export interface IAction extends IChoice {
  variant: EButtonVariant;
}

export interface IQuestion {
  title: string;
  choices?: IChoice[];
  actions?: IAction[];
  placeholder?: string;
  progressiveRevealTriggers?: string[];
  progressiveRevealLabel?: string;
  nextPrevBtns?: 'show' | 'hide';
  customActions?: string;
}

export interface IAccordion {
  id: string;
  title: string;
  body: string;
  requirements?: IRequirement[];
}
export interface IAccordionLogic {
  id: string;
  requirements?: IRequirement[];
}
export interface IAccordionContent {
  id: string;
  title: string;
  body: string;
}

export interface ICTA {
  icon: EIcon;
  title: string;
  body: ICTABodyHTML | ICTABodyJSX;
  btnTxt?: string;
  btnCb?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ICTALogic {
  icon: EIcon;
  btnCb?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ICTAContent {
  title: string;
  body: ICTABodyHTML | ICTABodyJSX;
  btnTxt?: string;
}
export interface IPausePoint {
  title: string;
  subTitle?: string;
  docs?: boolean;
  signingIn?: boolean;
  call?: boolean;
  mail?: boolean;
  notEligible?: boolean;
  accordions?: string[];
  cta?: ICTA;
}
export interface IPausePointLogic {
  docs?: boolean;
  signingIn?: boolean;
  call?: boolean;
  mail?: boolean;
  notEligible?: boolean;
  accordions?: string[];
  cta?: ICTALogic;
}
export interface IPausePointContent {
  title: string;
  subTitle?: string;
  cta?: ICTAContent;
}

export interface IQuestionLogicItem {
  id: TStep;
  questionType: EQuestionType;
  entryRequirements?: IRequirement[];
}

export enum ESubtitleType {
  text = 'text',
  html = 'html',
}
export interface IStepsContentItem {
  id: TStep;
  type: EStepType | string;
  questionType?: EQuestionType;
  entryRequirements?: IRequirement[];
  subTitle?: null | string;
  subTitleType?: ESubtitleType;
  info?: null | string;
  question?: IQuestion;
  pausePoint?: IPausePoint;
  progressBar?: 'show' | 'hide';
}

export interface IStepsContentItemLogic {
  id: TStep;
  type: EStepType | string;
  questionType?: EQuestionType;
  entryRequirements?: IRequirement[];
  subTitleType?: ESubtitleType;
  pausePoint?: IPausePointLogic;
  progressBar?: 'show' | 'hide';
}

export interface IStepsContentItemContent {
  id: TStep;
  subTitle?: null | string;
  info?: null | string;
  question?: IQuestion;
  pausePoint?: IPausePointContent;
}

export interface ICompleteAnswersInfoItem extends IStepsContentItem {
  answer: TAnswer;
}

export interface IAge {
  days: number;
  months: number;
  years: number;
}

export interface IAgeAndBday {
  age?: undefined | IAge;
  birthdate?: undefined | string;
}

export interface IGtmProps {
  ageAndBday: IAgeAndBday;
  answers: string;
}

export interface IStepsContextBaseProps {
  step: TStep__original;
  wizard: IWizard;
  answers: IAnswers;
  language: ELang;
  stepsContent: IStepsContentItem[];
  stepsSequence: TStep__original[];
  accordionsContent: IAccordion[];
  ageAndBday: IAgeAndBday;
  setAnswers: React.Dispatch<React.SetStateAction<{} | IAnswers>>;
  set__ageAndBday: any;
  currentStepContent: IStepsContentItem;
  loading: boolean;
}

export interface IStepsContextGtmProps {
  gtmInit: () => void;
  gtmOnActionClick: (label: string, url: string) => void;
  gtmOnResults: (results: IGtmResult[]) => void;
  gtmOnNoResults: () => void;
  gtmOnStepChange: (stepChangeProps: IOnStepChangeProps) => void;
  gtmFeedback: (props: any) => void;
}

export interface IStepsContext
  extends IStepsContextBaseProps,
    IStepsContextGtmProps {
  progressPercentage: number;
  goToNextStep: () => TStep;
  goToPreviousStep: () => TStep;
  goToSpecificStep: (stepId: TStep) => void;
  updateAnswers: (answerProps: any) => void;
  calcPercentage: (props: IStepsContextBaseProps) => number | undefined;
}

export type TStep = TStep__original;

export enum EDirection {
  forward = 1,
  backward = -1,
}

export type TDirection = EDirection.forward | EDirection.backward;

export interface IFormatStepsContentProps {
  questions: IDrupalResponse;
}

export interface IUpdateAnswersProps {
  questionId: TStep;
  value: TAnswer;
}
