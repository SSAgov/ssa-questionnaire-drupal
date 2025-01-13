import { yesNoChoicesEn } from '@/constants';
import { childCitizen } from './citizen';
import { childNonCitizen } from './non-citizen';

export const child = [
  {
    id: 'KA',
    question: {
      title: `How old is the child?`,
      choices: [
        {
          id: `0`,
          title: `0 - 5 years old`,
          value: '0',
        },
        {
          id: `1`,
          title: `6 - 17 years old`,
          value: '1',
        },
      ],
    },
  },
  {
    id: 'HH',
    question: {
      title: `Are you the parent or adoptive parent?`,
      choices: yesNoChoicesEn,
    },
  },
  {
    id: 'H2',
    subTitle: `Only custodial parents or legal guardians can get a replacement card for a child.`,
    question: {
      title: `Do you have custody of the child?`,
      choices: yesNoChoicesEn,
    },
  },
  {
    id: 'II',
    subTitle: `You'll need to provide an original or certified copy of the court order.`,
    question: {
      title: `Are you the child's legal guardian?`,
      choices: yesNoChoicesEn,
    },
  },
  {
    id: 'I',
    subTitle: `New citizens must wait 10 days after becoming a citizen to request a replacement card.`,
    question: {
      title: `Is the child a U.S. citizen?`,
      choices: yesNoChoicesEn,
    },
  },
  ...childCitizen,
  ...childNonCitizen,
];
