import { ADULT, ADULT_NON_CITIZEN, NO, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const adultNonCitizen: IStepsContentItem[] = [
  // title: `What type of work authorization do you have?`
  {
    type: 'question',
    id: 'NB',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [
          ...ADULT_NON_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
        ],
      },
    ],
  },
  // title: `What changes do you need on your Social Security card or record?`
  {
    type: 'question',
    id: 'ND',
    questionType: EQuestionType.checkboxes,
    entryRequirements: [
      {
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [
          ...ADULT_NON_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
        ],
      },
    ],
  },
];
