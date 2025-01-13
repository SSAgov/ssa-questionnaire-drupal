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
  // {
  //   id: '5-ossnap-cnc-1',
  //   NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
  //     NCQuestionAnswer(naAnswer).noneOrOnlyName,
  //   responses: [
  //     ...CHILD_NON_CITIZEN,
  //     { question: 'KA', answers: [AGE_6_to_17] },
  //     { question: 'II', answers: [UNANSWERED, YES] },
  //     { question: 'C', answers: [YES] },
  //   ],
  // },
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
  // {
  //   id: '5-nonet-cnc-1',
  //   NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
  //     NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
  //   responses: [
  //     ...CHILD_NON_CITIZEN,
  //     { question: 'KA', answers: [AGE_6_to_17] },
  //     { question: 'II', answers: [UNANSWERED, YES] },
  //     { question: 'C', answers: [YES] },
  //   ],
  // },
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

export const accordion_05 = {
  id: '05',
  requirements: [...ossnapReqs, ...nonetReqs, ...fbuReqs],
};
