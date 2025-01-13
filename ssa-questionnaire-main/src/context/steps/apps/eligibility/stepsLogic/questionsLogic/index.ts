import { EQuestionType, IQuestionLogicItem, IStepsContentItem } from '@/interfaces';
import { adultQuestionsLogic } from './adultQuestionsLogic';

const questionsLogic: IQuestionLogicItem[] = [
  // Who do you want to check eligibility for?
  {
    id: 'A',
    questionType: EQuestionType.multiple_choice,
  },
  ...adultQuestionsLogic,
];

export { questionsLogic };
