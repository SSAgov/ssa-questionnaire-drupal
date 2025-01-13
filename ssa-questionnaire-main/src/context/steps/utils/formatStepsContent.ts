import { app, useHardcodedData } from '@/constants';
import {
  IDrupalResponse,
  IFormatStepsContentProps,
  IQuestionLogicItem,
  IStepsContentItem,
  TStep,
} from '@/interfaces';
import { mockPagesData, mockStepsData } from './mockStepsData';
import { questionsLogic } from './stepsLogic';

export function formatStepsContent(rawContent: IFormatStepsContentProps) {
  // TODO remove condition that checks for 'replacement' below
  if (
    (useHardcodedData && app === 'feedback') ||
    (useHardcodedData && app === 'replacement')
  ) {
    return mockStepsData;
  }

  const formattedQuestionsContent = formatQuestionsContent(
    rawContent.questions,
  );

  const formattedPagesContent = formatPagesContent();

  const stepsDataWithCMSContent = [
    ...formattedPagesContent,
    ...formattedQuestionsContent,
  ];

  return stepsDataWithCMSContent;
}

export function formatPagesContent() {
  return mockPagesData;
}

export function formatQuestionsContent(
  rawQuestionsRes: IDrupalResponse,
): IStepsContentItem[] {
  // Remove not-needed properties
  delete rawQuestionsRes.jsonapi;
  delete rawQuestionsRes.links;
  const rawQuestionsData = rawQuestionsRes.data;
  const completeQuestions: IStepsContentItem[] = [];

  if (!rawQuestionsData) return [];

  for (let i = 0; i < rawQuestionsData.length; i++) {
    const questionDataItem = rawQuestionsData[i];
    const questionId: TStep = questionDataItem.attributes.question_id;
    const foundQuestionLogic: IQuestionLogicItem = questionsLogic.find(
      (q) => q.id === questionId,
    );

    // Skip questions that don't have a matching logic, go to the next
    if (!foundQuestionLogic) {
      logError('logic-not-found', questionId);
      continue;
    }
    // Spread all the props that logic item has and add additional props coming from CMS
    const newCompleteQuestion = { ...foundQuestionLogic } as IStepsContentItem;
    newCompleteQuestion.type = 'question';
    newCompleteQuestion.subTitle = questionDataItem.attributes.subTitle;
    newCompleteQuestion.info = questionDataItem.attributes.info;

    const { title, answers: possibleAnswers } = questionDataItem.attributes;

    // Skip a question that is missing a title
    if (!title) {
      logError('incomplete', questionId);
      continue;
    }

    // Skip a question that is missing a title
    if (
      foundQuestionLogic.questionType === 'multiple_choice' &&
      !possibleAnswers
    ) {
      logError('incomplete', questionId);
      continue;
    }

    const questionContent = {
      title: questionDataItem.attributes.title,
      choices: questionDataItem.attributes.answers.map((a) => ({
        ...a,
        id: `${a.id}`,
        value: `${a.id}`,
      })),
    };

    newCompleteQuestion.question = { ...questionContent };

    completeQuestions.push(newCompleteQuestion);
  }

  return completeQuestions;
}

function logError(errorName: string, questionId: TStep): void {
  if (!useHardcodedData) {
    // console.error(getErrorMessage(errorName, questionId));
  }
}

function getErrorMessage(type: string, questionId: TStep): string {
  const skept = `For now, this question will be skept.`;

  if (type && questionId && type === 'logic-not-found')
    return `Question logic for "${questionId}" wasn't found. Make sure questionsLogic folder contains the right logic for this question. ${skept}`;

  if (type && questionId && type === 'incomplete')
    return `Question data from Drupal for "${questionId}" is incomplete. Make sure all the required fields, such as title, answers etc, are prsent under the Question component in Drupal. ${skept}`;

  return 'Something went wrong';
}
