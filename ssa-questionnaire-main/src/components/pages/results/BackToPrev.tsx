import { Breadcrumbs, EBreadcrumbType } from '@/components/common';
import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import { EDirection } from '@/interfaces';
import React from 'react';

export const BackToPrev = () => {
  if (!StepsContext) return null;
  const { t } = React.useContext(GlobalContext);
  const { step, goToPreviousStep, gtmOnStepChange, currentStepContent } =
    React.useContext(StepsContext);

  function handleBackBreadcrumbClick() {
    const targetStep = goToPreviousStep();
    gtmOnStepChange({
      targetStep,
      dir: EDirection.backward,
      stepId: step,
      title: currentStepContent.info,
    });
  }

  const breadcrumbs = [
    {
      text: t('back_to_prev_ques'),
      type: EBreadcrumbType.with_custom_click_handler,
      cb: handleBackBreadcrumbClick,
    },
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbs} />;
};
