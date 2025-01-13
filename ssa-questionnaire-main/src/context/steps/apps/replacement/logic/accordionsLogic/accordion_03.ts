import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion, IProgressiveRevealeInputs } from '@/interfaces';
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

const ossnapReq = [
  {
    id: '3-ossnap-ac-1',
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).noneOrOnlyName,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [NEITHER] },
    ],
  },
  {
    id: '3-ossnap-ac-2',
    determineStateIdEligibility: (state: string, docType: string) =>
      !isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).noneOrOnlyName,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  {
    id: '3-ossnap-ac-3',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).onlyName,
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
    id: '3-ossnap-ac-4',
    determineStateIdEligibility: (state: string, docType: string) =>
      isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).onlyName,
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
  // {
  //   id: '3-ossnap-anc-1',
  //   responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  // },
  {
    id: '3-ossnap-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  // {
  //   id: '3-ossnap-cnc-1',
  //   NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
  //     NCQuestionAnswer(naAnswer).noneOrOnlyName,
  //   responses: [
  //     ...CHILD_NON_CITIZEN,
  //     { question: 'II', answers: [UNANSWERED, YES] },
  //     { question: 'C', answers: [YES] },
  //   ],
  // },
];

const nonetReq = [
  {
    id: '3-nonet-ac-1',
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).otherThanNameOrMultiple,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [NEITHER] },
    ],
  },
  {
    id: '3-nonet-ac-2',
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '3-nonet-ac-3',
    determineStateIdEligibility: (state: string, docType: string) =>
      !isStateIdEligible(state, docType),
    changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
      changeQuestionAnswer(cqAnswer).otherThanNameOrMultiple,
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
    ],
  },
  // {
  //   id: '3-nonet-anc-1',
  //   NDAnswerBreakdown: (ndAnswer: string[]) =>
  //     NDAnswerBreakdown(ndAnswer).otherThanNameOrMultiple,
  //   responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  // },
  // {
  //   id: '3-nonet-anc-2',
  //   responses: [
  //     ...ADULT_NON_CITIZEN,
  //     { question: 'C', answers: [NO] },
  //     { question: 'D', answers: [YES] },
  //   ],
  // },
  {
    id: '3-nonet-cc-1',
    // AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
    //   AAQuestionAnswer(aaAnswer).anyChange,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '3-nonet-cc-2',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  // {
  //   id: '3-nonet-cnc-1',
  //   responses: [
  //     ...CHILD_NON_CITIZEN,
  //     { question: 'II', answers: [UNANSWERED, YES] },
  //     { question: 'D', answers: [YES] },
  //   ],
  // },
  // {
  //   id: '3-nonet-cnc-2',
  //   NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
  //     NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
  //   responses: [
  //     ...CHILD_NON_CITIZEN,
  //     { question: 'II', answers: [UNANSWERED, YES] },
  //     { question: 'C', answers: [YES] },
  //   ],
  // },
];

const fbuReqs = [
  {
    id: '3-fbu-ac-1',
    responses: [
      ...ADULT_CITIZEN,
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
  {
    id: '3-fbu-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
  {
    id: '3-fbu-cc-1',
    responses: [
      ...CHILD_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
  {
    id: '3-fbu-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
];

export const accordion_03 = {
  id: '03',
  requirements: [...ossnapReq, ...nonetReq, ...fbuReqs],
};
