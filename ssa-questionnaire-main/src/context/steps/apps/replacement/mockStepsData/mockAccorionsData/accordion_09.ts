import {
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { DRIVERS_LICENSE, NEITHER, STATE_ID } from '../../constants';
import {
  AAQuestionAnswer,
  changeQuestionAnswer,
  isStateIdEligible,
  NCQuestionAnswer,
  NDAnswerBreakdown,
} from '../../replacementUtils';

export const accordion_09: IAccordion = {
  id: '09',
  title: 'Place of birth',
  body: `
      <ul>
        <li>Birth certificate</li>
        <li>U.S. passport or passport card</li>
        <li>Federal or state census record</li> 
        <li>Foreign birth certificate</li>
        <li>Religious record showing age or date of birth</li> 
      </ul>
      <br/>
      <p>
        You must present original documents or copies certified by the agency that issued them. We cannot accept photocopies, photographs, or notarized copies.
      </p>
      `,
  requirements: [
    {
      id: '9-nonet-ac-1',
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesPlaceOfBirth,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'D', answers: [YES] },
        { question: 'G', answers: [NEITHER] },
      ],
    },
    {
      id: '9-nonet-ac-2',
      determineStateIdEligibility: (state: string, docType: string) =>
        !isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesPlaceOfBirth,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
    {
      id: '9-nonet-ac-3',
      determineStateIdEligibility: (state: string, docType: string) =>
        isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesPlaceOfBirth,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
    {
      id: '9-nonet-anc-1',
      NDAnswerBreakdown: (ndAnswer: string[]) =>
        NDAnswerBreakdown(ndAnswer).includesPlaceOfBirth,
      responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
    },
    {
      id: '9-nonet-anc-2',
      NDAnswerBreakdown: (ndAnswer: string[]) =>
        NDAnswerBreakdown(ndAnswer).includesPlaceOfBirth,
      responses: [...ADULT_NON_CITIZEN, { question: 'D', answers: [YES] }],
    },
    {
      id: '9-nonet-cc-1',
      AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
        AAQuestionAnswer(aaAnswer).includesPlaceOfBirth,
      responses: [
        ...CHILD_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'C', answers: [YES] },
      ],
    },
    {
      id: '9-nonet-cc-2',
      AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
        AAQuestionAnswer(aaAnswer).includesPlaceOfBirth,
      responses: [
        ...CHILD_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'D', answers: [YES] },
      ],
    },
    {
      id: '9-nonet-cnc-1',
      NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
        NCQuestionAnswer(naAnswer).includesPlaceOfBirth,
      responses: [
        ...CHILD_NON_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'C', answers: [YES] },
      ],
    },
    {
      id: '9-nonet-cnc-2',
      NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
        NCQuestionAnswer(naAnswer).includesPlaceOfBirth,
      responses: [
        ...CHILD_NON_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'D', answers: [YES] },
      ],
    },
  ],
};
