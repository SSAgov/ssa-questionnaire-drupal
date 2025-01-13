import { IStepsContext, IStepsContextBaseProps } from '@/interfaces';

export const basePropsDefaults: IStepsContextBaseProps = {
  step: '',
  wizard: null,
  answers: {},
  setAnswers: null,
  stepsContent: [],
  stepsSequence: [],
  ageAndBday: {},
  set__ageAndBday: null,
};

export const stepsContextCombinedPropsDefaults: IStepsContext = {
  ...basePropsDefaults,
  progressPercentage: 0,
  goToNextStep: null,
  goToPreviousStep: null,
  goToSpecificStep: null,
  updateAnswers: null,
  calcPercentage: null,
};
