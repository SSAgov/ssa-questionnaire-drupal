import { YES, NO } from '@/constants';
import { ECategory, IResult, TT } from '@/interfaces';

export function mockResultsData(t: TT): IResult[] {
  return [
    /*=== RESULTS ===*/
    {
      id: 'result_myssa',
      label: 'mySSA',
      title: 'mySSA',
      category: ECategory.myssa,
      requirements: [
        {
          responses: [
            { question: 'question_E', answers: ['adult'] },
            // ADULT
            { question: 'question_A', answers: [YES] },
            { question: 'question_C', answers: [YES, NO] },
            { question: 'question_D', answers: ['unanswered', YES] },
            { question: 'question_G', answers: [YES] },
            { question: 'question_H', answers: ['md', 'dc'] },
            { question: 'question_CQ1', answers: ['name', 'none'] },
            { question: 'question_L', answers: ['unanswered', YES] },
            { question: 'question_M', answers: ['unanswered', 'md', 'va'] },
          ],
        },
      ],
      // category: null,
      // action: null,
      // title: 'mySSA',
    },
    {
      id: 'result_ossnap',
      label: 'oSSNAP',
      title: 'oSSNAP',
      category: ECategory.ossnap,
      requirements: [
        {
          responses: [
            { question: 'question_E', answers: ['adult', 'child'] },
            // ADULT
            { question: 'question_A', answers: ['unanswered', YES, NO] },
            { question: 'question_C', answers: ['unanswered', YES, NO] },
            { question: 'question_D', answers: ['unanswered', YES] },
            { question: 'question_G', answers: ['unanswered', YES, NO] },
            {
              question: 'question_H',
              answers: ['unanswered', 'va', 'md', 'dc'],
            },
            {
              question: 'question_CQ1',
              answers: ['unanswered', 'multiple', 'name'],
            },
            { question: 'question_L', answers: ['unanswered', YES, NO] },
            { question: 'question_M', answers: ['unanswered', 'dc'] },
            // CHILD
            { question: 'question_F', answers: ['unanswered', 'someone'] },
            { question: 'question_I', answers: ['unanswered', YES] },
            { question: 'question_C2', answers: ['unanswered', YES, NO] },
            { question: 'question_D2', answers: ['unanswered', YES] },
            { question: 'question_W', answers: ['unanswered', YES, NO] },
            { question: 'question_T', answers: ['unanswered', YES] },
            { question: 'question_HH', answers: ['unanswered', YES, NO] },
            { question: 'question_II', answers: ['unanswered', YES] },
            { question: 'question_AA', answers: ['unanswered', YES, NO] },
            { question: 'question_CQ', answers: ['unanswered', YES, NO] },
            { question: 'question_R', answers: ['unanswered', YES, NO] },
            { question: 'question_R1', answers: ['unanswered', YES, NO] },
            { question: 'question_R2', answers: ['unanswered', YES, NO] },
            { question: 'question_R3', answers: ['unanswered', YES, NO] },
            { question: 'question_R4', answers: ['unanswered', YES, NO] },
            { question: 'question_R5', answers: ['unanswered', YES, NO] },
          ],
        },
      ],
    },
    {
      id: 'result_officeVisit',
      label: 'Office Visit',
      title: 'Office Visit',
      category: ECategory.office_visit,
      requirements: [
        {
          responses: [
            {
              question: 'question_E',
              answers: ['unanswered', 'adult', 'child'],
            },
            // ADULT
            { question: 'question_A', answers: ['unanswered', YES] },
            { question: 'question_C', answers: ['unanswered', NO] },
            { question: 'question_D', answers: ['unanswered', NO] },
            // CHILD
            {
              question: 'question_F',
              answers: ['unanswered', 'self', 'someone'],
            },
            { question: 'question_I', answers: ['unanswered', YES] },
            { question: 'question_C2', answers: ['unanswered', YES, NO] },
            { question: 'question_D2', answers: ['unanswered', YES, NO] },
            { question: 'question_W', answers: ['unanswered', YES, NO] },
            { question: 'question_T', answers: ['unanswered', NO] },
            { question: 'question_CQ2', answers: ['unanswered', YES, NO] },
          ],
        },
      ],
    },
    {
      id: 'result_call',
      label: 'Call for Support',
      title: 'Call for Support',
      category: ECategory.call,
      requirements: [
        {
          responses: [
            { question: 'question_E', answers: ['child'] },
            // CHILD
            { question: 'question_F', answers: ['someone'] },
            { question: 'question_I', answers: [YES] },
            { question: 'question_C2', answers: [YES] },
            { question: 'question_D2', answers: ['unanswered', YES] },
            { question: 'question_W', answers: [YES, NO] },
            { question: 'question_T', answers: [YES] },
            { question: 'question_HH', answers: [NO] },
            { question: 'question_II', answers: [NO] },
          ],
        },
      ],
    },
  ];
}
