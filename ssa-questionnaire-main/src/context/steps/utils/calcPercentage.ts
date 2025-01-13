import { app, YES } from '@/constants';
import {
  stepsSequence__positionedAdult as stepsSequence__positionedAdult_e,
  stepsSequence__positionedChild as stepsSequence__positionedChild_e,
} from '../apps/eligibility/stepsSequence';
import {
  stepsSequence__positionedAdult as stepsSequence__positionedAdult_r,
  stepsSequence__positionedChild as stepsSequence__positionedChild_r,
} from '../apps/replacement/stepsSequence';

import { IStepsContextBaseProps, IAnswers, TStep } from '@/interfaces';

function over18(answers: IAnswers, ageQuestionId: TStep = 'A') {
  if (!answers || !answers[ageQuestionId] || !answers[ageQuestionId].value)
    return undefined;
  return answers[ageQuestionId].value === YES;
}

export function calcPercentage(
  props: IStepsContextBaseProps,
): number | undefined {
  const { step, answers, stepsContent, stepsSequence } = props;
  const pausePointIds: TStep[] = [
    'pause_issnrc',
    'pause_ossnap',
    'pause_nonet',
    'pause_FBU',
    'pause_notprpap',
  ];
  if (step === 'landing' || step === 'intro') return -1;
  if (step === 'summary' || pausePointIds.includes(step)) return 100;
  if (
    step === 'results' ||
    step === 'eligibility_results' ||
    step === 'noResults'
  )
    return 101;

  let allQuestions = stepsContent.filter((s) => s.type === 'question');
  let indexOfCurrentQuestion = allQuestions.map((q) => q.id).indexOf(step);
  let ageQuestionId: TStep;
  let stepsSequence__positionedAdult: TStep[];
  let stepsSequence__positionedChild: TStep[];

  if (app === 'eligibility') {
    ageQuestionId = 'A';
    stepsSequence__positionedAdult = stepsSequence__positionedAdult_e;
    stepsSequence__positionedChild = stepsSequence__positionedChild_e;
  } else if (app === 'replacement') {
    ageQuestionId = 'E';
    stepsSequence__positionedAdult = stepsSequence__positionedAdult_r;
    stepsSequence__positionedChild = stepsSequence__positionedChild_r;
  } else {
    ageQuestionId = 'A';
  }
  // if (app === 'eligibility') {
  const isOver18 = over18(props.answers, ageQuestionId);
  if (isOver18 === undefined) return 0;

  if (isOver18 === true) {
    indexOfCurrentQuestion = stepsSequence__positionedAdult.indexOf(step);
    allQuestions = allQuestions.filter((q) =>
      stepsSequence__positionedAdult.includes(q.id),
    );
  } else if (isOver18 === false) {
    indexOfCurrentQuestion = stepsSequence__positionedChild.indexOf(step);
    allQuestions = allQuestions.filter((q) =>
      stepsSequence__positionedChild.includes(q.id),
    );
  }
  // }

  // if (app === 'eligibility') {
  if (indexOfCurrentQuestion <= 0) return 2;
  // }

  const current = indexOfCurrentQuestion + 1;
  const all = allQuestions.length + 2;
  const percentage = Math.round((current / all) * 100);

  return percentage;
}
