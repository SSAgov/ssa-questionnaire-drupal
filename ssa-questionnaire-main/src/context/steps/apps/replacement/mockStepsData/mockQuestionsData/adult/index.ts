import { ADULT, NO, YES, yesNoChoices } from '@/constants';
import { EQuestionType, IStepsContentItem } from '@/interfaces';
import { adultCitizen } from './citizen';
import { adultNonCitizen } from './non-citizen';

export const adult: IStepsContentItem[] = [
  {
    type: 'question',
    id: 'A',
    questionType: EQuestionType.multiple_choice,
    question: {
      title: `Are you a U.S. citizen?`,
      choices: [
        {
          id: `0`,
          title: `Yes`,
          value: `0`,
        },
        {
          id: `1`,
          title: `No`,
          value: `1`,
        },
      ],
    },
    subTitle: `New citizens: After you become a citizen, wait 10 days until you request a replacement card.`,
    entryRequirements: [
      {
        responses: [ADULT],
      },
    ],
  },
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
  ...adultCitizen,
  ...adultNonCitizen,
];
