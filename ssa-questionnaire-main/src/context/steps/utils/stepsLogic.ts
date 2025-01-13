import { app } from '@/constants';
import { replacementContent } from '../apps/replacement';
import { eligibilityContent } from '../apps/eligibility';
import { feedbackContent } from '../apps/feedback';
import { IQuestionLogicItem } from '@/interfaces';

const appSpecificQuestionsLogic = {
  replacement: replacementContent.questionsLogic,
  eligibility: eligibilityContent.questionsLogic,
  feedback: feedbackContent.questionsLogic,
};

export const questionsLogic: IQuestionLogicItem[] =
  appSpecificQuestionsLogic[app];
