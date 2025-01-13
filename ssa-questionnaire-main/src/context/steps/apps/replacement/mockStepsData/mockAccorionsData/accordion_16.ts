import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
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

export const accordion_16: IAccordion = {
  id: '16',
  title: 'TBD Sex ID accordion',
  body: `
      <p>
        TBD
      </p>
      `,
  requirements: [
    {
      id: '16-nonet-ac-1',
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesSexId,
      responses: [...ADULT_CITIZEN, { question: 'D', answers: [YES] }],
    },
    {
      id: '16-nonet-ac-2',
      determineStateIdEligibility: (state: string, docType: string) =>
        !isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesSexId,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
    {
      id: '16-nonet-ac-3',
      determineStateIdEligibility: (state: string, docType: string) =>
        isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesSexId,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
    {
      id: '16-nonet-anc-1',
      NDAnswerBreakdown: (ndAnswer: string[]) =>
        NDAnswerBreakdown(ndAnswer).includesSexId,
      responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
    },
    {
      id: '16-nonet-anc-2',
      NDAnswerBreakdown: (ndAnswer: string[]) =>
        NDAnswerBreakdown(ndAnswer).includesSexId,
      responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
    },
    {
      id: '16-nonet-cc-1',
      AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
        AAQuestionAnswer(aaAnswer).includesSexId,
      responses: [
        ...CHILD_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'C', answers: [YES] },
      ],
    },
    {
      id: '16-nonet-cc-2',
      AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
        AAQuestionAnswer(aaAnswer).includesSexId,
      responses: [
        ...CHILD_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'D', answers: [YES] },
      ],
    },
    {
      id: '16-nonet-cnc-1',
      NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
        NCQuestionAnswer(naAnswer).includesSexId,
      responses: [
        ...CHILD_NON_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'C', answers: [YES, NO] },
        { question: 'D', answers: [YES, UNANSWERED] },
      ],
    },
  ],
};
