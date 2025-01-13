export enum ELang {
  en = 'en',
  es = 'es',
}

export enum ELetterCase {
  capitalized = 'capitalized',
  uppercase = 'uppercase',
  lowercase = 'lowercase',
  none = 'none',
}

export interface ITranslations {
  [appName: string]: {
    en: {
      [translationKey: string]: string;
    };
    es: {
      [translationKey: string]: string;
    };
  };
}

export type TT = (translationKey: string, letterCase?: ELetterCase) => string;

export enum EAlertType {
  info = 'info', //Display an informational status alert.
  warning = 'warning', // Display an warning status alert.
  error = 'error', // Display an error status alert.
  success = 'success', // Display an success status alert.
  // slim = 'slim', // Display a slimmer version of the alert.
  // 'no-icon' = 'no-icon', // Display an alert without an icon.
}
export interface IGlobalAlert {
  hide: boolean;
  type: EAlertType;
  heading: string;
  content: string;
}

export interface IGlobalContext {
  t: TT;
  language: ELang;
  globalAlert: IGlobalAlert;
  showGlobalAlert: any;
  hideGlobalAlert: any;
}

export interface IShowGlobalAlertProps {
  type: EAlertType;
  isTemporary: boolean;
  heading: string;
  content: string;
}
