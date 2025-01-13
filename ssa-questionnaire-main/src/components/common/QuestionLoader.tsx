import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Loader.module.css';

export const QuestionLoader = () => {
  return (
    <section className={styles.QuestionLoader}>
      <div className={styles.progressBarContainer}>
        <ContentLoader className={styles.progressBarSvg}>
          <rect rx="4" ry="4" className={styles.progressBarRect} />
        </ContentLoader>
      </div>
      <div className={styles.titleContainer}>
        <ContentLoader className={styles.titleSvg}>
          <rect rx="4" ry="4" className={styles.titleRect} />
        </ContentLoader>
      </div>
      <div className={styles.tiles}>
        <div className={styles.tileContainer}>
          <ContentLoader className={styles.tileSvg}>
            <rect rx="4" ry="4" className={styles.tileRect} />
          </ContentLoader>
        </div>
        <div className={styles.tileContainer}>
          <ContentLoader className={styles.tileSvg}>
            <rect rx="4" ry="4" className={styles.tileRect} />
          </ContentLoader>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionContainer}>
          <ContentLoader className={`${styles.actionSvg} ${styles.prevBtn}`}>
            <rect rx="4" ry="4" className={styles.actionRect} />
          </ContentLoader>
        </div>
        <div className={styles.actionContainer}>
          <ContentLoader className={`${styles.actionSvg} ${styles.nextBtn}`}>
            <rect rx="4" ry="4" className={styles.actionRect} />
          </ContentLoader>
        </div>
      </div>
    </section>
  );
};
