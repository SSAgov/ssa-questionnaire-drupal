import { IStepsContentItemContent } from '@/interfaces';
import { pausePointsContent } from './pausePointsContent';
import { questionsContent } from './questionsContent';

export const stepsContent = {
  en: [...questionsContent.en, ...pausePointsContent.en] as IStepsContentItemContent[],
  es: [...questionsContent.es, ...pausePointsContent.es] as IStepsContentItemContent[],
};

export * from './accordionsContent';
