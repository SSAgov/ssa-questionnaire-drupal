import { stepsSequence } from './stepsSequence';
import {
  mockStepsData,
  mockPagesData,
  mockQuestionsData,
} from './mockStepsData';

const feedbackContent = {
  stepsSequence,
  mockStepsData,
  mockPagesData,
  mockPausePointsData: [],
  mockQuestionsData,
  mockResultsData: [],
};

export { feedbackContent };

export * from './content';
export * from './logic';
