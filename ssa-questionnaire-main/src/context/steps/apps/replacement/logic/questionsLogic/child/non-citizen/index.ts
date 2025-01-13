import { CHILD_NON_CITIZEN } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const childNonCitizen: IStepsContentItem[] = [
  // title: `What type of immigration documentation does the child have?`
  {
    type: 'question',
    id: 'NH',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [...CHILD_NON_CITIZEN],
      },
    ],
  },
  // title: `What changes does the child need on their Social Security card or record?`
  {
    type: 'question',
    id: 'NC',
    questionType: EQuestionType.checkboxes,
    entryRequirements: [
      {
        responses: [...CHILD_NON_CITIZEN],
      },
    ],
  },
];
