import { CHILD_CITIZEN, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const childCitizen: IStepsContentItem[] = [
  {
    type: 'question',
    id: 'AA',
    questionType: EQuestionType.checkboxes,
    subTitle: 'Select all that apply:',
    question: {
      title: `What changes does the child need on their Social Security card or record?`,
      choices: [
        {
          id: `0`,
          title: `Name`,
          value: '0',
        },
        {
          id: `1`,
          title: `Date of birth`,
          value: '1',
        },
        {
          id: `2`,
          title: `Place of birth`,
          value: '2',
        },
        {
          id: `3`,
          title: `Sex identification`,
          value: '3',
        },
        {
          id: `4`,
          title: `Parent(s) name(s)`,
          value: '4',
        },
        {
          id: `5`,
          title: `Citizenship status`,
          value: '5',
        },
        {
          id: `none_of_the_above`,
          title: `No changes needed`,
          value: 'none_of_the_above',
        },
      ],
    },
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
