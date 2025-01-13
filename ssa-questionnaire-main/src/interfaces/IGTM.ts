import { EDirection, TStep } from './IStepsContext';

export enum EGTMEvent {
  click = 'click',
  begin_benefits_quest = 'begin_benefits_quest',
  complete_benefits_quest = 'complete_benefits_quest',
  defer_benefits_quest = 'defer_benefits_quest',
  step_benefits_quest = 'step_benefits_quest',
  feedback_quest = 'feedback_quest',
}

export interface IEmitGtmEventProps {
  eventName: string;
  payload?: {};
  addOnce?: boolean;
  upsert?: boolean;
}

export interface IOnStepChangeProps {
  stepId: TStep;
  dir: EDirection;
  title?: string;
  targetStep?: TStep;
}
