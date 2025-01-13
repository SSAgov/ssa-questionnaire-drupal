import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { DRIVERS_LICENSE, STATE_ID } from '../../constants';
import {
  AAQuestionAnswer,
  changeQuestionAnswer,
  isStateIdEligible,
  NCQuestionAnswer,
  NDAnswerBreakdown,
} from '../../replacementUtils';

const nonetReqs = [
  {
    id: '8-nonet-ac-1',
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesDob,
    responses: [...ADULT_CITIZEN, { question: 'D', answers: [YES] }],
  },
  {
    id: '8-nonet-ac-2',
    determineStateIdEligibility: (state: string, docType: string) =>
      !isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesDob,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '8-nonet-ac-3',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesDob,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '8-nonet-anc-1',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).includesDob,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
  {
    id: '8-nonet-anc-2',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).includesDob,
    responses: [...ADULT_NON_CITIZEN, { question: 'D', answers: [YES] }],
  },
  {
    id: '8-nonet-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).includesDob,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '8-nonet-cc-2',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).includesDob,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '8-nonet-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).includesDob,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '8-nonet-cnc-2',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).includesDob,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES] },
    ],
  },
];

export const accordion_08 = {
  id: '08',
  requirements: [...nonetReqs],
};
