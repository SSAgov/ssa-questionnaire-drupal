import React from 'react';
import { useWizard } from 'use-wizard';
import { GlobalContext } from '../global/GlobalContext';
import {
  goToStep,
  formatStepsContent,
  stepsSequence,
  updateAnswers,
  calcPercentage,
  stepsContextCombinedPropsDefaults,
  associateStepsLogicWithContent,
  associateAccordionsLogicWithContent,
} from './utils';
import { useHardcodedData, app } from '@/constants';
import { fetchQuestionsContent, eligibilityQuestionsResponse } from './api';
import {
  IStepsContext,
  EDirection,
  IDrupalResponse,
  IStepsContextBaseProps,
  IUpdateAnswersProps,
  IAnswers,
  IStepsContentItem,
  IGtmProps,
  IAccordion,
  ELang,
  IStepsContentItemLogic,
  IStepsContentItemContent,
} from '@/interfaces';
import {
  formatAnswersForGtm,
  gtmInit,
  gtmOnActionClick,
  gtmOnNoResults,
  gtmOnResults,
  gtmOnStepChange,
  gtmFeedback,
  setAge,
  setBranch,
  setBranchAndAge,
} from '@/global-utils';
import * as replacement from './apps/replacement';
import * as feedback from './apps/feedback';

export const StepsContext = React.createContext<IStepsContext>({
  ...stepsContextCombinedPropsDefaults,
});

