import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { StepsContext } from '@/context/steps/StepsContext';
import { globalStyles } from '@/App';
import styles from './Progress.module.css';

export const Progress = () => {
  const { calcPercentage, progressPercentage } = React.useContext(StepsContext);

  const deploymentPlatform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;
  const inProd = deploymentPlatform === 'drupal';

  return (
    <div className={`${styles.progressContainer} ${!inProd ? 'add-top-spacing' : ''}`} id="progress-bar">
      <ProgressBar
        completed={progressPercentage}
        bgColor={globalStyles.progressCompletedBackgroundColor}
        height={globalStyles.progressHeight}
        borderRadius={globalStyles.progressBorderRadius}
        // borderRadius="4px 0px 0px 4px"
        labelAlignment="outside"
        labelColor={globalStyles.progressLabelColor}
        isLabelVisible={false}
        className={`${styles.progressBar} ${
          progressPercentage >= 100 ? styles.completed : ''
        }`}
        baseBgColor={globalStyles.progressIncompleteBackgroundColor}
        animateOnRender={true}
        // barContainerClassName="progress-entire"
        // completedClassName="progress-completed"
        // completedClassName="completed-percentage"
      />
      <div className={styles.percentageContainer}>
        <TransitionGroup className="percent-group">
          <CSSTransition key={progressPercentage} timeout={500} classNames="item">
            <span className={`${styles.percentage} ${progressPercentage}-percent`}>
              {progressPercentage > 100 ? '100' : progressPercentage}%
            </span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
