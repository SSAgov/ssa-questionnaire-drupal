import { ADULT_NON_CITIZEN, YES } from '@/constants';
import { NDAnswerBreakdown } from '../../replacementUtils';

const ossnapReqs = [
  {
    id: '18-ossnap-anc-1',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).noChanges,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
  {
    id: '18-ossnap-anc-2',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).onlyName,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
];

const nonetReqs = [
  {
    id: '18-nonet-anc-1',
    responses: [...ADULT_NON_CITIZEN, { question: 'D', answers: [YES] }],
  },
  {
    id: '18-nonet-anc-2',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).includesName,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
  {
    id: '18-nonet-anc-3',
    NDAnswerBreakdown: (ndAnswer: string[]) =>
      NDAnswerBreakdown(ndAnswer).oneOfPlaceDobParentSexid,
    responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
  },
];

export const accordion_18 = {
  id: '18',
  requirements: [...ossnapReqs, ...nonetReqs],
};
