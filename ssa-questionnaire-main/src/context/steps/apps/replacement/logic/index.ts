import { questionsLogic } from './questionsLogic';
import { pausePointsLogic } from './pausePointsLogic';

export const stepsLogic = [...questionsLogic, ...pausePointsLogic];

export * from './accordionsLogic';
export * from './questionsLogic';
export * from './pausePointsLogic';
