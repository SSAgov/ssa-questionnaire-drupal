import { CHILD, NO, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';
import { childCitizen } from './citizen';
import { childNonCitizen } from './non-citizen';

export const child: IStepsContentItem[] = [
  {
    type: 'question',
    id: 'KA',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `How old is the child?`,
      choices: [
        {
          id: `0`,
          title: `0 - 5 years old`,
          value: '0',
        },
        {
          id: `1`,
          title: `6 - 17 years old`,
          value: '1',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [CHILD],
      },
    ],
  },
  {
    type: 'question',
    id: 'HH',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `Are you the parent or adoptive parent?`,
      choices: [
        {
          id: `0`,
          title: `Yes`,
          value: '0',
        },
        {
          id: `1`,
          title: `No`,
          value: '1',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [CHILD],
      },
    ],
  },
  {
    type: 'question',
    id: 'H2',
    questionType: EQuestionType.multiple_choice,
    subTitle: `Only custodial parents or legal guardians can get a replacement card for a child.`,
    question: {
      title: `Do you have custody of the child?`,
      choices: [
        {
          id: `0`,
          title: `Yes`,
          value: '0',
        },
        {
          id: `1`,
          title: `No`,
          value: '1',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [CHILD, { question: 'HH', answers: [YES] }],
      },
    ],
  },
  {
    type: 'question',
    id: 'II',
    questionType: EQuestionType.multiple_choice,
    subTitle: `You'll need to provide an original or certified copy of the court order.`,
    question: {
      title: `Are you a court-appointed legal guardian?`,
      choices: [
        {
          id: `0`,
          title: `Yes`,
          value: '0',
        },
        {
          id: `1`,
          title: `No`,
          value: '1',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [CHILD, { question: 'HH', answers: [NO] }],
      },
      {
        responses: [CHILD, { question: 'H2', answers: [NO] }],
      },
    ],
  },
  {
    type: 'question',
    id: 'I',
    questionType: EQuestionType.multiple_choice,
    subTitle: `New citizens must wait 10 days after becoming a citizen to request a replacement card.`,
    question: {
      title: `Is the child a U.S. citizen?`,
      choices: [
        {
          id: `0`,
          title: `Yes`,
          value: '0',
        },
        {
          id: `1`,
          title: `No`,
          value: '1',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [CHILD, { question: 'II', answers: [YES] }],
      },
      {
        responses: [CHILD, { question: 'H2', answers: [YES] }],
      },
    ],
  },
  ...childCitizen,
  ...childNonCitizen,
];
