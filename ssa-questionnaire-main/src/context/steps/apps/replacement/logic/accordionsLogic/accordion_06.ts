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

export const accordion_06 = {
  id: '06',
  requirements: [...ossnapReqs, ...nonetReqs],
};
