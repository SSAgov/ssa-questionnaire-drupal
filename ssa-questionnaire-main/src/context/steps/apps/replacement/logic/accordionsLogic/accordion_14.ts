import {
  ADULT_NON_CITIZEN,
  CHILD_NON_CITIZEN,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { ADULT_I_551, CHILD_I_551 } from '../../constants';

const ossnapReqs = [
  {
    id: '14-ossnap-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'C', answers: [YES] },
      { question: 'NB', answers: [ADULT_I_551] },
    ],
  },
  {
    id: '14-ossnap-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
      { question: 'NH', answers: [CHILD_I_551] },
    ],
  },
];

const nonetReqs = [
  {
    id: '14-nonet-anc-1',
    responses: [
      ...ADULT_NON_CITIZEN,
      { question: 'D', answers: [YES, UNANSWERED] },
      { question: 'NB', answers: [ADULT_I_551] },
    ],
  },
  {
    id: '14-nonet-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES, UNANSWERED] },
      { question: 'NH', answers: [CHILD_I_551] },
    ],
  },
];

export const accordion_14 = {
  id: '14',
  requirements: [...ossnapReqs, ...nonetReqs],
};
