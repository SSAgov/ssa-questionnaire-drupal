import { assert, describe, expect, test } from 'vitest';
import { meetsRequirements } from './meetsRequirements';
import { YES, NO } from '@/constants';

describe('oSSNAP results', () => {
  const isResults = true;
  const resultOssnap = {
    id: 'result_ossnap',
    label: 'oSSNAP',
    requirements: [
      {
        responses: [
          { question: 'question_E', answers: ['adult', 'child'] },
          // ADULT
          { question: 'question_A', answers: ['unanswered', YES, NO] },
          { question: 'question_C', answers: ['unanswered', YES, NO] },
          { question: 'question_D', answers: ['unanswered', YES] },
          { question: 'question_G', answers: ['unanswered', YES, NO] },
          { question: 'question_H', answers: ['unanswered', 'va', 'md', 'dc'] },
          {
            question: 'question_CQ1',
            answers: ['unanswered', 'multiple', 'name'],
          },
          { question: 'question_L', answers: ['unanswered', YES, NO] },
          { question: 'question_M', answers: ['unanswered', 'dc'] },
          // CHILD
          { question: 'question_F', answers: ['unanswered', 'someone'] },
          { question: 'question_I', answers: ['unanswered', YES] },
          { question: 'question_C2', answers: ['unanswered', YES, NO] },
          { question: 'question_D2', answers: ['unanswered', YES] },
          { question: 'question_W', answers: ['unanswered', YES, NO] },
          { question: 'question_T', answers: ['unanswered', YES] },
          { question: 'question_HH', answers: ['unanswered', YES, NO] },
          { question: 'question_II', answers: ['unanswered', YES] },
          { question: 'question_AA', answers: ['unanswered', YES, NO] },
          { question: 'question_CQ', answers: ['unanswered', YES, NO] },
          { question: 'question_R', answers: ['unanswered', YES, NO] },
          { question: 'question_R1', answers: ['unanswered', YES, NO] },
          { question: 'question_R2', answers: ['unanswered', YES, NO] },
          { question: 'question_R3', answers: ['unanswered', YES, NO] },
          { question: 'question_R4', answers: ['unanswered', YES, NO] },
          { question: 'question_R5', answers: ['unanswered', YES, NO] },
        ],
      },
    ],
  };
  const requirements = resultOssnap.requirements;

  test('oSSNAP results without answers after pause_21', () => {
    const answers_21 = {
      question_E: {
        value: 'adult',
      },
      question_A: {
        value: YES,
      },
      question_C: {
        value: YES,
      },
      question_G: {
        value: YES,
      },
      question_H: {
        value: 'md',
      },
      question_CQ1: {
        value: 'name',
      },
      question_L: {
        value: NO,
      },
    };
    const result = meetsRequirements(requirements, answers_21, isResults);
    expect(result).toBe(true);
  });
  test('oSSNAP results without answers after pause_17', () => {
    const answers_21 = {
      question_E: { value: 'adult' },
      question_A: { value: YES },
      question_C: { value: YES },
      question_G: { value: YES },
      question_H: { value: 'va' },
    };
    const result = meetsRequirements(requirements, answers_21, isResults);
    expect(result).toBe(true);
  });
});