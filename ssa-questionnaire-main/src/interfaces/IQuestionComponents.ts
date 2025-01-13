import { IQuestionInputs } from '@/components/questions/question-helpers';
import { Dispatch, SetStateAction } from 'react';
import { EAlertType } from './IGlobalContext';
import { IAge, IStepsContentItem } from './IStepsContext';

export enum EDateInputs {
  month = 'month',
  day = 'day',
  year = 'year',
}

export interface IDateInputs {
  month: string;
  day: string;
  year: string;
}

export interface IStateInfo {
  name: string;
  abbreviation: string;
}

export interface IProgressiveRevealeInputs {
  mainInput: string;
  followupInput?: IStateInfo;
}

export interface IDatePart {
  id: string;
  label: string;
  minLength: number;
  maxLength: number;
}

export interface IDatePartsProps {
  month: IDatePart;
  day: IDatePart;
  year: IDatePart;
}

export interface IQuestionError {
  message: string;
  type: EAlertType;
}

export interface IQuestionErrorProps {
  error: IQuestionError;
}

export enum EQuestionInputNames {
  textInput = 'textInput',
  checkboxesInput = 'checkboxesInput',
  dateInputs = 'dateInputs',
  progressiveRevealInputs = 'progressiveRevealInputs',
}

export interface QuestTypeProps extends IStepsContentItem {
  inputs: IQuestionInputs;
  handleChange: <TVal>(
    inputName: EQuestionInputNames,
    value: TVal,
    age?: IAge,
    birthdate?: string,
  ) => void;
  set__error: Dispatch<SetStateAction<IQuestionError>>;
}
