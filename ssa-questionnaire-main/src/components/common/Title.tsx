import React from 'react';
import styles from './Title.module.css';

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.titleContainer} data-test="question-title-container">
      <p className={styles.title} data-test="question-title">
        {title}
      </p>
    </div>
  );
};
