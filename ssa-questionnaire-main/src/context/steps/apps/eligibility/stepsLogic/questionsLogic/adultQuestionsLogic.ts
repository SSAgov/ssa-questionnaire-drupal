import { YES, NO, IDK } from '@/constants';
import { NINETEEN_ONE, EIGHTEEN, SIXTY, SIXTY_TWO } from '@/constants';
import { EQuestionType, IQuestionLogicItem, IResponse } from '@/interfaces';
import { isFraCalculator } from './calculator';

const ADULT = '0';
const CHILD = '1';

const OVER_18: IResponse = { question: 'A', answers: [ADULT] };
const UNDER_18: IResponse = { question: 'A', answers: [CHILD] };

export const adultQuestionsLogic: IQuestionLogicItem[] = [
  // Enter your birthday.
  {
    id: 'B',
    questionType: EQuestionType.date,
    entryRequirements: [
      {
        responses: [OVER_18],
      },
    ],
  },
  // Is in high school
  {
    id: 'C',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [OVER_18],
        minAge: EIGHTEEN,
        maxAge: NINETEEN_ONE,
      },
    ],
  },
  // D - Has has a job in the US
  {
    id: 'D',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Is 18 or older
        responses: [OVER_18],
      },
    ],
  },
  // E - Currently working
  {
    id: 'E',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Has worked at all
        responses: [OVER_18, { question: 'D', answers: [YES] }],
      },
    ],
  },
  // F - Worked 10 years or more
  {
    id: 'F',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        minAge: SIXTY_TWO,
        // Has worked at all
        responses: [OVER_18, { question: 'D', answers: [YES] }],
      },
    ],
  },
  // G - Has disability
  {
    id: 'G',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Adults age 18 and over, but below FRA + 12 months
        ageCalc: (birthday) => !isFraCalculator(birthday, 12),
        minAge: EIGHTEEN,
        responses: [OVER_18, { question: 'D', answers: [YES, NO] }],
      },
    ],
  },
  // H - Disability will last > 1 year or be terminal
  {
    id: 'H',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Is disabled and younger than FRA+ 12
        responses: [OVER_18, { question: 'G', answers: [YES] }],
      },
    ],
  },
  // Disability started before/after 22
  {
    id: 'I',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Has disability
        minAge: {
          months: 0,
          years: 22,
        },
        responses: [OVER_18, { question: 'H', answers: [YES] }],
      },
    ],
  },

  // Receives state/fed assistance
  {
    id: 'J',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Under 65 and disabled
        maxAge: { months: 12, years: 64 },
        responses: [OVER_18, { question: 'H', answers: [YES] }],
      },
      {
        // Over 65
        minAge: { months: 0, years: 65 },
        responses: [OVER_18],
      },
    ],
  },
  // K - Hard to pay bills
  {
    id: 'K',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Is an adult
        responses: [OVER_18, { question: 'J', answers: [YES, NO] }],
      },
    ],
  },
  // L - Married
  {
    id: 'L',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Adult age 18 and over
        responses: [OVER_18],
      },
    ],
  },
  // M - Spouse gets SS benefits
  {
    id: 'M',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Married (includes separation)
        responses: [OVER_18, { question: 'L', answers: [YES, '1'] }],
      },
    ],
  },
  // N - Married before 60
  {
    id: 'N',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Spouse does not receive benefits
        minAge: SIXTY,
        responses: [OVER_18, { question: 'M', answers: [NO] }],
      },
    ],
  },
  // O - Divorced
  {
    id: 'O',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Not currently married but was in the past
        responses: [OVER_18, { question: 'L', answers: ['2'] }],
      },
    ],
  },
  // P - Married >= 10 years before divorce
  {
    id: 'P',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Divorced
        responses: [OVER_18, { question: 'O', answers: [YES] }],
      },
    ],
  },
  // Q - Former spouse worked
  {
    id: 'Q',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Married 10 years or more before divorce
        responses: [OVER_18, { question: 'P', answers: [YES] }],
      },
    ],
  },
  // R - Widowed
  {
    id: 'R',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Not married before 60
        responses: [OVER_18, { question: 'N', answers: [NO] }],
      },
      {
        // Former spouse worked
        responses: [OVER_18, { question: 'Q', answers: [NO, IDK] }],
      },
      {
        // Not divorced
        responses: [OVER_18, { question: 'O', answers: [NO] }],
      },
      {
        // Not married for 10 years before divorce
        responses: [OVER_18, { question: 'P', answers: [NO] }],
      },
      {
        // Former spouse worked or may have worked
        maxAge: { months: 12, years: 61 },
        responses: [OVER_18, { question: 'Q', answers: [YES] }],
      },
    ],
  },
  // S - Deceased spouse worked
  {
    id: 'S',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Widowed
        responses: [OVER_18, { question: 'R', answers: [YES] }],
      },
    ],
  },
  // T
  {
    id: 'T',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Under 62 and spouse gets benefits
        maxAge: { months: 12, years: 61 },
        responses: [OVER_18, { question: 'M', answers: [YES] }],
      },
      {
        // Under 59 and deceases spouse worked
        maxAge: { months: 12, years: 59 },
        responses: [OVER_18, { question: 'S', answers: [YES] }],
      },
    ],
  },
  // U
  {
    id: 'U',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Attends high school
        minAge: EIGHTEEN,
        maxAge: NINETEEN_ONE,
        responses: [OVER_18, { question: 'C', answers: [YES] }],
      },
      {
        // Disabled, 18-19 and does not attend high school
        minAge: EIGHTEEN,
        maxAge: NINETEEN_ONE,
        responses: [
          OVER_18,
          // Does not attend high school
          { question: 'C', answers: [NO] },
          // Is disabled
          { question: 'H', answers: [YES] },
        ],
      },
      {
        // Disabled and between 19-22
        minAge: NINETEEN_ONE,
        maxAge: { months: 0, years: 22 },
        responses: [OVER_18, { question: 'H', answers: [YES] }],
      },
      {
        // Disabled, 22 or older, but disabled before 22
        minAge: { months: 0, years: 22 },
        responses: [
          OVER_18,
          { question: 'H', answers: [YES] },
          { question: 'I', answers: ['0'] },
        ],
      },
    ],
  },
  // V - Has surviving parents
  {
    id: 'V',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Has lost a parent
        responses: [OVER_18, { question: 'U', answers: [YES] }],
      },
    ],
  },
  // W - Do your parent(s) get Social Security benefits
  {
    id: 'W',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Has lost a parent but has surviving parents
        responses: [OVER_18, { question: 'V', answers: [YES] }],
      },
      {
        // Has not lost a parent
        responses: [OVER_18, { question: 'U', answers: [NO] }],
      },
    ],
  },
  // X - Child has disability
  {
    id: 'X',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [UNDER_18],
      },
    ],
  },
  // Y - Child has disability
  {
    id: 'Y',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Child has disability
        responses: [UNDER_18, { question: 'X', answers: [YES] }],
      },
    ],
  },
  // Z - Child lost a parent
  {
    id: 'Z',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Child is not disabled
        responses: [UNDER_18, { question: 'X', answers: [NO] }],
      },
      {
        // Child may be disabled
        responses: [UNDER_18, { question: 'Y', answers: [YES, NO] }],
      },
    ],
  },
  // AA - Child has surviving parent
  {
    id: 'AA',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Child has lost a parent
        responses: [UNDER_18, { question: 'Z', answers: [YES] }],
      },
    ],
  },
  // BB - Surviving parents get SS
  {
    id: 'BB',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Has not lost a parent
        responses: [UNDER_18, { question: 'Z', answers: [NO] }],
      },
    ],
  },
  // CC - Are parents employed
  {
    id: 'CC',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        // Child is disabled and has not lost a parent
        responses: [
          UNDER_18,
          { question: 'X', answers: [YES] },
          { question: 'Y', answers: [YES] },
          { question: 'Z', answers: [NO] }, // has not lost a parent
        ],
      },
      {
        // Child is disabled and has surving parent
        responses: [
          UNDER_18,
          { question: 'X', answers: [YES] },
          { question: 'Y', answers: [YES] },
          { question: 'AA', answers: [YES] }, // has a surving parent
        ],
      },
    ],
  },
  // DD - Are parents employed
  {
    id: 'DD',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [UNDER_18, { question: 'CC', answers: [YES, NO] }],
      },
    ],
  },
  // EE
  {
    id: 'EE',
    questionType: EQuestionType.multiple_choice,
    entryRequirements: [
      {
        responses: [UNDER_18, { question: 'DD', answers: [YES, NO] }],
      },
    ],
  },
];
