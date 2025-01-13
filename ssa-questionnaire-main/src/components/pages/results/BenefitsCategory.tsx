import { IPopulatedCategory, IQualCatNames } from '@/interfaces';
import React from 'react';
import { Benefit } from './Benefit';
import styles from './Results.module.css';

export const BenefitsCategory: React.FC<{
  categoryItem: IQualCatNames;
  populatedCategory: IPopulatedCategory[];
}> = ({ categoryItem, populatedCategory }) => {
  return (
    <li
      className={styles.categoryItem}
      data-test={`cat-item-${categoryItem.categoryName}`}
    >
      <h3 className={`ssa-h3 ${styles.categoryName}`}>
        {categoryItem.categoryName}
      </h3>
      <ul className={styles.benefitsList} data-test="benefits-list">
        {populatedCategory.map((res, j) => (
          <Benefit {...res} key={j} />
        ))}
      </ul>
    </li>
  );
};
