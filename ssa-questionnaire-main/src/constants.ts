import { translations } from './context/global/translations';
import { capitalize } from './global-utils';
import { IStateInfo } from './interfaces';

export const app = getEnvVar('VITE_APP');
// export const app = 'eligibility';

// Toggle between using hardcoded data vs fetching data from Drupal
// This is a temp fix until we have the right content in Drupal
export const useHardcodedData =
  getEnvVar('VITE_USE_HARDCODED_DATA') === 'true' ? true : false;

export const useGlobalStyles: boolean = checkIfUsingGlobalStyles();

export const API = {
  questionsPath: getEnvVar('VITE_API_QUESTIONS_PATH'),
  devOrigin: getEnvVar('VITE_API_ORIGIN'),
};

// export const inDevelopment = getEnvVar('DEV');
export const inDevelopment = !!import.meta.env.DEV;

// export const YES = { id: '0', order: 1, title: 'Yes' };
// export const NO = { id: '1', order: 2, title: 'No' };
export const YES = '0';
export const NO = '1';
export const IDK = '2';
export const UNANSWERED = 'unanswered';
// export const ADULT = '0';
// export const CHILD = '1';
export const ADULT = { question: 'E', answers: ['0'] };
export const CHILD = { question: 'E', answers: ['1'] };
export const CITIZEN = { question: 'A', answers: ['0'] };
export const NON_CITIZEN = { question: 'A', answers: ['1'] };
export const ADULT_CITIZEN = [ADULT, CITIZEN];
export const ADULT_NON_CITIZEN = [ADULT, NON_CITIZEN];
export const CHILD_CITIZEN = [CHILD, { question: 'I', answers: ['0'] }];
export const CHILD_NON_CITIZEN = [CHILD, { question: 'I', answers: ['1'] }];
export const NINETEEN_ONE = { months: 1, years: 19 };
export const EIGHTEEN = { months: 0, years: 18 };
export const SIXTY = { months: 0, years: 60 };
export const SIXTY_ONE_EIGHT = { months: 8, years: 61 };
export const SIXTY_TWO = { months: 0, years: 62 };
export const SIXTY_FIVE = { months: 0, years: 65 };

export const yesNoChoices = [
  {
    id: YES,
    title: `Yes`,
    value: YES,
  },
  {
    id: NO,
    title: `No`,
    value: NO,
  },
];

export const yesNoChoicesEn = [
  {
    id: YES,
    title: `Yes`,
    value: YES,
  },
  {
    id: NO,
    title: `No`,
    value: NO,
  },
];

export const yesNoChoicesEs = [
  {
    id: YES,
    title: `Sí`,
    value: YES,
  },
  {
    id: NO,
    title: `No`,
    value: NO,
  },
];

export const Category = {
  retirement: 'Retirement',
  disability: 'Disability',
  family: 'Family',
  supplemental_security_income: 'Supplemental Security Income',
  survivor: 'Survivor',
};

function getEnvVar(varName: string): string {
  if (!import.meta) {
    throw new Error(
      `Reading env vars: import.meta didn't work. Check constant.js file.`,
    );
  }
  if (!import.meta.env) {
    throw new Error(
      `Reading env vars: import.meta.env didn't work. Check constant.js file.`,
    );
  }
  // // TODO uncomment the block below when you have the question data in drupal
  if (!import.meta.env[varName]) {
    const message = `Reading env vars: Environmental variable "${varName}" could not be found. Check for the existance of .env.development/production files at the root level of the app or load the env var at command line.`;
    if (typeof window !== 'undefined') window.alert(message);
    throw new Error(message);
  }
  return import.meta.env[varName];
}

export const months = {
  en: [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  es: [
    'Enero',
    'Febrero',
    'Marso',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Deciembre',
  ],
};

function checkIfUsingGlobalStyles(): boolean {
  if (
    import.meta &&
    import.meta.env &&
    import.meta.env.VITE_USE_GLOBAL_STYLES &&
    import.meta.env.VITE_USE_GLOBAL_STYLES === 'true'
  ) {
    return true;
  }
  return false;
}

export const statesShort = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District Of Columbia',
  FM: 'Federated States Of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

export const states: IStateInfo[] = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
];

