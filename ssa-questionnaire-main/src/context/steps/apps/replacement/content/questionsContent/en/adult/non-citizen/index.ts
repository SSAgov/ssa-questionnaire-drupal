export const adultNonCitizen = [
  {
    id: 'NB',
    question: {
      title: `What type of work authorization do you have?`,
      choices: [
        {
          id: `0`,
          title: `Permanent Resident Card (I-551), Green Card`,
          value: '0',
        },
        {
          id: `1`,
          title: `Employment Authorization Document (I-776), work permit`,
          value: '1',
        },
        {
          id: `2`,
          title: `Certificate of Eligibility for Exchange Visitor Status (DS-2019)`,
          value: '2',
        },
        {
          id: `3`,
          title: `Certificate of Eligibility for Nonimmigrant Student Status (I-20)`,
          value: '3',
        },
        {
          id: `4`,
          title: `Other`,
          value: '4',
        },
        {
          id: `5`,
          title: `None`,
          value: '5',
        },
      ],
    },
  },
  {
    id: 'ND',
    subTitle: 'Select all that apply:',
    question: {
      title: `What changes do you need on your Social Security card or record?`,
      choices: [
        {
          id: `0`,
          title: `Citizenship or immigration status`,
          value: '0',
        },
        {
          id: `1`,
          title: `Name`,
          value: '1',
        },
        {
          id: `2`,
          title: `Place of birth`,
          value: '2',
        },
        {
          id: `3`,
          title: `Date of birth`,
          value: '3',
        },
        {
          id: `4`,
          title: `Parent's name`,
          value: '4',
        },
        {
          id: `5`,
          title: `Sex identification`,
          value: '5',
        },
        {
          id: `none_of_the_above`,
          title: `No changes needed`,
          value: 'none_of_the_above',
        },
      ],
    },
  },
];
