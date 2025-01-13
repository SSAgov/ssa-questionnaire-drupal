import { NO } from '@/constants';
import { IAnswers, IProgressiveRevealeInputs } from '@/interfaces';

export function determineStateVitalsParticipation(
  stateParticipationCB: (state: string) => boolean,
  answers: IAnswers,
): boolean {
  const foundAnswer = answers['L'];
  if (!foundAnswer) return false;
  const answer = foundAnswer.value as IProgressiveRevealeInputs;
  if (
    answer.mainInput === null ||
    answer.mainInput === undefined ||
    answer.mainInput === NO
  )
    return false;
  if (!answer.followupInput || !answer.followupInput.abbreviation) return false;
  const stateAbbriviation = answer.followupInput.abbreviation;

  return stateParticipationCB(stateAbbriviation);
}

export function marriedNameChangeAnswerBreakdown(
  marriedAnswerCB: (_answer: IProgressiveRevealeInputs) => boolean,
  answers: IAnswers,
): boolean {
  const NO_ID = '2';
  const foundAnswer = answers['L'];
  if (!foundAnswer) return false;
  const answer = foundAnswer.value as IProgressiveRevealeInputs;

  return marriedAnswerCB(answer);
}

export const changeQuestionAnswerBreakdown = (
  changeQuestionCB: (_answer: string[]) => boolean,
  answers: IAnswers,
): boolean => answerBreakdown<string[]>(changeQuestionCB, answers, 'CQ');

export const NDAnswerBreakdown = (
  changeQuestionCB: (_answer: string[]) => boolean,
  answers: IAnswers,
): boolean => answerBreakdown<string[]>(changeQuestionCB, answers, 'ND');

export const AAQuestionAnswerBreakdown = (
  changeQuestionCB: (_answer: string[]) => boolean,
  answers: IAnswers,
): boolean => answerBreakdown<string[]>(changeQuestionCB, answers, 'AA');

export const NCQuestionAnswerBreakdown = (
  changeQuestionCB: (_answer: string[]) => boolean,
  answers: IAnswers,
): boolean => answerBreakdown<string[]>(changeQuestionCB, answers, 'NC');

export function answerBreakdown<IArgType>(
  cb: (_answer: IArgType) => boolean,
  answers: IAnswers,
  qId: string,
): boolean {
  const foundAnswer = answers[qId];
  if (!foundAnswer) return false;
  const answer = foundAnswer.value as IArgType;

  return cb(answer);
}
