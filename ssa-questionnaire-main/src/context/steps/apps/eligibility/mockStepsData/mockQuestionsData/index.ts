import { mockAdultQuestionsData } from './mockAdultQuestionsData';
import { mockChildQuestionsData } from './mockChildQuestionsData';

const mockQuestionsData = [
  // question_E
  {
    type: 'question',
    id: 'question_E',
    questionType: 'multiple_choice',
    question: {
      title: `Who is the replacement card for?`,
      choices: [
        {
          id: `E_answer_adult`,
          title: `Adult (age 18 or older)`,
          value: 'adult',
        },
        {
          id: `E_answer_child`,
          title: `Child (age 17 or younger)`,
          value: 'child',
        },
      ],
    },
  },
  ...mockAdultQuestionsData,
  ...mockChildQuestionsData,
];

export { mockQuestionsData };
