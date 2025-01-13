import { assert, describe, expect, test } from 'vitest';
import { questionsLogic } from './stepsLogic';
import { mockStepsData } from './mockStepsData';
import { useHardcodedData } from '@/constants';
import { formatQuestionsContent } from './formatStepsContent';
// import { mockStepsData } from './mockStepsData';
// import { stepsSequence } from './stepsSequence';

const questionWithLogic = {
  id: 'af43fcde-af97-4a32-ae04-e3168b650a15',
  attributes: {
    drupal_internal__qid: 41,
    question_id: 'question_A',
    title:
      'When did the condition start to affect your daily activities and ability to work?',
    answers: [
      {
        id: 0,
        title: 'Yes',
      },
      {
        id: 1,
        title: 'No',
      },
    ],
    subTitle: null,
    info: 'Info goes here',
  },
};

const questionWithoutLogic = { ...questionWithLogic };
questionWithoutLogic.attributes = { ...questionWithoutLogic.attributes };
questionWithoutLogic.attributes.question_id = 'none-existing-id';

const questionWithoutTitle = { ...questionWithLogic };
questionWithoutTitle.attributes = { ...questionWithoutTitle.attributes };
delete questionWithoutTitle.attributes.title;

const multipleChoiceQuestionWithoutAnswers = { ...questionWithLogic };
multipleChoiceQuestionWithoutAnswers.attributes = {
  ...multipleChoiceQuestionWithoutAnswers.attributes,
};
delete multipleChoiceQuestionWithoutAnswers.attributes.answers;

describe('Format raw questions response from drupal', () => {
  test('Drupal question with proper matching logic gets added to the list', () => {
    const rawQuestionsRes = { data: [questionWithLogic] };
    const result = formatQuestionsContent(rawQuestionsRes);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: questionWithLogic.attributes.question_id,
        }),
      ]),
    );
  });

  test('Drupal question is skept if the corresponding logic for that question is missing', () => {
    const rawQuestionsRes = { data: [questionWithoutLogic] };
    const result = formatQuestionsContent(rawQuestionsRes);

    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: questionWithoutLogic.attributes.question_id,
        }),
      ]),
    );
  });

  test('Drupal question is skept if the question title is missing', () => {
    const rawQuestionsRes = { data: [questionWithoutTitle] };
    const result = formatQuestionsContent(rawQuestionsRes);

    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: questionWithoutTitle.attributes.question_id,
        }),
      ]),
    );
  });

  test('Drupal question is skept if the question title is missing', () => {
    const rawQuestionsRes = { data: [questionWithoutTitle] };
    const result = formatQuestionsContent(rawQuestionsRes);

    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: questionWithoutTitle.attributes.question_id,
        }),
      ]),
    );
  });
});