import {
  EGTMEvent,
  IAnswers,
  IGtmProps,
  IEmitGtmEventProps,
  IGtmResult,
  IOnStepChangeProps,
  IDateInputs,
} from '@/interfaces';

// export function gtmInit(ctxProps: IGtmProps): void {
//   emitGtmEvent({
//     eventName: EGTMEvent.begin_benefits_quest,
//     addOnce: true,
//     payload: ctxProps,
//   });
// }

export function gtmInit(): void {
  emitGtmEvent({
    eventName: EGTMEvent.begin_benefits_quest,
    addOnce: true,
  });
}

export function gtmOnActionClick(
  ctxProps: IGtmProps,
  label: string,
  url: string,
): void {
  let link_text = label;
  let link_url = url;
  const payload = {
    ...ctxProps,
    click_type: 'cta',
    event_category: 'click',
    event_label: link_text,
    event_name: `${link_text.toLowerCase().split(' ').join('_')}_quest`,
    link_text,
    link_url,
  };

  emitGtmEvent(EGTMEvent.click, { ...payload });
}

export function gtmOnResults(ctxProps: IGtmProps, results: IGtmResult[]): void {
  emitGtmEvent({
    eventName: EGTMEvent.complete_benefits_quest,
    payload: { results, ...ctxProps },
    upsert: true,
  });
}

export function gtmOnNoResults(ctxProps: IGtmProps): void {
  emitGtmEvent({
    eventName: EGTMEvent.defer_benefits_quest,
    upsert: true,
    payload: { ...ctxProps },
  });
}

export function gtmOnStepChange(
  ctxProps: IGtmProps,
  { stepId, title, dir, targetStep }: IOnStepChangeProps,
): void {
  const payload = {
    ...ctxProps,
    direction: dir === 1 ? 'forward' : 'backward',
    page_location: `${window.location.href}#ssa-eligibility-wizard`,
    page_path: stepId,
    page_title: title || stepId,
    step: targetStep,
  };

  emitGtmEvent(EGTMEvent.step_benefits_quest, { ...payload });
}

export function gtmFeedback(ctxProps: IGtmProps, props: any): void {
  const payload = {
    ...ctxProps,
    ...props,
    page_location: `${window.location.href}`,
  };

  emitGtmEvent(EGTMEvent.feedback_quest, { ...payload });
}

export function emitGtmEvent(ctxProps: IEmitGtmEventProps): void;
export function emitGtmEvent(eventName: EGTMEvent, payload?: {}): void;
export function emitGtmEvent(
  propsOrEventName: EGTMEvent | IEmitGtmEventProps,
  payloadOrNull?: null | {},
): void {
  try {
    if (!window || !window?.dataLayer || !Array.isArray(window?.dataLayer))
      return;
    // Check overload signature
    const withProps = typeof propsOrEventName !== 'string';
    const eventName: string = withProps
      ? propsOrEventName.eventName
      : propsOrEventName;
    const payload: {} = withProps ? propsOrEventName.payload : payloadOrNull;
    const indexOfExistingEvent = window.dataLayer
      .map((x) => x.event)
      .indexOf(eventName);
    const dLEvenExists = indexOfExistingEvent !== -1;
    let newEvent = { event: eventName };

    // If event only needs to be added once
    if (withProps && propsOrEventName.addOnce && dLEvenExists) return;

    // Add payload if it exists
    if (payload) newEvent = { ...newEvent, ...payload };

    if (withProps && propsOrEventName.upsert && dLEvenExists) {
      window.dataLayer.splice(indexOfExistingEvent, 1, newEvent);
      return;
    }

    window.dataLayer.push(newEvent);
  } catch (error) {
    console.log('Error while adding event to dataLayer = ', error);
  }
}

// Format answers for GTM to looks something like this: "A 0, B 1/12/1980, D 0, E 1, G 0, H 0, I 1, J 1, K 1, L 3.""
export function formatAnswersForGtm(answers: IAnswers): string {
  let result = ``;

  Object.keys(answers).forEach((questionId, i, arr) => {
    const answer = answers[questionId];
    if (!answer.value)
      return console.error(`Value prop is missing within answer`);

    if (typeof answer.value === 'string') {
      // Hnadle string answer
      result += `${questionId} ${answer.value}`;
    } else if (
      typeof answer.value === 'object' &&
      answer.value.hasOwnProperty('month') &&
      answer.value.hasOwnProperty('day') &&
      answer.value.hasOwnProperty('year')
    ) {
      const dateAnswerVal = answer.value as IDateInputs;
      // Handling a date question
      result += `${questionId} ${dateAnswerVal.month}/${dateAnswerVal.day}/${dateAnswerVal.year}`;
    } else {
      // Handle any other unknown type question
      result += `${questionId} ${JSON.stringify(answer.value)}`;
    }

    // Handle adding comma or period
    if (i + 1 < arr.length) {
      result += `, `;
    } else if (i + 1 === arr.length) {
      result += `.`;
    }
  });

  return result;
}
