import { CHILD_CITIZEN, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const childCitizen: IStepsContentItem[] = [
  // title: `What changes does the child need on their Social Security card or record?`
  {
    type: 'question',
    id: 'AA',
    questionType: EQuestionType.checkboxes,
    entryRequirements: [
      {
        responses: [...CHILD_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [...CHILD_CITIZEN, { question: 'D', answers: [YES] }],
      },
    ],
  },
];
