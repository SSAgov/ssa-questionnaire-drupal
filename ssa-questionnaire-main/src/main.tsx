import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TagManager from 'react-gtm-module';
import { app } from '@/constants';
import { inDevelopment } from '@/constants';
// import '../node_modules/uswds/dist/css/uswds.min.css';
import './index.css';
import './font-styles.css';
import './input-styles.css';
import { ErrorBoundary } from './components/common';
import { GlobalProvider } from './context/global/GlobalContext';
import { StepsProvider } from './context/steps/StepsContext';

// Only init gtm if in dev and have container id env var
if (
  inDevelopment &&
  import.meta &&
  import.meta.env &&
  import.meta.env.VITE_GTM_ID
) {
  const gtmId = import.meta.env.VITE_GTM_ID;
  const tagManagerArgs = { gtmId };
  TagManager.initialize(tagManagerArgs);
}

(function () {
  if (!window.drupalSettings) {
    window.drupalSettings = { component: { '0': { language: 'en' } } };
  }
})();

const targetDiv = app === 'feedback' ? 'ssa-feedback-app' : 'root';

// const WithUswdsTheme = React.lazy(
//   () => import('./components/common/ThemeWithUswds'),
// );
// const WithoutUswdsTheme = React.lazy(
//   () => import('./components/common/ThemeWithoutUswds'),
// );

// const ThemeSelector = ({ children }) => {
//   let loadUswdsStylesheet = false;
//   if (
//     import.meta &&
//     import.meta.env &&
//     import.meta.env.VITE_DEPLOYMENT_PLATFORM &&
//     import.meta.env.VITE_DEPLOYMENT_PLATFORM !== 'drupal'
//   ) {
//     loadUswdsStylesheet = true;
//   }

//   return (
//     <>
//       <React.Suspense fallback={<></>}>
//         {loadUswdsStylesheet && <WithUswdsTheme />}
//         {!loadUswdsStylesheet && <WithoutUswdsTheme />}
//       </React.Suspense>
//       {children}
//     </>
//   );
// };

ReactDOM.createRoot(document.getElementById(targetDiv)).render(
  <ErrorBoundary>
    <GlobalProvider>
      <StepsProvider>
          <App />
      </StepsProvider>
    </GlobalProvider>
  </ErrorBoundary>,
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
