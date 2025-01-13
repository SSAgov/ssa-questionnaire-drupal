import { EIcon } from '@/components/common';
import {
  YES,
  NO,
  ADULT,
  ADULT_CITIZEN,
  ADULT_NON_CITIZEN,
  CHILD,
  CHILD_CITIZEN,
  CHILD_NON_CITIZEN,
  UNANSWERED,
} from '@/constants';
import { IProgressiveRevealeInputs, IStepsContentItem } from '@/interfaces';
import { DRIVERS_LICENSE, NEITHER, STATE_ID } from '../constants';
import {
  AAQuestionAnswer,
  changeQuestionAnswer,
  isStateIdEligible,
  isStateVitalsParticipating,
  marriedNameChangeAnswer,
  NCQuestionAnswer,
  NDAnswerBreakdown,
} from '../replacementUtils';

export const mockPausePointsData: IStepsContentItem[] = [
  {
    type: 'page',
    id: 'pause_issnrc',
    info: 'mySSA',
    pausePoint: {
      title: `Request your card online`,
      subTitle: `You'll need a document showing:`,
      signingIn: true,
      call: true,
      mail: true,
      accordions: ['01', '02'],
      cta: {
        icon: EIcon.laptop,
        title: 'Apply using your Social Security account',
        body: {
          type: 'html',
          html: `<p>The fastest way to receive your replacement card is to apply online. Sign in or create an account to submit a request.</p>`,
        },
        btnTxt: 'Apply online',
        btnCb: function handleCtaClick(
          _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) {
          window.open('https://secure.ssa.gov/RIL/SiView.action', '_blank');
        },
      },
    },
    entryRequirements: [
      {
        determineStateIdEligibility: (state: string, docType: string) =>
          isStateIdEligible(state, docType),
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).noChanges,
        responses: [...ADULT_CITIZEN],
      },
      {
        determineStateVitalsParticipation: (state: string) =>
          isStateVitalsParticipating(state),
        marriedNameChangeAnswerBreakdown: (
          marriedAnswer: IProgressiveRevealeInputs,
        ) => marriedNameChangeAnswer(marriedAnswer).changingNameBecauseMarried,
        responses: [...ADULT_CITIZEN],
      },
    ],
  },
  {
    type: 'page',
    id: 'pause_ossnap',
    info: 'oSSNAP',
    pausePoint: {
      title: `Get started by applying online`,
      subTitle: `You'll need a document showing:`,
      signingIn: false,
      call: true,
      mail: true,
      accordions: ['03', '04', '05', '06', '07', '11', '12', '13', '14'],
      cta: {
        icon: EIcon.office,
        title: 'How to get a replacement card',
        body: {
          type: 'html',
          html: `
          <ol>
            <li>Submit the online application</li>
            <li>Visit a local office with your documents</li>
            <li>Receive the card by mail within 14 days after we approve your request</li>
          <ol>`,
        },
        btnTxt: 'Start application',
        btnCb: function handleCtaClick(
          _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) {
          window.open(
            'https://secure.ssa.gov/ossnap/public/landingOSsnap',
            '_blank',
          );
        },
      },
    },
    entryRequirements: [
      /*=======================================================================*/
      /*=== Doesn't have DL nor State ID AND only changing name or nothing === */
      /*=======================================================================*/
      {
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).noneOrOnlyName,
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [YES] },
          { question: 'G', answers: [NEITHER] },
        ],
      },
      /*===================================================================*/
      /*=== Non-eligible DL/State ID AND only changing name or nothing === */
      /*===================================================================*/
      {
        // NOT eligible drivers license nor state ID
        determineStateIdEligibility: (state: string, docType: string) =>
          !isStateIdEligible(state, docType),
        // Changing only name or nothing
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).noneOrOnlyName,
        responses: [
          ...ADULT_CITIZEN,
          // { question: 'C', answers: [YES, NO] },
          // Assumes that question D is not answered at all
          { question: 'C', answers: [YES] },
          // { question: 'D', answers: [UNANSWERED, YES] },
          { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
        ],
      },
      /*==============================================*/
      /*=== Changing name NOT because got married === */
      /*==============================================*/
      {
        // Has eligible drivers license or state ID
        determineStateIdEligibility: (state: string, docType: string) =>
          isStateIdEligible(state, docType),
        // Only changing a name
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).onlyName,
        // Not changing name because got married
        marriedNameChangeAnswerBreakdown: (
          marriedAnswer: IProgressiveRevealeInputs,
        ) =>
          marriedNameChangeAnswer(marriedAnswer).notChangingNameBecauseMarried,
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [YES, NO] },
          { question: 'D', answers: [UNANSWERED, YES] },
          { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
        ],
      },
      /*=======================================================================*/
      /*=== Changing name because got married in a NON-participating state === */
      /*=======================================================================*/
      {
        // Has eligible drivers license or state ID
        determineStateIdEligibility: (state: string, docType: string) =>
          isStateIdEligible(state, docType),
        // Only changing a name
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).onlyName,
        // Changing name because got married
        marriedNameChangeAnswerBreakdown: (
          marriedAnswer: IProgressiveRevealeInputs,
        ) => marriedNameChangeAnswer(marriedAnswer).changingNameBecauseMarried,
        // State where got married is NOT participating in vitals program
        determineStateVitalsParticipation: (state: string) =>
          !isStateVitalsParticipating(state),
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [YES, NO] },
          { question: 'D', answers: [UNANSWERED, YES] },
          { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
        ],
      },
      /*============================================================*/
      /*=== Only changing name or nothing and D is not answered === */
      /*============================================================*/
      {
        NDAnswerBreakdown: (ndAnswer: string[]) =>
          NDAnswerBreakdown(ndAnswer).noneOrOnlyName,
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      /*============================================================*/
      /*=== Only changing name or nothing and D is not answered === */
      /*============================================================*/
      {
        AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
          AAQuestionAnswer(aaAnswer).noneOrOnlyName,
        responses: [...CHILD_CITIZEN, { question: 'C', answers: [YES] }],
      },
      {
        NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
          NCQuestionAnswer(naAnswer).noneOrOnlyName,
        responses: [...CHILD_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
    ],
  },
  {
    type: 'page',
    id: 'pause_nonet',
    info: 'Office visit',
    pausePoint: {
      title: `Request a replacement at a local office`,
      subTitle: `You'll need a document showing:`,
      signingIn: false,
      call: true,
      mail: true,
      accordions: [
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '12',
        '13',
        '14',
        '16',
      ],
      cta: {
        icon: EIcon.office,
        title: 'Visit us in person',
        body: {
          type: 'html',
          html: `
          <p>
            During your visit, we'll review your documents and help you submit an application.
          </p>
          <br/>
          <p>
            You will receive the card by mail within 14 days after we approve your request. 
          </p>`,
        },
        btnTxt: 'Find a local office',
        btnCb: function handleCtaClick(
          _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) {
          window.open('https://secure.ssa.gov/ICON/main.jsp', '_blank');
        },
      },
    },
    entryRequirements: [
      /*===================================================================================*/
      /*=== Adult citizen no DL/IDs, other than name or multiple AND D is NOT answered === */
      /*===================================================================================*/
      {
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).otherThanNameOrMultiple,
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [YES] },
          { question: 'G', answers: [NEITHER] },
        ],
      },
      /*==================================================*/
      /*=== Adult citizen no DL/IDs AND D is answered === */
      /*==================================================*/
      {
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
          { question: 'G', answers: [NEITHER] },
        ],
      },
      /*==============================================================================================*/
      /*=== Adult citizen with NON-eligible ID, other than name or multiple AND D is NOT answered === */
      /*==============================================================================================*/
      {
        determineStateIdEligibility: (state: string, docType: string) =>
          !isStateIdEligible(state, docType),
        changeQuestionAnswerBreakdown: (cqAnswer: string[]) =>
          changeQuestionAnswer(cqAnswer).otherThanNameOrMultiple,
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [YES] },
          { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
        ],
      },
      /*=============================================================*/
      /*=== Adult citizen with NON-eligible ID AND D is answered === */
      /*=============================================================*/
      {
        determineStateIdEligibility: (state: string, docType: string) =>
          !isStateIdEligible(state, docType),
        responses: [
          ...ADULT_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
          { question: 'G', answers: [DRIVERS_LICENSE, STATE_ID] },
        ],
      },
      /*==============================================================================*/
      /*=== Adult NON-citizen only changing name or nothing and D is NOT answered === */
      /*==============================================================================*/
      {
        NDAnswerBreakdown: (ndAnswer: string[]) =>
          NDAnswerBreakdown(ndAnswer).otherThanNameOrMultiple,
        responses: [...ADULT_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      /*============================================*/
      /*=== Adult NON-citizen AND D is answered === */
      /*============================================*/
      {
        responses: [
          ...ADULT_NON_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
        ],
      },
      /*==========================================================================*/
      /*=== Child citizen only changing name or nothing and D is NOT answered === */
      /*==========================================================================*/
      {
        AAQuestionAnswerBreakdown: (aaAnswer: string[]) =>
          AAQuestionAnswer(aaAnswer).otherThanNameOrMultiple,
        responses: [...CHILD_CITIZEN, { question: 'C', answers: [YES] }],
      },
      /*=========================================*/
      /*=== Child citizen AND D is answered === */
      /*=========================================*/
      {
        responses: [
          ...CHILD_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
        ],
      },
      /*==============================================================================*/
      /*=== Child NON-citizen only changing name or nothing and D is NOT answered === */
      /*==============================================================================*/
      {
        NCQuestionAnswerBreakdown: (naAnswer: string[]) =>
          NCQuestionAnswer(naAnswer).otherThanNameOrMultiple,
        responses: [...CHILD_NON_CITIZEN, { question: 'C', answers: [YES] }],
      },
      /*============================================*/
      /*=== Child NON-citizen AND D is answered === */
      /*============================================*/
      {
        responses: [
          ...CHILD_NON_CITIZEN,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [YES] },
        ],
      },
    ],
  },
  {
    type: 'page',
    id: 'pause_FBU',
    info: 'Contact an FBU',
    pausePoint: {
      title: `Contact a Federal Benefits Unit`,
      subTitle: `You may be asked to provide:`,
      signingIn: false,
      call: true,
      mail: false,
      accordions: ['03', '04', '05', '15'],
      cta: {
        icon: EIcon.office,
        title: 'Next step',
        body: {
          type: 'html',
          html: `
          <p>
            Contact a Federal Benefits Unit if you live overseas to apply for a replacement card.
          </p>`,
        },
        btnTxt: 'Find a Federal Benefits Unit',
        btnCb: function handleCtaClick(
          _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) {
          window.open('https://www.ssa.gov/foreign/foreign.htm', '_blank');
        },
      },
    },
    entryRequirements: [
      {
        responses: [
          ADULT,
          { question: 'C', answers: [NO] },
          { question: 'D', answers: [NO] },
        ],
      },
      { responses: [...CHILD_CITIZEN, { question: 'D', answers: [NO] }] },
      { responses: [...CHILD_NON_CITIZEN, { question: 'D', answers: [NO] }] },
    ],
  },
  {
    type: 'page',
    id: 'pause_notprpap',
    info: 'Office visit',
    pausePoint: {
      title: `You may not be elegible`,
      signingIn: false,
      call: false,
      mail: false,
      notEligible: true,
      // cta: {
      //   icon: EIcon.phone,
      //   title: 'Call us',
      //   body: `
      //   <p>
      //     Based on your answers, you may not be eligible to apply for this replacement card. We need to learn more about your situation.
      //   </p> <br/>
      //   <p>
      //     Call us if you think you're eligible to apply, or if you have questions.
      //   </p> <br/>
      //   <p>
      //     Call <a href="tel:+18007721213" class="ssa-hyperlink" >+1 800-772-1213</a>
      //   </p> <br/>
      //   <p>
      //     Call TTY <a href="tel:+18003250778" class="ssa-hyperlink" >+1 800-325-0778</a> if you're deaf or hard of hearing.
      //   </p>
      //   `,
      // },
    },
    entryRequirements: [
      { responses: [CHILD, { question: 'II', answers: [NO] }] },
    ],
  },
];
