import { ADULT_CITIZEN, YES } from '@/constants';
import { IAccordion, IProgressiveRevealeInputs } from '@/interfaces';
import { DRIVERS_LICENSE, STATE_ID } from '../../constants';
import {
  changeQuestionAnswer,
  isStateIdEligible,
  isStateVitalsParticipating,
  marriedNameChangeAnswer,
} from '../../replacementUtils';

export const accordion_01: IAccordion = {
  id: '01',
  title: 'State-issued ID',
  body: `old content...
      <p>
        You'll need information from your ID to fill out the online application. 
      </p>
      <br/>
      <p>
        We accept: 
      </p>
      <ul>
        <li>Driver's license</li>
        <li>Nondriver's ID card</li>
      </ul>
      `,
  requirements: [
    {
      id: '1-issnrc-ac-1',
      determineStateIdEligibility: (state: string, docType: string) =>
        isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).noChanges,
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
    {
      id: '1-issnrc-ac-2',
      determineStateIdEligibility: (state: string, docType: string) =>
        isStateIdEligible(state, docType),
      changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
        changeQuestionAnswer(cqAnswer).onlyName,
      marriedNameChangeAnswerBreakdown: (
        marriedAnswer: IProgressiveRevealeInputs,
      ) => marriedNameChangeAnswer(marriedAnswer).changingNameBecauseMarried,
      determineStateVitalsParticipation: (state: string) =>
        isStateVitalsParticipating(state),
      responses: [
        ...ADULT_CITIZEN,
        { question: 'C', answers: [YES] },
        { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
      ],
    },
  ],
};
