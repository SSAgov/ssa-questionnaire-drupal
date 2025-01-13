import { yesNoChoices, YES, NO } from '@/constants';

export const mockChildQuestionsData = [
  // question_F
  {
    type: 'question',
    id: 'question_F',
    questionType: 'multiple_choice',
    question: {
      title: `Are you applying for yourself or assisting someone else?`,
      choices: [
        {
          id: `F_answer_someone`,
          title: `Assisting someone else`,
          value: 'someone',
        },
        {
          id: `F_answer_self`,
          title: `Self`,
          value: 'self',
        },
      ],
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_E', answers: ['child'] }],
      },
    ],
  },
  // question_I
  {
    type: 'question',
    id: 'question_I',
    questionType: 'multiple_choice',
    question: {
      title: `Is the person you are assisting a U.S. citizen?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [
          { question: 'question_E', answers: ['child'] },
          { question: 'question_F', answers: ['someone'] },
        ],
      },
    ],
  },
  // question_C2
  {
    type: 'question',
    id: 'question_C2',
    questionType: 'multiple_choice',
    question: {
      title: `Do they have a U.S. mailing address?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_I', answers: [YES] }],
      },
    ],
  },
  // question_D2
  {
    type: 'question',
    id: 'question_D2',
    questionType: 'multiple_choice',
    question: {
      title: `Do they currently live in the U.S.?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_C2', answers: [NO] }],
      },
    ],
  },
  // question_W
  {
    type: 'question',
    id: 'question_W',
    questionType: 'multiple_choice',
    question: {
      title: `Does the applicant have an unexpired driver's license, state-issued identification, passport or passport card?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_C2', answers: [YES] }],
      },
      {
        responses: [{ question: 'question_D2', answers: [YES] }],
      },
    ],
  },
  // question_T
  {
    type: 'question',
    id: 'question_T',
    questionType: 'multiple_choice',
    question: {
      title: `Do you have an unexpired driver's license, state-issued identification, passport or passport card?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_W', answers: [YES, NO] }],
      },
    ],
  },
  // question_CQ2
  {
    type: 'question',
    id: 'question_CQ2',
    questionType: 'multiple_choice',
    question: {
      title: `ASK CHANGE QUESTIONS`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_T', answers: [NO] }],
      },
    ],
  },
  // question_HH
  {
    type: 'question',
    id: 'question_HH',
    questionType: 'multiple_choice',
    question: {
      title: `Are you the parent or adoptive parent?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_T', answers: [YES] }],
      },
    ],
  },
  // question_II
  {
    type: 'question',
    id: 'question_II',
    questionType: 'multiple_choice',
    question: {
      title: `Are you a court appointed legal guardian?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_HH', answers: [NO] }],
      },
    ],
  },
  // question_AA
  {
    type: 'question',
    id: 'question_AA',
    questionType: 'multiple_choice',
    question: {
      title: `Will the child need to make changes to their card? `,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_HH', answers: [YES] }],
      },
      {
        responses: [{ question: 'question_II', answers: [YES] }],
      },
    ],
  },
  // question_CQ
  {
    type: 'question',
    id: 'question_CQ',
    questionType: 'multiple_choice',
    question: {
      title: `Are they changing their name?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_AA', answers: [YES] }],
      },
    ],
  },
  // question_R
  {
    type: 'question',
    id: 'question_R',
    questionType: 'multiple_choice',
    question: {
      title: `Do they need to correct their place of birth?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_CQ', answers: [YES, NO] }],
      },
    ],
  },
  // question_R2
  {
    type: 'question',
    id: 'question_R2',
    questionType: 'multiple_choice',
    question: {
      title: `Do they need to correct their date of birth?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_R', answers: [YES, NO] }],
      },
    ],
  },
  // question_R3
  {
    type: 'question',
    id: 'question_R3',
    questionType: 'multiple_choice',
    question: {
      title: `Are they updating their citizenship or legal status?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_R2', answers: [YES, NO] }],
      },
    ],
  },
  // question_R4
  {
    type: 'question',
    id: 'question_R4',
    questionType: 'multiple_choice',
    question: {
      title: `Do they need to correct their parents names?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_R3', answers: [YES, NO] }],
      },
    ],
  },
  // question_R5
  {
    type: 'question',
    id: 'question_R5',
    questionType: 'multiple_choice',
    question: {
      title: `Are they updating their gender?`,
      choices: yesNoChoices,
    },
    entryRequirements: [
      {
        responses: [{ question: 'question_R4', answers: [YES, NO] }],
      },
    ],
  },
];