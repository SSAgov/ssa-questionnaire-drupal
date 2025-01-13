import { yesNoChoices, YES, NO } from '@/constants';

export const mockAdultQuestionsData = [
  // question_A
  {
    type: 'question',
    id: 'question_A',
    questionType: 'multiple_choice',
    question: {
      title: `Are you a U.S. citizen?`,
      choices: [
        {
          id: `A_answer_yes`,
          title: `Yes`,
          value: YES,
        },
        {
          id: `A_answer_no`,
          title: `No`,
          value: NO,
        },
      ],
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_E', answers: ['adult'] }],
      },
    ],
  },
  // question_C
  {
    type: 'question',
    id: 'question_C',
    questionType: 'multiple_choice',
    question: {
      title: `Do you have a U.S. mailing address?`,
      choices: [
        {
          id: `I_answer_yes`,
          title: `Yes`,
          value: YES,
        },
        {
          id: `I_answer_no`,
          title: `No`,
          value: NO,
        },
      ],
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_A', answers: [YES, NO] }],
      },
    ],
  },
  // question_D
  {
    type: 'question',
    id: 'question_D',
    questionType: 'multiple_choice',
    question: {
      title: `Do you currently live in the U.S.?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_C', answers: [NO] }],
      },
    ],
  },
  // question_G
  {
    type: 'question',
    id: 'question_G',
    questionType: 'multiple_choice',
    question: {
      title: `Do you have an unexpired driver’s license or state-issued identification?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [
          { question: 'question_A', answers: [YES] },
          { question: 'question_D', answers: [YES] },
        ],
      },
      {
        responses: [
          { question: 'question_A', answers: [YES] },
          { question: 'question_C', answers: [YES] },
        ],
      },
    ],
  },
  // question_NA
  {
    type: 'question',
    id: 'question_NA',
    questionType: 'multiple_choice',
    question: {
      title: `Do you have unexpired ID? `,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [
          { question: 'question_A', answers: [NO] },
          { question: 'question_D', answers: [YES] },
        ],
      },
      {
        responses: [
          { question: 'question_A', answers: [NO] },
          { question: 'question_C', answers: [YES] },
        ],
      },
    ],
  },
  // question_H
  {
    type: 'question',
    id: 'question_H',
    questionType: 'multiple_choice',
    question: {
      title: `What state issued your ID?`,
      choices: [
        {
          id: `answer_md`,
          title: `Maryland`,
          value: 'md',
        },
        {
          id: `answer_va`,
          title: `Virginia (cannot proceed online)`,
          value: 'va',
        },
        {
          id: `answer_dc`,
          title: `Washington DC`,
          value: 'dc',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [
          { question: 'question_A', answers: [YES] },
          { question: 'question_G', answers: [YES] },
        ],
      },
    ],
  },
  // question_NB
  {
    type: 'question',
    id: 'question_NB',
    questionType: 'multiple_choice',
    question: {
      title: `Do you have a current, unexpired document that proves your immigration status?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [
          { question: 'question_A', answers: [NO] },
          { question: 'question_NA', answers: [YES] },
        ],
      },
    ],
  },
  // question_CQ1
  {
    type: 'question',
    id: 'question_CQ1',
    questionType: 'multiple_choice',
    question: {
      title: `ASK CHANGE QUESTIONS`,
      choices: [
        {
          id: `answer_name`,
          title: `Only a name change`,
          value: 'name',
        },
        {
          id: `answer_multiple`,
          title: `Multiple Changes`,
          value: 'multiple',
        },
        {
          id: `answer_none`,
          title: `Zero Changes`,
          value: 'none',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_H', answers: ['md', 'dc'] }],
      },
    ],
  },
  // question_L
  {
    type: 'question',
    id: 'question_L',
    questionType: 'multiple_choice',
    question: {
      title: `Are you changing your name because you got married?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_CQ1', answers: ['name'] }],
      },
    ],
  },
  // question_M
  {
    type: 'question',
    id: 'question_M',
    questionType: 'multiple_choice',
    question: {
      title: `What state issued your marriage license?`,
      choices: [
        {
          id: `answer_md`,
          title: `Maryland`,
          value: 'md',
        },
        {
          id: `answer_va`,
          title: `Virginia`,
          value: 'va',
        },
        {
          id: `answer_dc`,
          title: `Washington DC (cannot proceed online)`,
          value: 'dc',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_L', answers: [YES] }],
      },
    ],
  },
];