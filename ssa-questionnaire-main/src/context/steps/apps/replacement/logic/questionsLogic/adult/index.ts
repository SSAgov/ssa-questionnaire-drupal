import { ADULT } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';
import { adultCitizen } from './citizen';
import { adultNonCitizen } from './non-citizen';

export const adult: IStepsContentItem[] = [
  // title: `Are you a U.S. citizen?`
  {
    type: 'question',
    id: 'A',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [ADULT],
      },
    ],
  },
  ...adultCitizen,
  ...adultNonCitizen,
];

// {
//   type: 'question',
//   id: 'C',
//   questionType: EQuestionType.multiple_choice,
//   question: {
//     title: `Do you have a permanent U.S. mailing address?`,
//     choices: yesNoChoices,
//   },
//   subTitle: `This includes APO, FPO, DPO, and PO Boxes.`,
//   entryRequirements: [
//     {
//       responses: [ADULT, { question: 'A', answers: [YES, NO] }],
//     },
//   ],
// },
// {
//   type: 'question',
//   id: 'D',
//   questionType: EQuestionType.multiple_choice,
//   question: {
//     title: `Do you live in the U.S.?`,
//     choices: yesNoChoices,
//   },
//   subTitle: `This includes U.S. commonwealths and territories.`,
//   entryRequirements: [
//     {
//       responses: [ADULT, { question: 'C', answers: [NO] }],
//     },
//   ],
// },
