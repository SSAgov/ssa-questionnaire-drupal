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

export const accordion_13: IAccordion = {
  id: '13',
  title: 'Immigration status',
  body: `
      <p>
        Students must show a combination of documents that proves both residency and work eligibility.
      </p>
      <br/>
      <p>
        <strong>Residency</strong>
      </p>
      <ul>
        <li>I-94 Arrival/Departure Record along with unexpired foreign passport</li> 
        <li>Admission stamp in an unexpired foreign passport</li>
      </ul>
      <br/>
      <p>
        <strong>Work eligibility</strong>
      </p>
      <ul>
        <li>I-766 Employment Authorization Document (work permit)</li> 
        <li>I-20 Certificate of Eligibility for Nonimmigrant Student Status</li>
      </ul>
      <br/>
      <p>
        <strong>F-1 students</strong>
      </p>
      <p>
        If you are eligible to work on campus, you must provide a letter from your designated school official that:  
      </p>
      <ul>
        <li>Identifies you</li>
        <li>Confirms your current school status</li> 
        <li>Identifies your employer and the type of work you are, or will be, doing</li>
      </ul>
      `,
  requirements: [...ossnapReqs, ...nonetReqs],
};
