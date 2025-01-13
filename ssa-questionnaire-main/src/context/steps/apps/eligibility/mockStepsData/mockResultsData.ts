import {
  YES,
  NO,
  IDK,
  SIXTY,
  SIXTY_TWO,
  SIXTY_FIVE,
  EIGHTEEN,
  NINETEEN_ONE,
} from '@/constants';
import { isFraCalculator } from '../stepsLogic/questionsLogic/calculator';
import { ECategory, TT } from '@/interfaces';
import { EProcessor, IResult } from '@/interfaces/IResults';
import { YES_BUT_SEPARATED } from '../constants';

export function mockResultsData(t: TT): IResult[] {
  const exp65SSI = t('older_65');
  // "You meet the age qualification because you're 65 or older. And, you may need help paying for essentials like food, clothing, and a home.";

  const expAdultSSI = t('help_paying_for_essentials');
  // 'You may need help paying for essentials like food, clothing, and a home. You also have a condition and expect it to affect your ability to work for a year or more.';
  const expChildSSI = t('child_has_condition');
  // "The child has a condition and you expect it to affect their daily activities for a year or more. And, the child's parent(s) may need help paying for essentials like food, clothing, and a home.";

  return [
    /*=== RESULTS ===*/
    // Retirement
    {
      id: 'r1',
      category: ECategory.retirement,
      title: '',
      label: '',
      requirements: [
        {
          explanation: t('results_age_qual'),
          // "You've worked for ten years or more and meet the age qualification because you're 62 or older.",
          minAge: SIXTY_TWO,
          responses: [
            { question: 'D', answers: [YES] },
            { question: 'F', answers: [YES] },
          ],
        },
      ],
    },
    // SSDI
    {
      id: 'r2',
      category: ECategory.disability,
      title: t('ssdi'), //  'Social Security Disability Insurance',
      label: '',
      requirements: [
        {
          explanation: t('expect_condition'),
          // 'You expect a condition to affect your ability to work for a year or more or be terminal.',
          ageCalc: (birthday) => !isFraCalculator(birthday, 12),
          minAge: EIGHTEEN,
          responses: [
            { question: 'D', answers: [YES] },
            { question: 'H', answers: [YES] },
          ],
        },
      ],
    },
    // SSDI (Disability Supplement)
    {
      id: 'r3',
      category: ECategory.supplemental_security_income,
      title: t('disability_supplement'), // 'Disability supplement',
      label: '',
      requirements: [
        {
          explanation: expAdultSSI,
          maxAge: { months: 12, years: 64 },
          responses: [
            { question: 'H', answers: [YES] },
            { question: 'K', answers: [YES] },
          ],
        },
        {
          explanation: expAdultSSI,
          maxAge: { months: 12, years: 64 },
          responses: [
            { question: 'H', answers: [YES] },
            { question: 'J', answers: [YES] },
          ],
        },
        {
          explanation: expAdultSSI,
          minAge: EIGHTEEN,
          responses: [
            { question: 'G', answers: [YES] },
            { question: 'V', answers: [NO, '2'] },
          ],
        },
        {
          explanation: expChildSSI, // 12
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'Z', answers: [YES] },
            { question: 'AA', answers: [NO] },
          ],
        },
        {
          explanation: expChildSSI, // 5
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [YES] },
            { question: 'DD', answers: [YES] },
            { question: 'EE', answers: [YES] },
          ],
        },
        {
          explanation: expChildSSI, // 6
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [NO] },
            { question: 'DD', answers: [NO] },
            { question: 'EE', answers: [YES] },
          ],
        },
        {
          explanation: expChildSSI, // 7
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [YES] },
            { question: 'DD', answers: [YES] },
            { question: 'EE', answers: [NO] },
          ],
        },
        {
          explanation: expChildSSI, // 9
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [YES] },
            { question: 'DD', answers: [NO] },
            { question: 'EE', answers: [YES] },
          ],
        },
        {
          explanation: expChildSSI, // 8
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [NO] },
            { question: 'DD', answers: [YES] },
            { question: 'EE', answers: [YES] },
          ],
        },
        {
          explanation: expChildSSI, // 10
          responses: [
            { question: 'Y', answers: [YES] },
            { question: 'CC', answers: [NO] },
            { question: 'DD', answers: [YES] },
            { question: 'EE', answers: [NO] },
          ],
        },
      ],
    },
    // SSDI (Age 65+)
    {
      id: 'r4',
      category: ECategory.supplemental_security_income,
      title: t('suplement_65'), // 'Age 65+ supplement',
      label: '',
      requirements: [
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [YES, NO] },
            { question: 'J', answers: [YES] },
            { question: 'K', answers: [YES, NO] },
          ],
        },
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [NO] },
            { question: 'J', answers: [NO] },
            { question: 'K', answers: [YES] },
          ],
        },
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [YES] },
            { question: 'J', answers: [YES] },
            { question: 'K', answers: [NO] },
          ],
        },
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [NO] },
            { question: 'J', answers: [YES] },
            { question: 'K', answers: [YES] },
          ],
        },
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [NO] },
            { question: 'J', answers: [YES] },
            { question: 'K', answers: [NO] },
          ],
        },
        {
          explanation: exp65SSI,
          minAge: SIXTY_FIVE,
          responses: [
            { question: 'D', answers: [YES] },
            { question: 'J', answers: [NO] },
            { question: 'K', answers: [YES] },
          ],
        },
      ],
    },
    // Spouce
    {
      id: 'r5',
      category: ECategory.family,
      title: t('spouse'), // 'Spouse',
      label: '',
      requirements: [
        {
          explanation: t('spouse_gets_benefits'),
          // "Your spouse gets Social Security benefits or plans to apply for them soon. And, you meet the age qualification because you're 62 or older.",
          minAge: {
            months: 0,
            years: 62,
          },
          responses: [
            { question: 'L', answers: ['1'] }, // Married but separated
            { question: 'M', answers: [YES] },
          ],
        },
      ],
    },
    // Spouse with child
    {
      id: 'r6',
      category: ECategory.family,
      title: t('spouse_with_child_in_care'), // 'Spouse with Child in Care',
      label: '',
      requirements: [
        {
          explanation: t('spouse_and_kids_under_16'),
          // 'Your spouse gets Social Security benefits or plans to apply for them soon. And, you have kids who are disabled or under 16.',
          maxAge: { months: 12, years: 61 },
          minAge: EIGHTEEN,
          responses: [
            { question: 'L', answers: [YES, YES_BUT_SEPARATED] }, // Married but separated
            { question: 'M', answers: [YES] }, // Spouse has benefits
            { question: 'T', answers: [YES] }, // Has disabled children < 16
          ],
        },
      ],
    },
    // Divorced spouse
    {
      id: 'r7',
      category: ECategory.family,
      title: t('divorced_spouse'), //'Divorced Spouse',
      label: '',
      requirements: [
        {
          explanation: t('ex_spouse_worked'),
          // "Your ex-spouse worked and you were married to them for ten years or more. And, you meet the age qualification because you're 62 or older.",
          minAge: {
            months: 0,
            years: 62,
          },
          responses: [
            { question: 'L', answers: ['2'] }, // Not married, but was in the past
            { question: 'O', answers: [YES] },
            { question: 'P', answers: [YES] },
            { question: 'Q', answers: [YES, IDK] },
          ],
        },
      ],
    },
    // Widowers
    {
      id: 'r8',
      category: ECategory.survivor,
      title: t('widowers'), // 'Widowers',
      label: '',
      requirements: [
        {
          explanation: `${t('spouse_worked_before')} ${t('older_60')}`,
          // "Your spouse died and they worked before they passed away. And, you meet the age qualification because you're 60 or older.",
          minAge: SIXTY,
          responses: [
            { question: 'L', answers: ['2'] }, // Not married, but was in the past
            { question: 'R', answers: [YES] }, // Spouse is deceased
            { question: 'S', answers: [YES] }, // Spouse worked
          ],
        },
      ],
    },
    // Disabled Widowers
    {
      id: 'r9',
      category: ECategory.survivor,
      title: t('disabled_widowers'), // 'Disabled Widowers',
      label: '',
      requirements: [
        {
          explanation: `${t('spouse_worked_before')} ${t(
            'with_condition_50_60',
          )}`,
          //  "Your spouse died and they worked before they passed away. You also have a condition and expect it to affect your ability to work for a year or more. And, you meet the age qualification because you're between 50 and 60.",
          maxAge: {
            months: 12,
            years: 59,
          },
          minAge: {
            months: 0,
            years: 50,
          },
          responses: [
            { question: 'G', answers: [YES] }, // Disabled
            { question: 'R', answers: [YES] }, // Not married, but was in past
            { question: 'S', answers: [YES] }, // Spouse is deceased
          ],
        },
      ],
    },
    // Lump sum
    {
      id: 'r10',
      category: ECategory.survivor,
      title: t('lump_sum_payment'), // 'Lump Sum Death Payment, a one-time payment',
      label: '',
      requirements: [
        {
          explanation: t('child_parents'), // "The child's parent(s) died.",
          responses: [
            { question: 'Z', answers: [YES] }, // Child has experienced loss of parent
          ],
        },
        {
          explanation: t('spouse_worked_before'),
          // 'Your spouse died and they worked before they passed away.',
          minAge: EIGHTEEN,
          responses: [
            { question: 'R', answers: [YES] }, // Spouse is deceased
            { question: 'S', answers: [YES] }, // Spouse worked
          ],
        },
        {
          explanation: t('your_parents'), // 'Your parent(s) died.',
          minAge: EIGHTEEN,
          responses: [{ question: 'U', answers: [YES] }],
        },
      ],
    },
    // Child Auxiliary
    {
      id: 'r11',
      category: ECategory.family,
      title: t('child_aux'), // 'Child Auxiliary',
      label: '',
      requirements: [
        {
          explanation: t('child_parents_have_benefits'),
          // "The child's parent(s) get Social Security benefits, so the child may be eligible to receive them too.",
          responses: [
            { question: 'A', answers: [NO] }, // Is under 18
            { question: 'BB', answers: [YES, IDK] },
          ],
        },
      ],
    },
    // Child survivor
    {
      id: 'r12',
      category: ECategory.survivor,
      title: t('child_survivor'), // 'Child Survivor',
      label: '',
      requirements: [
        {
          explanation: `${t('child_parents_and_child_eligible')}`,
          // "The child's parent(s) died, so the child may be eligible to receive a monthly benefit.",
          responses: [{ question: 'Z', answers: [YES] }],
        },
      ],
    },
    // Child disability
    {
      id: 'r13',
      category: ECategory.survivor,
      title: t('childhood_disability'), // 'Childhood Disability',
      label: '',
      requirements: [
        {
          explanation: t('you_have_condition_before_22'),
          // 'You have a condition and expect it to affect your ability to work for a year or more. It started to affect you before you turned 22. And, your parent(s) died.',
          responses: [
            { question: 'H', answers: [YES] },
            { question: 'G', answers: [YES] }, // Has disability
            { question: 'I', answers: [YES] }, // Started before 22
            { question: 'U', answers: [YES] }, // Lost a parent
          ],
        },
      ],
    },
    // Student Auxiliary
    {
      id: 'r14',
      category: ECategory.family,
      title: t('student_aux'), // 'Student Auxiliary',
      label: '',
      requirements: [
        {
          explanation: t('school_full_time'),
          //  'You go to elementary or high school full time. And, your parent(s) get Social Security benefits or plan to apply for them soon.',
          maxAge: NINETEEN_ONE,
          minAge: EIGHTEEN,
          responses: [
            { question: 'C', answers: [YES] }, // In high school
            { question: 'W', answers: [YES, IDK] }, // Started before 22
          ],
        },
      ],
    },
    // Student Survivor
    {
      id: 'r15',
      category: ECategory.survivor,
      title: t('student_survivor'), // 'Student Survivor',
      label: '',
      requirements: [
        {
          explanation: t('school_ft_and_parents'),
          // 'You go to elementary or high school full time and your parent(s) died.',
          maxAge: NINETEEN_ONE,
          minAge: EIGHTEEN,
          responses: [
            { question: 'C', answers: [YES] }, // In high school
            { question: 'U', answers: [YES] },
          ],
        },
      ],
    },
    // Mother/father
    {
      id: 'r16',
      category: ECategory.survivor,
      title: t('mothers_fathers'), // "Mother/Father's",
      label: '',
      requirements: [
        {
          explanation: t('spouse_worked_before_with_kids'),
          // 'Your spouse died and they worked before they passed away. And, you have kids who are disabled or under 16.',
          maxAge: { months: 12, years: 59 },
          minAge: EIGHTEEN,
          responses: [
            { question: 'S', answers: [YES] }, // Deceased spouse worked
            { question: 'T', answers: [YES] }, // Has children < 16
          ],
        },
      ],
    },
    // Retirement uproaching, but still under qualifying age
    {
      id: 'r17',
      category: ECategory.retirement,
      title: '',
      label: '',
      requirements: [
        {
          dynamicExplanation: {
            templateString: t('retirement_alert_under_62'), // `If you've worked for ten years or more by your 62nd birthday, you may be eligible for Retirement benefits starting {{month}}, {{year}}.`,
            variables: ['month', 'year'],
            processor: EProcessor.monthAndYearOfEntitlement,
          },
          minAge: { months: 0, years: 55 },
          maxAge: SIXTY_TWO,
        },
      ],
    },
    // Childhood Disability (life)
    {
      id: 'r18',
      category: ECategory.family,
      title: t('childhood_disability'), // 'Childhood Disability',
      label: '',
      requirements: [
        {
          explanation: t('condition_pre_22'),
          // 'You have a condition and expect it to affect your ability to work for a year or more. It started to affect you before you turned 22. And, your parent(s) get Social Security benefits or plan to apply for them soon.',
          minAge: EIGHTEEN,
          responses: [
            { question: 'H', answers: [YES] },
            { question: 'G', answers: [YES] }, // Has disability
            { question: 'I', answers: ['0'] },
            { question: 'W', answers: [YES, IDK] },
          ],
        },
      ],
    },
  ];
}
