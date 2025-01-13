import { Breadcrumbs, CTA, EBreadcrumbType } from '@/components/common';
import { app } from '@/constants';
import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import { meetsRequirements } from '@/context/steps/utils';
import { replaceDynamicVariable } from '@/global-utils';
import {
  EDirection,
  ELetterCase,
  IAccordion,
  IProgressiveRevealeInputs,
  IStepsContentItem,
} from '@/interfaces';
import React from 'react';
import { Accordions2 } from './Accordions2';
import { Call } from './Call';
import { Docs } from './Docs';
import { Mail } from './Mail';
import { NotEligible } from './NotEligible';
import styles from './PausePoint.module.css';
import { SigningIn } from './SigningIn';

export const PausePoint = () => {
  const {
    step,
    accordionsContent,
    gtmOnStepChange,
    goToPreviousStep,
    stepsContent,
    answers,
  } = React.useContext(StepsContext);
  const { t } = React.useContext(GlobalContext);
  const { ageAndBday, language } = React.useContext(StepsContext);

  const [stepsContentItem, set__stepsContentItem] =
    React.useState<IStepsContentItem>();

  React.useEffect(() => {
    const foundStep = stepsContent.find((x) => x.id === step);
    if (foundStep) {
      set__stepsContentItem(foundStep);
    }
  }, [stepsContent]);

  function handleBackBreadcrumbClick() {
    const targetStep = goToPreviousStep();
    gtmOnStepChange({
      targetStep,
      dir: EDirection.backward,
      stepId: step,
      title: stepsContentItem.info,
    });
  }

  const breadcrumbs = [
    {
      text: t('back_to_prev_ques'),
      type: EBreadcrumbType.with_custom_click_handler,
      cb: handleBackBreadcrumbClick,
    },
  ];

  if (!stepsContentItem || !stepsContentItem.pausePoint) return null;

  const {
    title,
    subTitle,
    docs,
    signingIn,
    call,
    mail,
    notEligible,
    cta: _cta,
    accordions: _accordions,
  } = stepsContentItem.pausePoint;

  // For pause_notprpap pages only, add additional text for non-adults
  function getCta() {
    const whoReplacementCardIsForQID = 'E';
    const adultAnswer = '0';
    const childAnswer = '1';
    if (app === 'replacement' && step === 'pause_notprpap') {
      if (
        !answers[whoReplacementCardIsForQID] ||
        !answers[whoReplacementCardIsForQID].value
      )
        return _cta;
      const whoReplacementCardIsForAnswer =
        answers[whoReplacementCardIsForQID].value;
      if (whoReplacementCardIsForAnswer === adultAnswer) return _cta;
      if (whoReplacementCardIsForAnswer === childAnswer) {
        const addBody = t('pause_point_additinal_text');
        return {
          ..._cta,
          body: {
            type: 'html',
            html: `${_cta.body}${addBody}`,
          },
        };
      }
    }
    return _cta;
  }

  // Filter through accordions and only display those that meet reqs
  function getAccordionsThatMeetReqs() {
    if (!_accordions) return null;

    const prePopulatedAccordions = _accordions
      .map((id) => {
        const foundAccordion = accordionsContent.find((x) => x.id === id);
        if (foundAccordion) {
          const accordion01Id = '01';
          const hasDynamicContent = id === accordion01Id;
          if (hasDynamicContent) return handleDynamicContent(foundAccordion);
          return foundAccordion;
        }
        return null;
      })
      .filter((x) => x !== null);

    return prePopulatedAccordions.filter((accordion) => {
      if (!accordion.requirements) return true;

      const reqsMet = meetsRequirements({
        requirements: accordion.requirements,
        answers,
        ageAndBday,
        lang: language,
      }) as boolean;

      return reqsMet;
    });
  }

  function handleDynamicContent(accordion: IAccordion) {
    const newAccordion = { ...accordion };
    const accordion01Id = '01';

    if (accordion.id === accordion01Id) {
      const dlOrStateIdQuestionId = 'G';
      const driversLicense = '0';
      const stateId = '1';

      const answerValue = answers[dlOrStateIdQuestionId]
        ?.value as IProgressiveRevealeInputs;
      if (
        !answerValue ||
        answerValue?.mainInput === null ||
        answerValue?.mainInput === undefined
      )
        return newAccordion;
      const isDriversLicense = answerValue?.mainInput === driversLicense;
      const isStateId = answerValue?.mainInput === stateId;

      const idType = isDriversLicense
        ? t('drivers_license', ELetterCase.none)
        : t('id_card', ELetterCase.none);
      newAccordion.body = replaceDynamicVariable(
        'id_type',
        newAccordion.body,
        idType,
      );
    }
    return newAccordion;
  }

  // const cta = getCta();
  const accordions = getAccordionsThatMeetReqs();

  const subtitleAndAccordionsExist =
    subTitle && accordions && accordions.length;
  const noBottomSections = !docs && !signingIn && !call && !mail;

  return (
    <div className={styles.PausePoint}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className={styles.title}>{title}</h1>
      {subtitleAndAccordionsExist ? (
        <h2 className={styles.subTitle}>{subTitle}</h2>
      ) : null}
      {accordions ? <Accordions2 accordions={accordions} /> : null}
      {/* {accordions ? <Accordions accordions={accordions} /> : null} */}
      {docs ? <Docs /> : null}
      {_cta ? (
        <CTA
          {..._cta}
          offsetSubtitleAndAccordions={!subtitleAndAccordionsExist}
          offsetLackOfBottomSection={noBottomSections}
        />
      ) : null}
      {signingIn ? <SigningIn /> : null}
      {mail ? <Mail /> : null}
      {call ? <Call /> : null}
      {notEligible ? <NotEligible /> : null}
    </div>
  );
};
