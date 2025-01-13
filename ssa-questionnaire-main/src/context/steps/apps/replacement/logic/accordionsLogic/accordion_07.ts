import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import {
  IAccordion,
  IProgressiveRevealeInputs,
  IRequirement,
} from '@/interfaces';
import { DRIVERS_LICENSE, NEITHER, STATE_ID } from '../../constants';
import {
  AAQuestionAnswer,
  changeQuestionAnswer,
  isStateIdEligible,
  isStateVitalsParticipating,
  marriedNameChangeAnswer,
  NCQuestionAnswer,
  NDAnswerBreakdown,
} from '../../replacementUtils';

const ossnapReqs: IRequirement[] = [
  {
    id: '7-ossnap-ac-1',
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesName,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [NEITHER] },
    ],
  },
  {
    id: '7-ossnap-ac-2',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesName,
    marriedNameChangeAnswerBreakdown: (
      marriedAnswer: IProgressiveRevealeInputs,
    ) => marriedNameChangeAnswer(marriedAnswer).notChangingNameBecauseMarried,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-ossnap-ac-3',
    determineStateIdEligibility: (state: string, docType: string) =>
      !isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesName,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-ossnap-ac-4',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesName,
    marriedNameChangeAnswerBreakdown: (
      marriedAnswer: IProgressiveRevealeInputs,
    ) => marriedNameChangeAnswer(marriedAnswer).changingNameBecauseMarried,
    determineStateVitalsParticipation: (state: string) =>
      !isStateVitalsParticipating(state),
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-ossnap-anc-1',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).includesName,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
  {
    id: '7-ossnap-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).includesName,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [YES, UNANSWERED] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '7-ossnap-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).includesName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [YES, UNANSWERED] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const nonetReqs = [
  {
    id: '7-nonet-ac-1',
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).includesName,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-nonet-ac-2',
    determineStateIdEligibility: (state: string, docType: string) =>
      !isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).anyChange,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-nonet-ac-3',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).anyChange,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '7-nonet-anc-1',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).anyChange,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
  {
    id: '7-nonet-anc-2',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).includesName,
    responses: [...ADULT_NON_CITIZEN, { question: 'D', answers: [YES] }],
  },
  {
    id: '7-nonet-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).anyChange,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '7-nonet-cc-2',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).includesName,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '7-nonet-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).anyChange,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [YES, UNANSWERED] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '7-nonet-cnc-2',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).includesName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [YES, UNANSWERED] },
      { question: 'C', answers: [YES] },
    ],
  },
];

export const accordion_07 = {
  id: '07',
  requirements: [...ossnapReqs, ...nonetReqs],
};
