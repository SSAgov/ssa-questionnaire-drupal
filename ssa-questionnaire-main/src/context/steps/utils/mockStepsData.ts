import { app } from '@/constants';
import { replacementContent } from '../apps/replacement';
import { eligibilityContent } from '../apps/eligibility';
import { feedbackContent } from '../apps/feedback';
import { IResult } from '@/interfaces/IResults';
import { TT } from '@/interfaces';

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
    mockPausePointsData: eligibilityContent.mockPausePointsData,
    mockQuestionsData: eligibilityContent.mockQuestionsData,
    mockResultsData: eligibilityContent.mockResultsData,
  },
};

// export const mockStepsData = appSpecificMockStepsData[app];

const mockStepsData = appSpecificMockStepsData[app].mockStepsData;
const mockPagesData = appSpecificMockStepsData[app].mockPagesData;
const mockPausePointsData = appSpecificMockStepsData[app].mockPausePointsData;
const mockQuestionsData = appSpecificMockStepsData[app].mockQuestionsData;
const mockResultsData: (t: TT) => IResult[] = appSpecificMockStepsData[app].mockResultsData;

export {
  mockStepsData,
  mockPagesData,
  mockPausePointsData,
  mockQuestionsData,
  mockResultsData,
};
