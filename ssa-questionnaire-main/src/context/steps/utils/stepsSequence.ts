import { app } from '@/constants';
import { replacementContent } from '../apps/replacement';
import { eligibilityContent } from '../apps/eligibility';
import { feedbackContent } from '../apps/feedback';
import { TStep } from '@/interfaces';

const appSpecificStepSequences = {
  replacement: replacementContent.stepsSequence,
  eligibility: eligibilityContent.stepsSequence,
  feedback: feedbackContent.stepsSequence,
};

export const stepsSequence: TStep[] = appSpecificStepSequences[app];
