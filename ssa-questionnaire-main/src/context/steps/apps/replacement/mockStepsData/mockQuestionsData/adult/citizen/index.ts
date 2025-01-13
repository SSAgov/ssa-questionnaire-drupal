import { ADULT_CITIZEN, YES, yesNoChoices } from '@/constants';
import {
  changeQuestionAnswer,
  isStateIdEligible,
  NEITHER,
} from '@/context/steps/apps/replacement';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const adultCitizen: IStepsContentItem[] = [
  {
    type: 'question',
    id: 'G',
    questionType: EQuestionType.progressive_reveal,
    question: {
      title: `Do you have an unexpired driver's license or state-issued ID?`,
      choices: [
        {
          id: `0`,
          title: `Driver's license`,
          value: '0',
        },
        {
          id: `1`,
          title: `State-issued ID`,
          value: '1',
        },
        {
          id: `2`,
          title: `Neither`,
          value: '2',
        },
      ],
      progressiveRevealTriggers: ['0', '1'],
      progressiveRevealLabel: `What state issued your ID?`,
    },
    entryRequirements: [
      {
        responses: [...ADULT_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [...ADULT_CITIZEN, { question: 'D', answers: [YES] }],
      },
    ],
  },
  {
    type: 'question',
    id: 'CQ',
    questionType: EQuestionType.checkboxes,
    subTitle: 'Select all that apply:',
    question: {
      title: `What changes do you need on your Social Security card or record?`,
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
          title: `Citizenship`,
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
      // { responses: [ADULT, { question: 'G', answers: [NEITHER] }] },
      {
        responses: [
          ...ADULT_CITIZEN,
          { question: 'D', answers: ['unanswered', YES] },
          { question: 'G', answers: ['0', '1', NEITHER] },
        ],
      },
    ],
  },
  {
    type: 'question',
    id: 'L',
    questionType: EQuestionType.progressive_reveal,
    question: {
      title: `Are you changing your name because you got married?`,
      choices: yesNoChoices,
      progressiveRevealTriggers: [YES],
      progressiveRevealLabel: `What state issued your marriage certificate?`,
    },
    entryRequirements: [
      // onlyName
      {
        determineStateIdEligibility: (state: string, docType: string) =>
          isStateIdEligible(state, docType),
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).onlyName,
        responses: [...ADULT_CITIZEN],
      },
    ],
  },
];
