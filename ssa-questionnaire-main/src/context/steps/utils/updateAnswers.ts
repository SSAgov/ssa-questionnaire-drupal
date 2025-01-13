import {
  IAnswers,
  IStepsContextBaseProps,
  IUpdateAnswersProps,
} from '@/interfaces';

export function updateAnswers(
  { answers, setAnswers, stepsSequence }: IStepsContextBaseProps,
  { questionId, value }: IUpdateAnswersProps,
): void {
  const newAnswers: IAnswers = { ...answers };

  newAnswers[questionId] = {
    value,
  };

  // const indexOfCurrQues = stepsSequence.indexOf(questionId);
  // if (indexOfCurrQues < stepsSequence.length - 1) {
  //   const allQuestionsFollowingCurrentOne = stepsSequence.slice(indexOfCurrQues+1);
  //   allQuestionsFollowingCurrentOne.forEach((qId) => {
  //     if (newAnswers[qId]) {
  //       delete newAnswers[qId];
  //     }
  //   })
  // }

  setAnswers(newAnswers);
}
