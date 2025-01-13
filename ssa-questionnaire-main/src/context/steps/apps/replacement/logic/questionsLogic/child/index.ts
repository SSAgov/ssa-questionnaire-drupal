import { CHILD, NO, YES } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';
import { childCitizen } from './citizen';
import { childNonCitizen } from './non-citizen';

export const child: IStepsContentItem[] = [
  // title: `How old is the child?`
  {
    type: 'question',
    id: 'KA',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [CHILD],
      },
    ],
  },
  // title: `Are you the parent or adoptive parent?`
  {
    type: 'question',
    id: 'HH',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [CHILD],
      },
    ],
  },
  // title: `Do you have custody of the child?`
  {
    type: 'question',
    id: 'H2',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [CHILD, { question: 'HH', answers: [YES] }],
      },
    ],
  },
  // title: `Are you a court-appointed legal guardian?`
  {
    type: 'question',
    id: 'II',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [CHILD, { question: 'HH', answers: [NO] }],
      },
      {
        responses: [CHILD, { question: 'H2', answers: [NO] }],
      },
    ],
  },
  // title: `Is the child a U.S. citizen?`
  {
    type: 'question',
    id: 'I',
    questionType: EQuestionType.multiple_choice,
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
