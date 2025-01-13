import { mockPagesData } from './mockPagesData';
import { mockPausePointsData } from './mockPausePointsData';
import { mockQuestionsData } from './mockQuestionsData';
import { mockResultsData } from './mockResultsData';

const mockStepsData = [
  ...mockPagesData,
  ...mockPausePointsData,
  ...mockQuestionsData,
];

export { mockStepsData, mockPagesData, mockPausePointsData, mockQuestionsData, mockResultsData };
