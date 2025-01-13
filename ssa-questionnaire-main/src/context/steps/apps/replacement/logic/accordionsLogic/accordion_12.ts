import {
  ADULT_NON_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { ADULT_J_1_VISA, CHILD_J_1_VISA } from '../../constants';
import { NCQuestionAnswer } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '12-ossnap-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'NB', answers: [ADULT_J_1_VISA] },
    ],
  },
  {
    id: '12-ossnap-cnc-1',
    // NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
    //   NCQuestionAnswer(naAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
      { question: 'NH', answers: [CHILD_J_1_VISA] },
    ],
  },
];

const nonetReqs = [
  {
    id: '12-nonet-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'D', answers: [YES] },
      { question: 'NB', answers: [ADULT_J_1_VISA] },
    ],
  },
  {
    id: '12-nonet-cnc-1',
    // NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
    //   NCQuestionAnswer(naAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      // { question: 'C', answers: [NO, UNANSWERED] },
      { question: 'D', answers: [YES, UNANSWERED] },
      { question: 'NH', answers: [CHILD_J_1_VISA] },
    ],
  },
];

export const accordion_12 = {
  id: '12',
  requirements: [...ossnapReqs, ...nonetReqs],
};
