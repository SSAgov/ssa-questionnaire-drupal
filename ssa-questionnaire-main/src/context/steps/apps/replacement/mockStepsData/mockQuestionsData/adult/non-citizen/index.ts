import { ADULT, ADULT_NON_CITIZEN, NO, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const adultNonCitizen: IStepsContentItem[] = [
  {
    type: 'question',
    id: 'NB',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `What type of work authorization do you have?`,
      choices: [
        {
          id: `0`,
          title: `I-551 Permanent Resident Immigrant Visa (Green Card)`,
          value: '0',
        },
        {
          id: `1`,
          title: `I-766 Employment Authorization Document (work permit)`,
          value: '1',
        },
        {
          id: `2`,
          title: `J-1 visa`,
          value: '2',
        },
        {
          id: `3`,
          title: `F-1 visa`,
          value: '3',
        },
        {
          id: `4`,
          title: `Other`,
          value: '4',
        },
        {
          id: `5`,
          title: `None`,
          value: '5',
        },
      ],
    },
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
  {
    type: 'question',
    id: 'ND',
    questionType: EQuestionType.checkboxes,
    subTitle: 'Select all that apply:',
    question: {
      title: `What changes do you need on your Social Security card or record?`,
      choices: [
        {
          id: `0`,
          title: `Citizenship or immigration status`,
          value: '0',
        },
        {
          id: `1`,
          title: `Name`,
          value: '1',
        },
        {
          id: `2`,
          title: `Place of birth`,
          value: '2',
        },
        {
          id: `3`,
          title: `Date of birth`,
          value: '3',
        },
        {
          id: `4`,
          title: `Parent(s) name(s)`,
          value: '4',
        },
        {
          id: `5`,
          title: `Sex identification`,
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
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [NO] }, { question: 'D', answers: [YES] }],
      },
    ],
  },
];
