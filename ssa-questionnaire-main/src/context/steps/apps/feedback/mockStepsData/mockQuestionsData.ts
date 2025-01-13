import { NO } from '@/constants';
import {
  EButtonVariant,
  EQuestionType,
  EStepType,
  IStepsContentItem,
} from '@/interfaces';

export const mockQuestionsData: IStepsContentItem[] = [
  {
    type: EStepType.question,
    id: 'feedback_prompt_1',
    questionType: EQuestionType.multiple_actions,
    progressBar: 'hide',
    question: {
      title: 'Was this page helpful?',
      nextPrevBtns: 'hide',
      actions: [
        {
          id: '0',
          title: 'Yes',
          value: '0',
          variant: EButtonVariant.secondary,
        },
        { id: '1', title: 'No', value: '1', variant: EButtonVariant.secondary },
      ],
    },
  },
  {
    type: EStepType.question,
    id: 'feedback_prompt_2',
    questionType: EQuestionType.checkboxes,
    progressBar: 'hide',
    subTitle: 'Select all answers that apply',
    question: {
      title: "Why wasn't this page helpful?",
      nextPrevBtns: 'hide',
      // customActions: 'feedback_submit',
      choices: [
        {
          id: `0`,
          title: `Not enough information`,
          value: '0',
        },
        {
          id: `1`,
          title: `Too much information`,
          value: '1',
        },
        {
          id: `2`,
          title: `Confusing`,
          value: '2',
        },
        {
          id: `3`,
          title: `Outdated`,
          value: '3',
        },
        {
          id: `4`,
          title: `Other`,
          value: '4',
        },
      ],
    },
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
    subTitle: `Please do not enter any personal information (name, SSN, email, date of birth, etc.)`,
    question: {
      title: 'How can we improve this page?',
      placeholder: ``,
      nextPrevBtns: 'hide',
      customActions: 'feedback_submit',
    },
    entryRequirements: [
      {
        responses: [{ question: 'feedback_prompt_1', answers: [NO] }],
      },
    ],
  },
];
