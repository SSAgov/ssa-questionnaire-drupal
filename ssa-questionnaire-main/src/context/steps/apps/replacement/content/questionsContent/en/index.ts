import { yesNoChoices } from '@/constants';
import { adult } from './adult';
import { child } from './child';

export const questionsContentEn = [
  {
    id: 'E',
    question: {
      title: `Who is the replacement card for?`,
      choices: [
        {
          id: `0`,
          title: `Adult (age 18 and older)`,
          value: '0',
        },
        {
          id: `1`,
          title: `Child (age 17 and younger)`,
          value: '1',
        },
      ],
    },
  },
  {
    id: 'C',
    question: {
      title: `Do you have a U.S. mailing address?`,
      choices: yesNoChoices,
    },
    subTitle: `This includes PO Boxes, APOs, FPOs, and DPOs.`,
  },
  {
    id: 'D',
    question: {
      title: `Do you live in the U.S.?`,
      choices: yesNoChoices,
    },
    subTitle: `This includes U.S. territories and commonwealths.`,
  },
  ...adult,
  ...child,
];
