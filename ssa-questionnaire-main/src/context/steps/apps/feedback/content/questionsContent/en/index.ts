import { EButtonVariant, IStepsContentItemContent } from '@/interfaces';

export const questionsContentEn: IStepsContentItemContent[] = [
  {
    id: 'feedback_prompt_1',
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
    id: 'feedback_prompt_2',
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
  },
  {
    id: 'feedback_prompt_3',
    subTitle: `Please do not enter any personal information (name, SSN, email, date of birth, etc.)`,
    question: {
      title: 'How can we improve this page?',
      placeholder: ``,
      nextPrevBtns: 'hide',
      customActions: 'feedback_submit',
    },
  },
];
