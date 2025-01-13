import { YES, yesNoChoicesEn } from '@/constants';

export const NEITHER = '2';
export const NAME_CHANGE = '0';

export const adultCitizen = [
  {
    id: 'G',
    question: {
      title: `Do you have an unexpired driver's license or non-driver's state-issued ID?`,
      choices: [
        {
          id: `0`,
          title: `Driver's license`,
          value: '0',
        },
        {
          id: `1`,
          title: `Non-driver's state-issued ID`,
          value: '1',
        },
        {
          id: `2`,
          title: `No`,
          value: '2',
        },
      ],
      progressiveRevealTriggers: ['0', '1'],
      progressiveRevealLabel: `What state issued your ID?`,
    },
  },
  {
    id: 'CQ',
    subTitle: 'Select all that apply:',
    question: {
      title: `What changes do you need on your Social Security card or record?`,
      choices: [
        {
          id: `0`,
          title: `Name`,
          value: '0',
        },
        {
          id: `5`,
          title: `Citizenship`,
          value: '5',
        },
        {
          id: `1`,
          title: `Date of birth`,
          value: '1',
        },
        {
          id: `2`,
          title: `Place of birth`,
          value: '2',
        },
        {
          id: `3`,
          title: `Sex identification`,
          value: '3',
        },
        {
          id: `4`,
          title: `Parent's name`,
          value: '4',
        },
        {
          id: `none_of_the_above`,
          title: `No changes needed`,
          value: 'none_of_the_above',
        },
      ],
    },
  },
  {
    id: 'L',
    question: {
      title: `Are you changing your name because you got married?`,
      choices: yesNoChoicesEn,
      progressiveRevealTriggers: [YES],
      progressiveRevealLabel: `What state issued your marriage certificate?`,
    },
  },
];
