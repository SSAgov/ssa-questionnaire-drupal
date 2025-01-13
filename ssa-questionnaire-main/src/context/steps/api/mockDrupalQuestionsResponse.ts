import { IEligibilityQuestionsResponse } from "@/interfaces";

export const mockDrupalQuestionsResponse: IEligibilityQuestionsResponse = {
  jsonapi: {
    version: '1.0',
    meta: {
      links: { self: { href: 'http://jsonapi.org/format/1.0/' } },
    },
  },
  data: [
    {
      type: 'question--eligibility',
      id: 'af43fcde-af97-4a32-ae04-e3168b650a15',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/af43fcde-af97-4a32-ae04-e3168b650a15',
        },
      },
      attributes: {
        drupal_internal__qid: 41,
        status: true,
        question_id: 'I',
        title:
          'When did the condition start to affect your daily activities and ability to work?',
        answers: [
          { id: 0, title: 'Before age 22' },
          { id: 1, title: 'After age 22' },
        ],
        subTitle: null,
        info: 'One of our benefits looks at whether the condition started to affect you when you were a kid, teenager, or young adult.',
        created: '2021-09-09T18:13:41+00:00',
        changed: '2021-09-09T18:14:41+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/af43fcde-af97-4a32-ae04-e3168b650a15/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '64907a28-b316-4d7f-b2a7-524052efb3b6',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/64907a28-b316-4d7f-b2a7-524052efb3b6',
        },
      },
      attributes: {
        drupal_internal__qid: 66,
        status: true,
        question_id: 'N',
        title: 'Did you marry your spouse before you turned 60?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:19:52+00:00',
        changed: '2021-09-09T18:20:26+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/64907a28-b316-4d7f-b2a7-524052efb3b6/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '045529c3-cd33-4984-901e-f29a16eb9723',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/045529c3-cd33-4984-901e-f29a16eb9723',
        },
      },
      attributes: {
        drupal_internal__qid: 76,
        status: true,
        question_id: 'P',
        title: 'Were you married for 10 years or more before you got divorced?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'If you\u0027ve been married multiple times, choose \u0022Yes\u0022 if one of them lasted for 10 years or more.',
        info: null,
        created: '2021-09-09T18:22:11+00:00',
        changed: '2021-09-09T18:22:58+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/045529c3-cd33-4984-901e-f29a16eb9723/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '03ac1abc-bfa3-4b0f-b4ce-21e06ff23e2e',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/03ac1abc-bfa3-4b0f-b4ce-21e06ff23e2e',
        },
      },
      attributes: {
        drupal_internal__qid: 106,
        status: true,
        question_id: 'V',
        title: 'Do you have one or multiple parents who are alive?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:28:27+00:00',
        changed: '2021-09-09T18:29:01+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/03ac1abc-bfa3-4b0f-b4ce-21e06ff23e2e/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '7adbb559-cb0b-4f2c-ab96-91f5ce55b5ce',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/7adbb559-cb0b-4f2c-ab96-91f5ce55b5ce',
        },
      },
      attributes: {
        drupal_internal__qid: 131,
        status: true,
        question_id: 'AA',
        title: 'Do they have one or multiple parents who are alive?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T19:20:00+00:00',
        changed: '2021-09-09T19:36:30+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/7adbb559-cb0b-4f2c-ab96-91f5ce55b5ce/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'bfcb9515-5ff4-433a-b039-e9f1ba90b3d5',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/bfcb9515-5ff4-433a-b039-e9f1ba90b3d5',
        },
      },
      attributes: {
        drupal_internal__qid: 6,
        status: true,
        question_id: 'B',
        title: 'Enter your birthday.',
        answers: [],
        subTitle: 'Use this format: MM DD YYYY (e.g., 10 12 1954)',
        info: 'Most of our benefits have age requirements, so we\u0027ll use your birthday to see how old you are. ',
        created: '2021-08-27T13:20:27+00:00',
        changed: '2021-12-15T20:02:09+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/bfcb9515-5ff4-433a-b039-e9f1ba90b3d5/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '41d1f40a-fbe2-44a4-b219-f51a4ee3f1de',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/41d1f40a-fbe2-44a4-b219-f51a4ee3f1de',
        },
      },
      attributes: {
        drupal_internal__qid: 11,
        status: true,
        question_id: 'C',
        title: 'Do you go to elementary or high school full time?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-08-27T13:33:04+00:00',
        changed: '2021-12-15T20:03:52+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/41d1f40a-fbe2-44a4-b219-f51a4ee3f1de/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '9998008f-c6a4-4cc7-8e40-b7eff2c20a1d',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/9998008f-c6a4-4cc7-8e40-b7eff2c20a1d',
        },
      },
      attributes: {
        drupal_internal__qid: 16,
        status: true,
        question_id: 'D',
        title: 'Have you ever had a job that paid Social Security taxes?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: 'Most jobs in the United States and U.S. territories take Social Security taxes out of your paycheck. However, some jobs, like state and town government positions, don\u0027t pay Social Security taxes.',
        created: '2021-09-09T18:05:22+00:00',
        changed: '2021-12-15T20:05:19+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/9998008f-c6a4-4cc7-8e40-b7eff2c20a1d/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '71b41ff9-3d7a-43c3-8af1-fe959cd36853',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/71b41ff9-3d7a-43c3-8af1-fe959cd36853',
        },
      },
      attributes: {
        drupal_internal__qid: 21,
        status: true,
        question_id: 'E',
        title: 'Do you get a paycheck from a job right now?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:07:56+00:00',
        changed: '2021-12-15T20:07:10+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/71b41ff9-3d7a-43c3-8af1-fe959cd36853/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '10d7d0bc-2109-46f8-b14a-db6b6562f32c',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/10d7d0bc-2109-46f8-b14a-db6b6562f32c',
        },
      },
      attributes: {
        drupal_internal__qid: 26,
        status: true,
        question_id: 'F',
        title:
          'Have you worked and paid Social Security taxes for ten years or more?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:09:36+00:00',
        changed: '2021-12-15T20:08:26+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/10d7d0bc-2109-46f8-b14a-db6b6562f32c/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'a88c14fc-b746-41c7-a2dc-1af71e1e8132',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/a88c14fc-b746-41c7-a2dc-1af71e1e8132',
        },
      },
      attributes: {
        drupal_internal__qid: 36,
        status: true,
        question_id: 'H',
        title:
          'Will the condition affect your ability to work for a year or more?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: 'Our Disability benefit is there for you when your ability to work is affected for a long time.',
        created: '2021-09-09T18:12:27+00:00',
        changed: '2021-12-15T20:11:42+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/a88c14fc-b746-41c7-a2dc-1af71e1e8132/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '3e99bd4c-e6c7-4dd5-b2fa-6388bfe8451c',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/3e99bd4c-e6c7-4dd5-b2fa-6388bfe8451c',
        },
      },
      attributes: {
        drupal_internal__qid: 46,
        status: true,
        question_id: 'J',
        title:
          'Do you get government benefits that help you pay for essentials like food, clothing, and a home?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'Supplemental Nutritional Assistance Program (SNAP), Medicaid, and Temporary Assistance for Needy Families (TANF) are a few examples of benefits you may get right now.',
        info: null,
        created: '2021-09-09T18:15:05+00:00',
        changed: '2021-12-15T20:13:23+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/3e99bd4c-e6c7-4dd5-b2fa-6388bfe8451c/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '90d16ee2-3d17-4745-80bb-9ac3f8003e85',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/90d16ee2-3d17-4745-80bb-9ac3f8003e85',
        },
      },
      attributes: {
        drupal_internal__qid: 51,
        status: true,
        question_id: 'K',
        title:
          'Is it hard to pay for essentials like food, clothing, and a home every month?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: 'One of our benefits provides a monthly supplement if your income and other resources are limited.',
        created: '2021-09-09T18:16:09+00:00',
        changed: '2021-12-15T20:14:58+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/90d16ee2-3d17-4745-80bb-9ac3f8003e85/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '06cc009b-6b7f-41ab-b225-7e88ada0ac1b',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/06cc009b-6b7f-41ab-b225-7e88ada0ac1b',
        },
      },
      attributes: {
        drupal_internal__qid: 56,
        status: true,
        question_id: 'L',
        title: 'Are you married?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'Yes, but I\u0027m separated from my spouse.' },
          { id: 2, title: 'No, but I was in the past.' },
          { id: 3, title: 'No, I\u0027ve never been married.' },
        ],
        subTitle:
          'We know long-term partnerships often resemble marriage, but our benefits require legal recognition in your state.',
        info: 'You may be eligible for benefits because of your current or former spouse\u0027s work.',
        created: '2021-09-09T18:17:09+00:00',
        changed: '2021-12-15T20:16:30+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/06cc009b-6b7f-41ab-b225-7e88ada0ac1b/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '9faaed2c-750d-416d-afb9-4b16e0caa86d',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/9faaed2c-750d-416d-afb9-4b16e0caa86d',
        },
      },
      attributes: {
        drupal_internal__qid: 61,
        status: true,
        question_id: 'M',
        title:
          'Does your spouse get Social Security benefits now or plan to apply for them soon?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:18:47+00:00',
        changed: '2021-12-15T20:17:43+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/9faaed2c-750d-416d-afb9-4b16e0caa86d/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'eccc9daa-c895-4171-a11d-3446a08f5a26',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/eccc9daa-c895-4171-a11d-3446a08f5a26',
        },
      },
      attributes: {
        drupal_internal__qid: 71,
        status: true,
        question_id: 'O',
        title: 'Are you divorced?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: 'You may be eligible for benefits based on your ex-spouse\u0027s work even though you\u0027re no longer married.',
        created: '2021-09-09T18:21:05+00:00',
        changed: '2021-12-15T20:19:28+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/eccc9daa-c895-4171-a11d-3446a08f5a26/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '6ae1b15b-3298-45c5-a3a8-3a8a92494af8',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/6ae1b15b-3298-45c5-a3a8-3a8a92494af8',
        },
      },
      attributes: {
        drupal_internal__qid: 81,
        status: true,
        question_id: 'Q',
        title:
          'Has your ex-spouse worked and paid Social Security taxes for ten years or more?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
          { id: 2, title: 'I don\u0027t know' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:23:23+00:00',
        changed: '2021-12-15T20:21:08+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/6ae1b15b-3298-45c5-a3a8-3a8a92494af8/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '84d8d070-465c-41f0-a0af-68c5d8a7f11e',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/84d8d070-465c-41f0-a0af-68c5d8a7f11e',
        },
      },
      attributes: {
        drupal_internal__qid: 91,
        status: true,
        question_id: 'S',
        title:
          'Did your spouse ever have a job in the United States or a U.S. territory before they died?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:25:25+00:00',
        changed: '2021-12-15T20:22:39+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/84d8d070-465c-41f0-a0af-68c5d8a7f11e/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '6b53b6f2-8ccc-4cf9-82a4-e76f050cccbb',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/6b53b6f2-8ccc-4cf9-82a4-e76f050cccbb',
        },
      },
      attributes: {
        drupal_internal__qid: 96,
        status: true,
        question_id: 'T',
        title: 'Do you have children who are disabled or under 16?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T18:26:33+00:00',
        changed: '2021-12-15T20:23:29+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/6b53b6f2-8ccc-4cf9-82a4-e76f050cccbb/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '68674815-b6bb-40e0-9f5e-0daa55f29c3b',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/68674815-b6bb-40e0-9f5e-0daa55f29c3b',
        },
      },
      attributes: {
        drupal_internal__qid: 101,
        status: true,
        question_id: 'U',
        title: 'Did your parent(s) die?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'They may have been your birth, adoptive, or step parent(s), and may have died recently or a long time ago.',
        info: null,
        created: '2021-09-09T18:27:27+00:00',
        changed: '2021-12-15T20:24:44+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/68674815-b6bb-40e0-9f5e-0daa55f29c3b/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'b694e0f9-c0d1-4814-bc80-57ecb113ebcc',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/b694e0f9-c0d1-4814-bc80-57ecb113ebcc',
        },
      },
      attributes: {
        drupal_internal__qid: 111,
        status: true,
        question_id: 'W',
        title:
          'Do your parent(s) get Social Security benefits now or plan to apply for them soon?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
          { id: 2, title: 'I don\u0027t know' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T19:10:23+00:00',
        changed: '2021-12-15T20:25:55+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/b694e0f9-c0d1-4814-bc80-57ecb113ebcc/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '622685a1-9e11-48ba-a833-609cf60f9bf0',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/622685a1-9e11-48ba-a833-609cf60f9bf0',
        },
      },
      attributes: {
        drupal_internal__qid: 116,
        status: true,
        question_id: 'X',
        title:
          'Does the child have a condition that significantly affects their daily activities?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'Doctors, social workers, and other people in the child\u0027s life may call their condition a disability.',
        info: null,
        created: '2021-09-09T19:15:59+00:00',
        changed: '2021-12-15T20:27:10+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/622685a1-9e11-48ba-a833-609cf60f9bf0/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'e4749d67-2d38-44fc-acc9-cc7d8a609f2f',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/e4749d67-2d38-44fc-acc9-cc7d8a609f2f',
        },
      },
      attributes: {
        drupal_internal__qid: 121,
        status: true,
        question_id: 'Y',
        title:
          'Will the condition significantly affect their daily activities for a year or more?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T19:17:56+00:00',
        changed: '2021-12-15T20:28:12+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/e4749d67-2d38-44fc-acc9-cc7d8a609f2f/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'ee5a4a56-47c4-44ce-97b6-683d6da345f3',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/ee5a4a56-47c4-44ce-97b6-683d6da345f3',
        },
      },
      attributes: {
        drupal_internal__qid: 126,
        status: true,
        question_id: 'Z',
        title: 'Did the child\u0027s parent(s) die?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'The parent(s) may have been their birth, adoptive, or step parent(s), and may have died recently or a long time ago.',
        info: null,
        created: '2021-09-09T19:19:04+00:00',
        changed: '2021-12-15T20:29:11+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/ee5a4a56-47c4-44ce-97b6-683d6da345f3/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'c57688fd-1f38-480c-bc6a-d52c01316ded',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/c57688fd-1f38-480c-bc6a-d52c01316ded',
        },
      },
      attributes: {
        drupal_internal__qid: 136,
        status: true,
        question_id: 'BB',
        title:
          'Do their parent(s) get Social Security benefits right now or plan to apply for them soon?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
          { id: 2, title: 'I don\u0027t know' },
        ],
        subTitle: null,
        info: 'If their parent(s) get Social Security payments right now, they may be eligible for one of our benefits for children.',
        created: '2021-09-09T19:20:41+00:00',
        changed: '2021-12-15T20:30:18+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/c57688fd-1f38-480c-bc6a-d52c01316ded/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'd5b94011-d779-4a4e-b458-cf7ccd9f14a9',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/d5b94011-d779-4a4e-b458-cf7ccd9f14a9',
        },
      },
      attributes: {
        drupal_internal__qid: 141,
        status: true,
        question_id: 'CC',
        title: 'Do their parent(s) get a paycheck from a job right now?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: null,
        created: '2021-09-09T19:23:07+00:00',
        changed: '2021-12-15T20:31:25+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/d5b94011-d779-4a4e-b458-cf7ccd9f14a9/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '56de8e89-c173-4c56-aaf0-b4b0b50d7a6d',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/56de8e89-c173-4c56-aaf0-b4b0b50d7a6d',
        },
      },
      attributes: {
        drupal_internal__qid: 146,
        status: true,
        question_id: 'DD',
        title:
          'Do the child\u0027s parent(s) get government benefits that help them pay for essentials like food, clothing, and a home?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'Supplemental Nutritional Assistance Program (SNAP), Medicaid, and Temporary Assistance for Needy Families (TANF) are a few examples of benefits they may get right now.',
        info: null,
        created: '2021-09-09T19:24:01+00:00',
        changed: '2021-12-15T20:32:36+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/56de8e89-c173-4c56-aaf0-b4b0b50d7a6d/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: 'f06ef7a2-4273-4740-88c7-1728cc07ac57',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/f06ef7a2-4273-4740-88c7-1728cc07ac57',
        },
      },
      attributes: {
        drupal_internal__qid: 151,
        status: true,
        question_id: 'EE',
        title:
          'Is it hard for their parent(s) to pay for essentials like food, clothing, and a home?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle: null,
        info: 'One of our benefits provides a monthly supplement if the child has a disability and their parent(s)\u0027 income and other resources are limited.',
        created: '2021-09-09T19:24:44+00:00',
        changed: '2021-12-15T20:33:35+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/f06ef7a2-4273-4740-88c7-1728cc07ac57/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '9c777d00-10fe-4a9c-8b43-78da2cc5e449',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/9c777d00-10fe-4a9c-8b43-78da2cc5e449',
        },
      },
      attributes: {
        drupal_internal__qid: 31,
        status: true,
        question_id: 'G',
        title: 'Are you unable to work because of a condition?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          'Doctors, social workers, and other people in your life may call your condition a disability.',
        info: null,
        created: '2021-09-09T18:10:50+00:00',
        changed: '2022-01-18T16:57:02+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/9c777d00-10fe-4a9c-8b43-78da2cc5e449/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '56fce3e4-3f29-4eed-b561-df9d220b5f70',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/56fce3e4-3f29-4eed-b561-df9d220b5f70',
        },
      },
      attributes: {
        drupal_internal__qid: 1,
        status: true,
        question_id: 'A',
        title: 'Who do you want to check eligibility for?',
        answers: [
          { id: 0, title: 'An adult (age 18 and over)' },
          { id: 1, title: 'A child (under age 18)' },
        ],
        subTitle: null,
        info: null,
        created: '2021-08-23T23:12:32+00:00',
        changed: '2021-10-20T11:10:45+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/56fce3e4-3f29-4eed-b561-df9d220b5f70/relationships/uid',
            },
          },
        },
      },
    },
    {
      type: 'question--eligibility',
      id: '7b479bc3-8eec-4797-bcd1-cd5c32c8152c',
      links: {
        self: {
          href: 'https://[Internal Link]/jsonapi/question/eligibility/7b479bc3-8eec-4797-bcd1-cd5c32c8152c',
        },
      },
      attributes: {
        drupal_internal__qid: 86,
        status: true,
        question_id: 'R',
        title: 'Are you widowed?',
        answers: [
          { id: 0, title: 'Yes' },
          { id: 1, title: 'No' },
        ],
        subTitle:
          '\u0022Widowed\u0022 may not be a term you use to describe yourself. It means: \r\n\r\n1.\tYour spouse passed away while you were married.\r\n\r\n2.\tYou divorced after 10+ years of marriage and your ex-spouse has since passed away. \r\n\r\n3.\tYou divorced your spouse after being married for any amount of time, have children under age 16 or adult disabled children with that spouse, and your ex-spouse has since passed away.',
        info: null,
        created: '2021-09-09T18:24:14+00:00',
        changed: '2022-06-10T13:22:23+00:00',
        moderation_state: 'published',
        content_translation_source: 'und',
        content_translation_outdated: false,
        content_translation_status: true,
      },
      relationships: {
        uid: {
          data: null,
          links: {
            self: {
              href: 'https://[Internal Link]/jsonapi/question/eligibility/7b479bc3-8eec-4797-bcd1-cd5c32c8152c/relationships/uid',
            },
          },
        },
      },
    },
  ],
  links: {
    self: { href: 'https://[Internal Link]/jsonapi/question/eligibility' },
  },
};
