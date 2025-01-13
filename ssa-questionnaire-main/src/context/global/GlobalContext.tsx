import React, { SetStateAction } from 'react';
import { translations } from './translations';
import { t } from './handleTranslation';
import {
  EAlertType,
  ELang,
  IGlobalContext,
  IShowGlobalAlertProps,
} from '@/interfaces';
import { GlobalContextDefaultValues } from './globalContextConstants';

export const GlobalContext = React.createContext<IGlobalContext>(
  GlobalContextDefaultValues,
);

export const GlobalProvider = ({ children }) => {
  const defaultAlert = {
    hide: true,
    isTemporary: true,
    type: EAlertType.error,
    heading: `Error`,
    content: `Sorry, something went wrong. Please, try <a href="#" onclick="location.reload()">reloading</a> this page.`,
  };
  const [globalAlert, setGlobalAlert] = React.useState({ ...defaultAlert });

  function determineLanguage(): ELang {
    const lang = checkDrupalSettings();
    return lang;
  }

  // function checkDrupalSettings() {
  //   if (!window || !window?.drupalSettings) return 'en';
  //   const settings = window?.drupalSettings;
  //   if (
  //     !settings.component ||
  //     !Array.isArray(settings.component) ||
  //     !settings.component.length
  //   )
  //     return 'en';
  //   const component = settings.component;
  //   if (!component[0] || !component[0].language) return 'en';
  //   return component[0].language;
  // }

  function checkDrupalSettings() {
    if (!window || !window?.drupalSettings) return 'en';
    const settings = window?.drupalSettings;
    if (!settings.component || !settings.component['0']) return 'en';
    const component = settings.component;
    if (!component['0'].language) return 'en';
    return component['0'].language;
  }

  function showGlobalAlert({
    type,
    isTemporary,
    heading,
    content,
  }: IShowGlobalAlertProps): void {
    const newGlobalAlert = { ...globalAlert };
    newGlobalAlert.hide = false;
    if (type) newGlobalAlert.type = type;
    if (isTemporary === false) newGlobalAlert.isTemporary = isTemporary;
    if (heading) newGlobalAlert.heading = heading;
    if (content) newGlobalAlert.content = content;
    setGlobalAlert(newGlobalAlert);

    if (newGlobalAlert.isTemporary) {
      setTimeout(() => {
        setGlobalAlert({ ...defaultAlert });
      }, 5000);
    }
  }

  const globalContextValue: IGlobalContext = {
    t: (translationKey, letterCase) => {
      const translationResult = t(
        determineLanguage(),
        translations,
        translationKey,
        letterCase,
      );
      return translationResult;
    },
    language: determineLanguage(),
    globalAlert,
    showGlobalAlert,
    hideGlobalAlert: () => setGlobalAlert({ ...defaultAlert }),
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
