import { EQuestionType, ESubtitleType } from '@/interfaces';
import React from 'react';
import styles from './Question.module.css';

export const QuestionSubtitle: React.FC<{
  subTitle: string;
  questionType: EQuestionType;
  type: ESubtitleType;
}> = ({ subTitle = '', questionType, type = ESubtitleType.text }) => {
  function getSubtitle() {
    if (subTitle === 'special_subtitle_NH') {
      return <SpedialSubtitle qId="NH" />;
    } else if (subTitle === 'special_subtitle_NB') {
      return <SpedialSubtitle qId="NB" />;
    } else if (type === ESubtitleType.html) {
      return (
        <div
          className={`${styles.questionSubTitle} ${styles.html}`}
          data-test="question-subtitle"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      );
    } else {
      return (
        <p className={styles.questionSubTitle} data-test="question-subtitle">
          {subTitle}
        </p>
      );
    }
  }

  return (
    <div
      data-test="question-subtitle-container"
      className={`${styles.questionSubTitleContainer} ${
        styles[questionType] ? styles[questionType] : ''
      }`}
    >
      {getSubtitle()}
    </div>
  );
};

const SpedialSubtitle: React.FC<{ qId: string }> = ({ qId }) => {
  const NH_docs = [
    `Permanent Resident Card (Green Card)`,
    `I-551 (Permanent Resident Stamp)`,
    `I-94 (Arrival/Departure Record)`,
    `I-766 (Employment Authorization Document)`,
    `I-20 (Certificate of Eligibility for Nonimmigrant Student Status)`,
    `Letter of Employment`,
  ];

  const allDocs = {
    NH: NH_docs,
    NB: NH_docs,
  };

  const docs = allDocs[qId];

  const [showMore, set__showMore] = React.useState<boolean>(false);
  const [items, set__items] = React.useState<string[]>(docs.slice(0, 3));

  const showMoreText = showMore ? '[show less]' : '[show more]';

  return (
    <div
      className={`${styles.questionSubTitle} ${styles.special_subtitle_NH}`}
      data-test="question-subtitle"
    >
      <p>Examples of documents we accept:</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button
        className={`button-link ${styles.showMoreLessBtn}`}
        onClick={(_) => {
          const newShowMore = !showMore;
          if (newShowMore) {
            set__items([...docs]);
          } else {
            set__items([...docs.slice(0, 3)]);
          }
          set__showMore(newShowMore);
        }}
      >
        <span>{showMoreText}</span>
      </button>
    </div>
  );
};
