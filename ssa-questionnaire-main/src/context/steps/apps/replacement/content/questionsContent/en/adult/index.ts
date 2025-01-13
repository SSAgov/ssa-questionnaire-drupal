import { yesNoChoicesEn } from '@/constants';
import { adultCitizen } from './citizen';
import { adultNonCitizen } from './non-citizen';

export const adult = [
  {
    id: 'A',
    question: {
      title: `Are you a U.S. citizen?`,
      choices: yesNoChoicesEn,
    },
    subTitle: `New citizens must wait 10 days after becoming a citizen to request a replacement card.`,
  },
  ...adultCitizen,
  ...adultNonCitizen,
];
