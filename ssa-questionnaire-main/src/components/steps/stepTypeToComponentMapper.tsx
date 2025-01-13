import { EStepType, IStepsContentItem, IStepsContext } from '@/interfaces';
import { pagesMap } from '../pages';
import { Question } from '../questions';

export function stepTypeToComponentMapper(stepsContent: IStepsContentItem[]) {
  const componentsMap = {};

  stepsContent.forEach((step) => {
    componentsMap[step.id] = { ...step };
    const stepType = step.type;
    if (stepType === EStepType.page) {
      // componentsMap[stepId].type = stepType;
      componentsMap[step.id].component = pagesMap[step.id];
    }

    if (stepType === EStepType.question) {
      // componentsMap[stepId].type = stepType;
      componentsMap[step.id].component = (
        <Question
          {...step}
          //  questionType={componentsMap[step.id].questionType}
        />
      );
    }
  });

  return componentsMap;

  // const mapper = {
  //   landing: {
  //     type: 'page',
  //     component: <Landing step={step} wizard={wizard} />,
  //   },
  //   intro: {
  //     type: 'page',
  //     component: <Intro step={step} wizard={wizard} />,
  //   },
  //   question_E: {
  //     type: 'question',
  //     component: (
  //       <Question type="multiple_choice" />
  //       // <Question step={step} wizard={wizard} type="multiple_choice" />
  //     ),
  //   },
  //   question_A: {
  //     type: 'question',
  //     entryRequirements: [
  //       {
  //         responses: [{ question: 'question_E', answers: ['adult'] }],
  //       },
  //     ],
  //     component: (
  //       <Question step={step} wizard={wizard} type="multiple_choice" />
  //     ),
  //   },
  //   question_F: {
  //     type: 'question',
  //     entryRequirements: [
  //       {
  //         responses: [{ question: 'question_E', answers: ['child'] }],
  //       },
  //     ],
  //     component: (
  //       <Question step={step} wizard={wizard} type="multiple_choice" />
  //     ),
  //   },
  // };
}
