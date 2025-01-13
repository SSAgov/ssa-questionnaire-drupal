import { pagesLogic } from './pagesLogic';
import { questionsLogic } from './questionsLogic';

export const stepsLogic = [...questionsLogic, ...pagesLogic];
