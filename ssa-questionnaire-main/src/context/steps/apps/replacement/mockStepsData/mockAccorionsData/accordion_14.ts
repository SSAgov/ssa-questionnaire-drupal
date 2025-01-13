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

export const accordion_14: IAccordion = {
  id: '14',
  title: 'Immigration status',
  body: `
      <ul>
        <li>I-551 Permanent Resident Immigrant Visa (Green Card)</li>
        <li>I-94 Arrival/Departure Record along with unexpired foreign passport</li>
        <li>Admission stamp in an unexpired foreign passport</li>
        <li>I-766 Employment Authorization Document (work permit)</li>
      </ul>
      <p>
        You must present original documents or copies certified by the agency that issued them. We cannot accept photocopies, photographs, or notarized copies. You may also use these documents as proof of your identity.
      </p>
      `,
  requirements: [...ossnapReqs, ...nonetReqs],
};
