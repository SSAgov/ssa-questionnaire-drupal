import {
  ADULT_NON_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { ADULT_F_1_VISA, CHILD_F_1_VISA } from '../../constants';
import { NCQuestionAnswer } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '13-ossnap-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'NB', answers: [ADULT_F_1_VISA] },
    ],
  },
  {
    id: '13-ossnap-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
      { question: 'NH', answers: [CHILD_F_1_VISA] },
    ],
  },
];

const nonetReqs = [
  {
    id: '13-nonet-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'D', answers: [YES, UNANSWERED] },
      { question: 'NB', answers: [ADULT_F_1_VISA] },
    ],
  },
  {
    id: '13-nonet-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES, UNANSWERED] },
      { question: 'NH', answers: [CHILD_F_1_VISA] },
    ],
  },
];

export const accordion_13 = {
  id: '13',
  requirements: [...ossnapReqs, ...nonetReqs],
};