export const StepsProvider = ({ children }) => {
  const globalContextValues: any = React.useContext(GlobalContext);
  const [notInitialized, set__notInitialized] = React.useState<boolean>(true);
  const [stepsContent, setStepsContent] = React.useState<
    IStepsContentItem[] | []
  >([]);
  const [accordionsContent, setAccordionsContent] = React.useState<
    IAccordion[] | []
  >([]);
  const [step, wizard] = useWizard(stepsSequence);
  const [answers, setAnswers] = React.useState<IAnswers | {}>({});
  const [ageAndBday, set__ageAndBday] = React.useState({
    age: undefined,
    birthday: undefined,
  });
  const [loading, set__loading] = React.useState<boolean>(false);

  const showGlobalAlert =
    globalContextValues && globalContextValues?.showGlobalAlert
      ? globalContextValues?.showGlobalAlert
      : () => {};

  const language: ELang =
    globalContextValues && globalContextValues?.language
      ? globalContextValues?.language
      : ELang.en;

  React.useEffect(() => {
    if (notInitialized && stepsContent.length === 0) {
      if (app === 'replacement') {
        const langSpecifixStepsContent = replacement.stepsContent[language];
        const langSpecifixAccordionsContent =
          replacement.accordionsContent[language];
        const combinedStepsLogicAndContent = associateStepsLogicWithContent(
          replacement.stepsLogic,
          langSpecifixStepsContent,
        );
        const combinedAccordionsLogicAndContent =
          associateAccordionsLogicWithContent(
            replacement.accordionsLogic,
            langSpecifixAccordionsContent,
          );
        setStepsContent(combinedStepsLogicAndContent);
        setAccordionsContent(combinedAccordionsLogicAndContent);
      } else if (app === 'feedback') {
        const langSpecifixStepsContent = feedback.stepsContent[language];
        const combinedStepsLogicAndContent = associateStepsLogicWithContent(
          feedback.stepsLogic,
          langSpecifixStepsContent,
        );
        setStepsContent(combinedStepsLogicAndContent);
      } else if (app === 'eligibility') {
        getQuestionsDataFromCMS();
      } else {
        throw new Error(
          `Missing or invalid environmental variable for VITE_APP. Please, make sure to provide a valid value for VITE_APP variable.`,
        );
      }

      set__notInitialized(false);
    }
  }, []);

  // React.useEffect(() => { console.log('stepsContent = ', stepsContent); }, [stepsContent]);
  // React.useEffect(() => {  console.log('accordionsContent = ', accordionsContent); }, [accordionsContent]);
  // React.useEffect(() => { console.log('answers changed = ', answers); }, [answers]);
  // React.useEffect(() => { console.log('ageAndBday changed = ', ageAndBday); }, [ageAndBday]);

  React.useEffect(() => {
    if (app === 'eligibility') {
      setCookiesForApplyApp();
    }
  }, [answers, ageAndBday]);

  function setCookiesForApplyApp() {
    const branch = {
      '0': '18 years old or older',
      '1': 'Under 18',
    };

    const branchingQuesAnswered = answers['A'] && answers['A'].value;
    const isAdult = branchingQuesAnswered && answers['A'].value === '0';
    const isChild = branchingQuesAnswered && answers['A'].value === '1';
    const ageProvided = ageAndBday && ageAndBday.age && ageAndBday.age.years;

    if (!branchingQuesAnswered) return;

    if (isAdult) {
      if (ageProvided) {
        setBranchAndAge(branch[answers['A'].value], ageAndBday.age.years);
      } else {
        setBranch(branch[answers['A'].value]);
      }
    }

    if (isChild) {
      setBranchAndAge(branch['1'], 0);
    }
  }

  // This function should only fire for apps that have content in drupal
  async function getQuestionsDataFromCMS() {
    const deploymentPlatform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;
    if (!deploymentPlatform)
      throw new Error(
        `Missing or invalid environmental variable for VITE_DEPLOYMENT_PLATFORM. Please, make sure to provide a valid value for VITE_DEPLOYMENT_PLATFORM variable.`,
      );

    const onMobileLabServer: boolean = deploymentPlatform === 'mobile_lab';
    let rawQuestionsData: IDrupalResponse;

    if (useHardcodedData && app === 'eligibility') {
      if (onMobileLabServer) {
        rawQuestionsData = eligibilityQuestionsResponse;
      } else {
        rawQuestionsData = await fetchQuestionsContent(
          language,
          showGlobalAlert,
          set__loading,
        );
      }

      const formattedStepsData = formatStepsContent({
        questions: rawQuestionsData,
      });
      setStepsContent(formattedStepsData);
    } else {
      throw new Error(
        'Illegal invocation of getQuestionsDataFromCMS() function. Some of the required environmental variables may be missing or invalid.',
      );
    }
  }

  const baseProps: IStepsContextBaseProps = {
    step,
    wizard,
    answers,
    language,
    setAnswers,
    stepsContent,
    accordionsContent,
    currentStepContent: stepsContent.find(
      (x: IStepsContentItem) => x.id === step,
    ),
    stepsSequence,
    ageAndBday,
    set__ageAndBday,
    loading,
  };

  const gtmProps: IGtmProps = {
    ageAndBday,
    answers: formatAnswersForGtm(answers),
  };

  const gtmActions = {
    gtmInit: gtmInit.bind(this, gtmProps),
    gtmOnActionClick: gtmOnActionClick.bind(this, gtmProps),
    gtmOnResults: gtmOnResults.bind(this, gtmProps),
    gtmOnNoResults: gtmOnNoResults.bind(this, gtmProps),
    gtmOnStepChange: gtmOnStepChange.bind(this, gtmProps),
    gtmFeedback: gtmFeedback.bind(this, gtmProps),
  };

  const stepsContextCombinedProps: IStepsContext = {
    ...baseProps,
    ...gtmActions,
    progressPercentage: calcPercentage(baseProps),
    goToNextStep: () => goToStep(baseProps, EDirection.forward),
    goToPreviousStep: () => goToStep(baseProps, EDirection.backward),
    goToSpecificStep: (stepId) => wizard.goToStep(stepId),
    updateAnswers: (answerProps: IUpdateAnswersProps) =>
      updateAnswers(baseProps, answerProps),
    calcPercentage: () => calcPercentage(baseProps),
  };

  return (
    <StepsContext.Provider value={stepsContextCombinedProps}>
      {children}
    </StepsContext.Provider>
  );
};
