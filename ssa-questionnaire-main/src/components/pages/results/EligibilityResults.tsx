import { GlobalContext } from '@/context/global/GlobalContext';
import { StepsContext } from '@/context/steps/StepsContext';
import { meetsRequirements } from '@/context/steps/utils';
import { mockResultsData } from '@/context/steps/utils/mockStepsData';
import { setResults } from '@/global-utils/misc';
import {
  IBuiltCategories,
  IMeetsReqsReturnVal,
  IPopulatedCatItem,
  IPopulatedCats,
  IQualCatNames,
  IResultComplete,
} from '@/interfaces';
import React from 'react';
import { AnswersSummary } from './AnswersSummary';
import { BackToPrev } from './BackToPrev';
import { BenefitsCategory } from './BenefitsCategory';
import { EligibilityResultsCTA } from './EligibilityResultsCTA';
import { NoResults } from './NoResults';
import styles from './Results.module.css';

export const EligibilityResults = () => {
  if (!StepsContext) return null;
  const { t, language } = React.useContext(GlobalContext);
  const { answers, ageAndBday, gtmOnNoResults, gtmOnResults } =
    React.useContext(StepsContext);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  function buildCategories(): IBuiltCategories {
    const populatedCategories: IPopulatedCats = {};
    const qualifiedCategoryNames: IQualCatNames[] = [];

    mockResultsData(t).forEach((resultItem, i) => {
      const reqs = resultItem.requirements;
      const meetsReqsResult = meetsRequirements({
        requirements: reqs,
        answers,
        ageAndBday,
        isResultsPage: true,
        lang: language,
      });

      if (typeof meetsReqsResult === 'boolean') return;

      const { oneOfReqsMet, explanation } =
        meetsReqsResult as IMeetsReqsReturnVal;

      const reqsMet = oneOfReqsMet;

      if (reqsMet) {
        const category = resultItem.category;
        const newResultItem = {
          ...resultItem,
          explanation,
          categoryName: t(category), // Category[category],
        };
        if (populatedCategories[category]) {
          populatedCategories[category].push(newResultItem);
        } else {
          populatedCategories[category] = [newResultItem];
          qualifiedCategoryNames.push({
            categoryKey: category,
            categoryName: t(category), // Category[category],
          });
        }
      }
    });

    const sortedCategoryNames: IQualCatNames[] = qualifiedCategoryNames.sort(
      (a, b) => a.categoryName.localeCompare(b.categoryName),
    );

    const results: IResultComplete[] = [];
    const gtmResults: IPopulatedCatItem[] = [];

    sortedCategoryNames.forEach((sortedCat) => {
      const categories = populatedCategories[sortedCat.categoryKey];
      categories.forEach((cat) => {
        const gtmItem = {
          ...cat,
          categoryName: sortedCat.categoryName,
          title: cat.title ? cat.title : sortedCat.categoryName,
        };
        gtmResults.push(gtmItem);
        results.push({
          description: cat.explanation,
          name: cat.title,
          category: sortedCat.categoryName,
          id: cat.id,
          label: cat?.label ? cat?.label : '',
          reason: cat.explanation,
          title: cat.title,
        });
      });
    });

    setResults(results);

    if (sortedCategoryNames.length === 0) {
      gtmOnNoResults();
    } else {
      gtmOnResults(gtmResults);
    }

    return { populatedCategories, sortedCategoryNames };
  }

  const { populatedCategories, sortedCategoryNames } = buildCategories();

  if (sortedCategoryNames.length === 0) return <NoResults />;

  return (
    <div className={styles.EligibilityResults}>
      <BackToPrev />
      <h1
        className={`ssa-h1 ${styles.eligibilityResultsTitle}`}
        data-test="results-title"
      >
        {t('results_eligible_title')}
      </h1>
      <h2
        className={`ssa-h2 ${styles.eligibilityResultsSubtitle}`}
        data-test="results-subtitle"
      >
        {t('results_eligible_subtitle')}
      </h2>
      <ul className={styles.categoriesList} data-test="categories-list">
        {sortedCategoryNames.map((categoryItem, i) => (
          <BenefitsCategory
            key={i}
            categoryItem={categoryItem}
            populatedCategory={populatedCategories[categoryItem.categoryKey]}
          />
        ))}
      </ul>
      <EligibilityResultsCTA />
      <AnswersSummary />
    </div>
  );
};
