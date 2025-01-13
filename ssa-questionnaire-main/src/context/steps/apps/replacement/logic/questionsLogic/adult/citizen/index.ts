import { ADULT_CITIZEN, YES } from '@/constants';
import {
  changeQuestionAnswer,
  isStateIdEligible,
} from '@/context/steps/apps/replacement';
import { EQuestionType, IStepsContentItem } from '@/interfaces';

export const NEITHER = '2';
export const NAME_CHANGE = '0';

export const adultCitizen: IStepsContentItem[] = [
  // title: `Do you have an unexpired driver's license or state-issued ID?`
  {
    type: 'question',
    id: 'G',
    questionType: EQuestionType.progressive_reveal,
    entryRequirements: [
      {
        responses: [...ADULT_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        responses: [...ADULT_CITIZEN, { question: 'D', answers: [YES] }],
      },
    ],
  },
  // title: `What changes do you need on your Social Security card or record?`
  {
    type: 'question',
    id: 'CQ',
    questionType: EQuestionType.checkboxes,
    entryRequirements: [
      {
        responses: [
          ...ADULT_CITIZEN,
          { question: 'D', answers: ['unanswered', YES] },
          { question: 'G', answers: ['0', '1', NEITHER] },
        ],
      },
    ],
  },
  // title: `Are you changing your name because you got married?`
  {
    type: 'question',
    id: 'L',
    questionType: EQuestionType.progressive_reveal,
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
