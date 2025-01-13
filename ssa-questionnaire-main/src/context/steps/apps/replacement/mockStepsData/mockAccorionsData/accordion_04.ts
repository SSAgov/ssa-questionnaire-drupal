import {
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { AGE_0_to_5 } from '../../constants';
import { AAQuestionAnswer, NCQuestionAnswer } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '4-ossnap-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '4-ossnap-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const nonetReqs = [
  {
    id: '4-nonet-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '4-nonet-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const fbuReqs = [
  {
    id: '4-fbu-cc-1',
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
  {
    id: '4-fbu-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_0_to_5] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
];

// const notprpapReqs = [
//   {
//     responses: [
//       ...CHILD_CITIZEN,
//       { question: 'KA', answers: [AGE_0_to_5] },
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
//   {
//     responses: [
//       ...CHILD_NON_CITIZEN,
//       { question: 'KA', answers: [AGE_0_to_5] },
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
// ];

export const accordion_04: IAccordion = {
  id: '04',
  title: `Child's ID`,
  body: `
      <p>
        A current, original or certified document that shows the child's name plus a photo or date of birth.
      </p>
      <br/>
      <p>
        Documents we accept include:  
      </p>
      <ul>
        <li>U.S. state-issued nondriver's ID</li>
        <li>U.S. passport</li>
        <li>Medical record signed or stamped by the issuing facility. Bills or other medical documents are not accepted.</li>
        <li>Immunization record with the last shot dated less than 4 years ago</li>
        <li>I-551 Permanent Resident Card or stamps</li>
        <li>I-94 Arrival/Departure Record along with unexpired foreign passport</li> 
        <li>I-766 Employment Authorization Document (work permit)</li> 
        <li>I-872 American Indian Card</li>
        <li>Health or Medicaid insurance card</li>
        <li>Record from a pre-school or childcare facility from the current or prior year</li>
        <li>Adoption decree</li>
      </ul>
      `,
  requirements: [...ossnapReqs, ...nonetReqs, ...fbuReqs],
};
