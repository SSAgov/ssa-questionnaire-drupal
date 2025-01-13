import {
  ADULT_NON_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';

export const accordion_15: IAccordion = {
  id: '15',
  title: 'U.S. Immigration status',
  body: `
      <ul>
        <li>I-551 Permanent Resident Immigrant Visa (Green Card)</li>
        <li>I-94 Arrival/Departure Record along with unexpired foreign passport</li>
        <li>Admission stamp in an unexpired foreign passport</li>
        <li>I-766 Employment Authorization Document (work permit)</li>
      </ul>
      <p>
        In addition to one of these documents, J-1 or J-2 visa holders must provide their DS-2019.
      </p>
      <p>
        You must present original, unexpired documents or copies certified by the agency that issued them. We cannot accept photocopies, photographs, or notarized copies.
      </p>
      `,
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
