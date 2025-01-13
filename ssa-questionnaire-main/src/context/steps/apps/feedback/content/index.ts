import { IStepsContentItemContent } from '@/interfaces';
import { questionsContentEn, questionsContentEs } from './questionsContent';
import { pagesContentEn, pagesContentEs } from './pagesContent';

export const stepsContent = {
  en: [...questionsContentEn, ...pagesContentEn] as IStepsContentItemContent[],
  es: [...questionsContentEs, ...pagesContentEs] as IStepsContentItemContent[],
};
