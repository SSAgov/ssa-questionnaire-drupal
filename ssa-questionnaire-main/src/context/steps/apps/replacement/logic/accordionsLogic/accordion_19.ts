import { CHILD_NON_CITIZEN, UNANSWERED, YES } from '@/constants';
import { NCQuestionAnswer } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '1920-ossnap-cnc-1',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).onlyName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '1920-ossnap-cnc-2',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).noChanges,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

const nonetReqs = [
  {
    id: '1920-nonet-cnc-1',
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'D', answers: [YES] },
    ],
  },
  {
    id: '1920-nonet-cnc-2',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).includesName,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
  {
    id: '1920-nonet-cnc-3',
    NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
      NCQuestionAnswer(naAnswer).oneOfPlaceDobParentSexid,
    responses: [
      ...CHILD_NON_CITIZEN,
      { question: 'II', answers: [UNANSWERED, YES] },
      { question: 'C', answers: [YES] },
    ],
  },
];

export const accordion_19 = {
  id: '19',
  requirements: [...nonetReqs, ...ossnapReqs],
};

export const accordion19Reqs = [...nonetReqs, ...ossnapReqs];