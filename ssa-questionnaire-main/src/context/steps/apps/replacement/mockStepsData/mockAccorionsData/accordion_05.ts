import {
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  NO,
  UNANSWERED,
  YES,
} from '@/constants';
import { IAccordion } from '@/interfaces';
import { AGE_6_to_17 } from '../../constants';
import { AAQuestionAnswer, NCQuestionAnswer } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '5-ossnap-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '5-ossnap-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const nonetReqs = [
  {
    id: '5-nonet-cc-1',
    AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
      AAQuestionAnswer(aaAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '5-nonet-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const fbuReqs = [
  {
    id: '5-fbu-cc-1',
    responses: [
      ...CHILD_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [NO] },
      { question: 'D', answers: [NO] },
    ],
  },
  {
    id: '5-fbu-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'KA', answers: [AGE_6_to_17] },
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
//       { question: 'KA', answers: [AGE_6_to_17] },
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
//   {
//     responses: [
//       ...CHILD_NON_CITIZEN,
//       { question: 'KA', answers: [AGE_6_to_17] },
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
// ];

export const accordion_05: IAccordion = {
  id: '05',
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
        <li>U.S. state-issued driver's or nondriver's ID card</li> 
        <li>U.S. military dependent ID card</li>
        <li>U.S. passport</li>
        <li>Medical record signed or stamped by the issuing facility. Bills or other medical documents are not accepted.</li>
        <li>Life insurance policy</li>
        <li>I-551 Permanent Resident Card or stamps</li>
        <li>I-94 Arrival/Departure Record along with unexpired foreign passport</li> 
        <li>I-766 Employment Authorization Document (work permit)</li> 
        <li>I-872 American Indian Card</li>
        <li>Health or Medicaid insurance card</li>
        <li>Adoption decree</li>
        <li>School ID card, record, transcript, or report card from current or previous year</li>
      </ul>
      `,
  requirements: [...ossnapReqs, ...nonetReqs, ...fbuReqs],
};
