import { app } from '@/constants';
import { replacementContent } from './replacement';
import { eligibilityContent } from './eligibility';
import { feedbackContent } from './feedback';

const appSpecificMockStepsData = {
  replacement: {
    mockStepsData: replacementContent.mockStepsData,
    mockPagesData: replacementContent.mockPagesData,
    mockPausePointsData: replacementContent.mockPausePointsData,
    mockQuestionsData: replacementContent.mockQuestionsData,
    mockResultsData: replacementContent.mockResultsData,
  },
  feedback: {
    mockStepsData: feedbackContent.mockStepsData,
    mockPagesData: feedbackContent.mockPagesData,
    mockPausePointsData: feedbackContent.mockPausePointsData,
    mockQuestionsData: feedbackContent.mockQuestionsData,
    mockResultsData: feedbackContent.mockResultsData,
  },
  eligibility: {
    mockStepsData: eligibilityContent.mockStepsData,
    mockPagesData: eligibilityContent.mockPagesData,
    mockQuestionsData: eligibilityContent.mockQuestionsData,
    mockResultsData: eligibilityContent.mockResultsData,
  }
};

// export const mockStepsData = appSpecificMockStepsData[app];

const mockStepsData = appSpecificMockStepsData[app].mockStepsData;
const mockPagesData = appSpecificMockStepsData[app].mockPagesData;
const mockPausePointsData = appSpecificMockStepsData[app].mockPausePointsData;
const mockQuestionsData = appSpecificMockStepsData[app].mockQuestionsData;
const mockResultsData = appSpecificMockStepsData[app].mockResultsData;

export {
  mockStepsData,
  mockPagesData,
  mockPausePointsData,
  mockQuestionsData,
  mockResultsData,
};
