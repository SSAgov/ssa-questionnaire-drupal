import { stepsSequence } from './stepsSequence';
import { questionsLogic } from './logic';
import {
  mockStepsData,
  mockPagesData,
  mockPausePointsData,
  mockQuestionsData,
  mockResultsData,
} from './mockStepsData';

export * from './constants';
export * from './replacementUtils';
export * from './content';
export * from './logic';

const replacementContent = {
  stepsSequence,
  questionsLogic,
  mockStepsData,
  mockPagesData,
  mockPausePointsData,
  mockQuestionsData,
  mockResultsData,
};

export { replacementContent };
