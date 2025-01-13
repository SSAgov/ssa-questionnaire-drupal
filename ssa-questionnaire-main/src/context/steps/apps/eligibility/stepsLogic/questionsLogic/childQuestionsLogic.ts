import { YES, NO } from '@/constants';
import { IQuestionLogicItem } from '@/interfaces';

export const mockChildQuestionsData: IQuestionLogicItem[] = [];
// export const mockChildQuestionsData = [
//   // question_F - Are you applying for yourself or assisting someone else?
//   {
//     id: 'question_F',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_E', answers: ['child'] }],
//       },
//     ],
//   },
//   // question_I - Is the person you are assisting a U.S. citizen?
//   {
//     id: 'question_I',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [
//           { question: 'question_E', answers: ['child'] },
//           { question: 'question_F', answers: ['someone'] },
//         ],
//       },
//     ],
//   },
//   // question_C2 - Do they have a U.S. mailing address?
//   {
//     id: 'question_C2',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_I', answers: [YES] }],
//       },
//     ],
//   },
//   // question_D2- Do they currently live in the U.S.?
//   {
//     id: 'question_D2',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_C2', answers: [NO] }],
//       },
//     ],
//   },
//   // question_W - Does the applicant have an unexpired driver's license, state-issued identification, passport or passport card?
//   {
//     id: 'question_W',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_C2', answers: [YES] }],
//       },
//       {
//         responses: [{ question: 'question_D2', answers: [YES] }],
//       },
//     ],
//   },
//   // question_T - Do you have an unexpired driver's license, state-issued identification, passport or passport card?
//   {
//     id: 'question_T',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_W', answers: [YES, NO] }],
//       },
//     ],
//   },
//   // question_CQ2 - ASK CHANGE QUESTIONS
//   {
//     id: 'question_CQ2',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_T', answers: [NO] }],
//       },
//     ],
//   },
//   // question_HH - Are you the parent or adoptive parent?
//   {
//     id: 'question_HH',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_T', answers: [YES] }],
//       },
//     ],
//   },
//   // question_II - Are you a court appointed legal guardian?
//   {
//     id: 'question_II',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_HH', answers: [NO] }],
//       },
//     ],
//   },
//   // question_AA- Will the child need to make changes to their card?
//   {
//     id: 'question_AA',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_HH', answers: [YES] }],
//       },
//       {
//         responses: [{ question: 'question_II', answers: [YES] }],
//       },
//     ],
//   },
//   // question_CQ - Are they changing their name?
//   {
//     id: 'question_CQ',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_AA', answers: [YES] }],
//       },
//     ],
//   },
//   // question_R - Do they need to correct their place of birth?
//   {
//     id: 'question_R',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_CQ', answers: [YES, NO] }],
//       },
//     ],
//   },
//   // question_R2 - Do they need to correct their date of birth?
//   {
//     id: 'question_R2',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_R', answers: [YES, NO] }],
//       },
//     ],
//   },
//   // question_R3 - Are they updating their citizenship or legal status?
//   {
//     id: 'question_R3',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_R2', answers: [YES, NO] }],
//       },
//     ],
//   },
//   // question_R4 - Do they need to correct their parents names?
//   {
//     id: 'question_R4',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_R3', answers: [YES, NO] }],
//       },
//     ],
//   },
//   // question_R5 - Are they updating their gender?
//   {
//     id: 'question_R5',
//     questionType: 'multiple_choice',
//     entryRequirements: [
//       {
//         responses: [{ question: 'question_R4', answers: [YES, NO] }],
//       },
//     ],
//   },
// ];
