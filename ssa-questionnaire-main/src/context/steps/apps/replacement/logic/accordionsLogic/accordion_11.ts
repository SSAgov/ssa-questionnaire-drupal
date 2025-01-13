import { ADULT_CITIZEN, YES } from '@/constants';
import { IAccordion, IProgressiveRevealeInputs } from '@/interfaces';
import { DRIVERS_LICENSE, STATE_ID } from '../../constants';
import {
  changeQuestionAnswer,
  isStateIdEligible,
  isStateVitalsParticipating,
  marriedNameChangeAnswer,
} from '../../replacementUtils';

export const accordion_11 = {
  id: '11',
  requirements: [
    // Adult citizen - Condition 2
    {
      id: '11-ossnap-ac-1',
      determineStateIdEligibility: (state: string, docType: string) =>
        isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).includesName,
      marriedNameChangeAnswerBreakdown: (
        marriedAnswer: IProgressiveRevealeInputs,
      ) => marriedNameChangeAnswer(marriedAnswer).changingNameBecauseMarried,
      determineStateVitalsParticipation: (state: string) =>
        !isStateVitalsParticipating(state),
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
  ],
};
