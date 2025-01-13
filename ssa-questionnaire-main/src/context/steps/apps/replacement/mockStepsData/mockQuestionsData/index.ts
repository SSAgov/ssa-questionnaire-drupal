import {
  ADULT,
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  YES,
  yesNoChoices,
} from '@/constants';
import { EQuestionType, IQuestion, IStepsContentItem } from '@/interfaces';
import { adult } from './adult';
import { child } from './child';

export const mockQuestionsData: IStepsContentItem[] = [
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
  {
    type: 'question',
    id: 'E',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `Who is the replacement card for?`,
      choices: [
        {
          id: `0`,
          title: `Adult (age 18 and older)`,
          value: '0',
        },
        {
          id: `1`,
          title: `Child (age 17 and younger)`,
          value: '1',
        },
      ],
    },
  },
  {
    type: 'question',
    id: 'C',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `Do you have a permanent U.S. mailing address?`,
      choices: yesNoChoices,
    },
    subTitle: `This includes APO, FPO, DPO, and PO Boxes.`,
    entryRequirements: [
      { responses: [...ADULT_CITIZEN] },
      { responses: [...ADULT_NON_CITIZEN] },
      { responses: [...CHILD_CITIZEN] },
      { responses: [...CHILD_NON_CITIZEN] },
    ],
  },
  {
    type: 'question',
    id: 'D',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `Do you live in the U.S.?`,
      choices: yesNoChoices,
    },
    subTitle: `This includes U.S. commonwealths and territories.`,
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
