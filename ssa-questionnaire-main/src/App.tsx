import React from 'react';
import { GlobalProvider } from './context/global/GlobalContext';
import { StepsContext, StepsProvider } from './context/steps/StepsContext';
import { Steps } from './components/steps/Steps';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import isWindows from 'cross-env/src/is-windows';
import { gtmInit } from './global-utils';
import { ReturnToTop } from './components/common/ReturnToTop';
import { EStepType } from './interfaces';
import { FeedbackPrompt } from './components';
import { app } from './constants';
import {
  ESiteAlertContentType,
  ESiteAlertType,
  ESiteAlertVariant,
  SiteAlert,
} from './components/common';

function App() {
  const { currentStepContent } = React.useContext(StepsContext);

  React.useEffect(() => {
    gtmInit();
  //   (async function x(){
  //     try {
  //         const res = await fetch(`http://beta2.sndbx-ssagov.acsitefactory.com/jsonapi/node/external_app`);
  //         const data = await res.json();
  //         console.log('data = ',data);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // })()
  }, []);

  // console.log('currentStepContent = ', currentStepContent);
  const type =
    currentStepContent && currentStepContent?.type
      ? currentStepContent?.type
      : '';

  if (app === 'feedback') return <FeedbackPrompt />;

  const deploymentPlatform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;
  const inProd = deploymentPlatform === 'drupal';

  return (
    <div className="App">
      {/* {siteAlerts()} */}
      <div className={`steps-container ${type} ${!inProd ? 'add-top-and-bottom-spacing' : ''}`}>
        <Steps />
      </div>
      {/* <ReturnToTop /> */}
      {/* {currentStepContent && currentStepContent.type === 'page' ? <ReturnToTop /> : null} */}
    </div>
  );
}

export default App;

export const globalStyles = {
  mainBlue: '#2378C3',
  progressCompletedBackgroundColor: '#0076D6',
  progressIncompleteBackgroundColor: '#DFE1E2',
  progressLabelColor: '#e80909',
  progressHeight: '12px',
  progressBorderRadius: '4px',
};

function siteAlerts() {
  return [
    <SiteAlert
      title="Standard info alert system"
      variant={ESiteAlertVariant.system}
    />,
    <SiteAlert
      title="Standard emergency alert message"
      variant={ESiteAlertVariant.emergency}
    />,
    <SiteAlert
      title="Standard info alert message"
      variant={ESiteAlertVariant.info}
    />,
    <SiteAlert
      title="List info alert system"
      alertType={ESiteAlertType.list}
      bodyType={ESiteAlertContentType.list}
      variant={ESiteAlertVariant.system}
    />,
    <SiteAlert
      title="List emergency alert message"
      alertType={ESiteAlertType.list}
      bodyType={ESiteAlertContentType.list}
      variant={ESiteAlertVariant.emergency}
    />,
    <SiteAlert
      title="List info alert message"
      alertType={ESiteAlertType.list}
      bodyType={ESiteAlertContentType.list}
      variant={ESiteAlertVariant.info}
    />,
    <SiteAlert
      title="Slim info alert system"
      alertType={ESiteAlertType.slim}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.system}
    />,
    <SiteAlert
      title="Slim emergency alert message"
      alertType={ESiteAlertType.slim}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.emergency}
    />,
    <SiteAlert
      title="Slim info alert message"
      alertType={ESiteAlertType.slim}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.info}
    />,
    <SiteAlert
      title="Simple info alert system"
      alertType={ESiteAlertType.simple}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.system}
    />,
    <SiteAlert
      title="Simple emergency alert message"
      alertType={ESiteAlertType.simple}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.emergency}
    />,
    <SiteAlert
      title="Simple info alert message"
      alertType={ESiteAlertType.simple}
      bodyType={ESiteAlertContentType.html}
      variant={ESiteAlertVariant.info}
    />,
    <SiteAlert
      title="Basic slim info alert system"
      alertType={ESiteAlertType.basicSlim}
      bodyType={ESiteAlertContentType.text}
      variant={ESiteAlertVariant.system}
    />,
    <SiteAlert
      title="Basic slim emergency alert message"
      alertType={ESiteAlertType.basicSlim}
      bodyType={ESiteAlertContentType.text}
      variant={ESiteAlertVariant.emergency}
    />,
    <SiteAlert
      title="Basic slim info alert message"
      alertType={ESiteAlertType.basicSlim}
      bodyType={ESiteAlertContentType.text}
      variant={ESiteAlertVariant.info}
    />,
  ];
}
