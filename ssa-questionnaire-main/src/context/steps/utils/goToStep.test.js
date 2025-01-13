import { assert, describe, expect, test } from 'vitest';
import { getStepId } from './goToStep';
import { mockStepsData } from './mockStepsData';
import { stepsSequence } from './stepsSequence';

describe('Go to step ID', () => {
  test('Simple step progression', () => {
    const props = {
      step: 'question_E',
      answers: {
        question_E: {
          value: 'adult',
        },
      },
      stepsContent: mockStepsData,
      stepsSequence: stepsSequence,
    };
    const goForward = 1;

    const result = getStepId(props, goForward);
    // console.log('result = ', result);
    const expectedResult = `question_A`;
    expect(result).toBe(expectedResult);
  });
});
