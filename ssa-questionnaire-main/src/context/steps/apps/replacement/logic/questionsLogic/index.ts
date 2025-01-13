import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
} from '@/constants';
import { EQuestionType, IStepsContentItem, IStepsContentItemLogic } from '@/interfaces';
import { adult } from './adult';
import { child } from './child';

export const questionsLogic: IStepsContentItemLogic[] = [
  // title: `Who is the replacement card for?`,
  {
    type: 'question',
    id: 'E',
    questionType: EQuestionType.multiple_choice,
  },
  // title: `Do you have a permanent U.S. mailing address?`,
  {
    type: 'question',
    id: 'C',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      { responses: [...ADULT_CITIZEN] },
      { responses: [...ADULT_NON_CITIZEN] },
      { responses: [...CHILD_CITIZEN] },
      { responses: [...CHILD_NON_CITIZEN] },
    ],
  },
  // title: `Do you live in the U.S.?`
  {
    type: 'question',
    id: 'D',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      { responses: [...ADULT_CITIZEN, { question: 'C', answers: [NO] }] },
      { responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [NO] }] },
      { responses: [...CHILD_CITIZEN, { question: 'C', answers: [NO] }] },
      { responses: [...CHILD_NON_CITIZEN, { question: 'C', answers: [NO] }] },
    ],
  },
  ...adult,
  ...child,
];

// {
//   type: 'question',
//   id: 'test_alerts',
//   questionType: EQuestionType.date,
//   subTitle: `Use this format: MM DD YYYY (e.g., 10 12 1954)`,
//   info: `Most of our benefits have age requirements, so we'll use your birthday to see how old you are.`,
//   question: {
//     title: `Enter your birthday.`,
//   },
// },
