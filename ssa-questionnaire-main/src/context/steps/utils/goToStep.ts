import { meetsRequirements } from './meetsRequirements';
import { TDirection, IStepsContextBaseProps, TStep, IAnswers } from '@/interfaces';

// Not a pure function - has a side effects by calling out to wizard's goToStep method
export function goToStep(props: IStepsContextBaseProps, direction: TDirection): TStep {
  const targetStep = getStepId(props, direction);
  props.wizard.goToStep(targetStep);
  return targetStep;
}

// Pure function that identifies the next step
export function getStepId(
  props: IStepsContextBaseProps,
  direction: TDirection,
  recursiveStep: null | TStep = null,
) {
  // debugger;
  // console.log('getStepId props = ', props)
  const { step, wizard, answers, setAnswers, ageAndBday, language, stepsContent, stepsSequence } =
    props;

  // Since this is a recursive function, a current step would be either the one from the wizard state,
  // or the one that this function passes to itself at the end of iteration - recursiveStep
  const currentStepId = recursiveStep ? recursiveStep : step;
  //   const foundStepItem = stepsContent.find((s) => s.id === currentStepId);

  const currentStepIndex = stepsSequence.indexOf(currentStepId);

  /*=== BASE CASE ===*/
  // Wizard step is the one use-wizard keeps track of, as opposed to recursiveStep - is the one we're passing along to next call stack
  const wizardStepIndex = stepsSequence.indexOf(step);
  // A base case is met if the wizard step OR the recursive steps are the last items of the steps sequence
  // Steps sequence is what is passed to useWizard when initialized
  const forwardCondition =
    wizardStepIndex === stepsSequence.length - 1 ||
    currentStepIndex === stepsSequence.length - 1;
  const backwardCondition = wizardStepIndex === 0 || currentStepIndex === 0;
  const baseCondition = direction === 1 ? forwardCondition : backwardCondition;
  if (baseCondition) {
    console.log('#### Base case!!! ###');
    // If the step is the last one in the sequence, just return the step of the wizard to stay where you are at
    return step;
  }

  // Find the next expected step
  const nextStepId = stepsSequence[currentStepIndex + direction];
  // const nextStepItem =
  //   stepsContent.find((s) => s.id === nextStepId) ||
  //   stepsContent.find((s) => s.id === 'not_found');
  const nextStepItem = stepsContent.find((s) => s.id === nextStepId);
  if (!nextStepItem) return nextStepId;
  const nextStepHasEntryReqs = !!nextStepItem.entryRequirements;

  // If the next step doesn't have any entry reqs, then just return it's ID
  if (!nextStepHasEntryReqs) return nextStepId;

  const entryRequirements = nextStepItem.entryRequirements;
  // Check if the next question meets all the requirements
  const nextQuesMeetsEntryReqs = meetsRequirements({
    requirements: entryRequirements,
    answers,
    ageAndBday,
    lang: language
  });
  // If all the requirements for the next question in the sequence have been made, proceed by returning next ques ID
  if (nextQuesMeetsEntryReqs) return nextStepId;

  // Delete answers for following questions that don't meet reqs
  // These answers are no longer needed, and they exist because user clicked Previous and changes an existing answer
  const newAnswers: IAnswers = { ...answers };
  if (newAnswers[nextStepId]) {
    console.log(`Deleting answer ${nextStepId} because it is irrelevant = `, newAnswers[nextStepId]);
    delete newAnswers[nextStepId];
  }
  setAnswers(newAnswers);

  // If next questions's reqs haven't been made, then skip isplaying this question,
  // and re-run this function for the next question that follows ( until base case is met )
  return getStepId(props, direction, nextStepId);
}
