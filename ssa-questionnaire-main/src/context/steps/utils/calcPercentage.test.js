import { assert, describe, expect, test } from 'vitest';
import { mockStepsData } from './mockStepsData';
import { stepsSequence } from './stepsSequence';
import { calcPercentage } from './calcPercentage';

describe('Calculate progress percentage', () => {
  test('Percentage progress for first question is zero', () => {
    const props = {
      step: 'question_E',
      answers: {},
      stepsContent: mockStepsData,
      stepsSequence: stepsSequence,
    };

    const result = calcPercentage(props);
    const expectedResult = 0;
    expect(result).toBe(expectedResult);
  });

  test('Simple percentage calculation', () => {
    const props = {
      step: 'question_A',
      answers: {
        question_E: {
          value: 'adult',
        },
      },
      stepsContent: mockStepsData,
      stepsSequence: stepsSequence,
    };

    const result = calcPercentage(props);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});
