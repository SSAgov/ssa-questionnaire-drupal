import { NO } from '@/constants';
import { EQuestionType, EStepType, IStepsContentItemLogic } from '@/interfaces';

export const questionsLogic: IStepsContentItemLogic[] = [
  {
    type: EStepType.question,
    id: 'feedback_prompt_1',
    questionType: EQuestionType.multiple_actions,
    progressBar: 'hide',
  },
  {
    type: EStepType.question,
    id: 'feedback_prompt_2',
    questionType: EQuestionType.checkboxes,
    progressBar: 'hide',
    entryRequirements: [
      {
        responses: [{ question: 'feedback_prompt_1', answers: [NO] }],
      },
    ],
  },
  {
    type: EStepType.question,
    id: 'feedback_prompt_3',
    questionType: EQuestionType.textarea,
    progressBar: 'hide',
    entryRequirements: [
      {
        responses: [{ question: 'feedback_prompt_1', answers: [NO] }],
      },
    ],
  },
];
