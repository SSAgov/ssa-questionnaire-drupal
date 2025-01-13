import {
  ADULT_NON_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';

export const accordion_15 = {
  id: '15',
  requirements: [
    {
      id: '15-fbu-anc-1',
      responses: [
        ...ADULT_NON_CITIZEN,
        { question: 'C', answers: [NO] },
        { question: 'D', answers: [NO] },
      ],
    },
    {
      id: '15-fbu-cnc-1',
      responses: [
        ...CHILD_NON_CITIZEN,
        { question: 'II', answers: [UNANSWERED, YES] },
        { question: 'C', answers: [NO] },
        { question: 'D', answers: [NO] },
      ],
    },
  ],
};
