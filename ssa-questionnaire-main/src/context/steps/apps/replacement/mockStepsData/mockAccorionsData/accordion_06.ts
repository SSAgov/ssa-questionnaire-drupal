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
    id: '6-ossnap-cc-1',
    // AAQuestionAnswerBreakdown: (aaAnswer: string[]) => // any selection
    //   AAQuestionAnswer(aaAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_CITIZEN,
      // { question: 'H2', answers: [NO, UNANSWERED] }, // Not needed. II=Yes implies H2=No
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '6-ossnap-cnc-1',
    // NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
    //   NCQuestionAnswer(naAnswer).noneOrOnlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      // { question: 'H2', answers: [NO, UNANSWERED] }, // Not needed. II=Yes implies H2=No
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const nonetReqs = [
  {
    id: '6-nonet-cc-1',
    // AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
    //   AAQuestionAnswer(aaAnswer).anyChange,
    responses: [
      ...CHILD_CITIZEN,
      { question: 'H2', answers: [NO, UNANSWERED] },
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '6-nonet-cnc-1',
    // NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
    //   NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

// const notprpapReqs = [
//   {
//     responses: [
//       ...CHILD_CITIZEN,
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
//   {
//     responses: [
//       ...CHILD_NON_CITIZEN,
//       { question: 'H2', answers: [NO] },
//       { question: 'II', answers: [NO] },
//     ],
//   },
// ];

export const accordion_06: IAccordion = {
  id: '06',
  title: `Grounds for your request`,
  body: `
      <p>
        You may be able to apply for this child's card. We can generally accept an application from:  
      </p>
      <ul>
        <li>Court-appointed legal guardians</li>
        <li>Parents (natural, adoptive, or step) with custody</li> 
        <li>Administrators of the child's estate</li> 
        <li>Family members with custody of the child</li> 
        <li>State agencies or state-licensed agencies if they have legal custody of the child</li>
      </ul>
      <br/>
      <p>
        You must present original, unexpired documents or copies certified by the agency that issued them. We cannot accept photocopies, photographs, or notarized copies.
      </p>
      `,
  requirements: [...ossnapReqs, ...nonetReqs],
};
