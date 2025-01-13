declare module '*.css';

export {};

declare global {
  interface Window {
    dataLayer: any[];
    drupalSettings: any;
  }

  interface ImportMeta {
    hot: {
      accept: Function;
      dispose: Function;
    };
    env: {
      MODE: string;
      DEV: boolean;
      VITE_APP: string;
      VITE_USE_HARDCODED_DATA: string;
      VITE_API_QUESTIONS_PATH: string;
      VITE_API_ORIGIN: string;
      VITE_GTM_ID?: string;
      VITE_DEPLOYMENT_PLATFORM: string;
      VITE_USE_GLOBAL_STYLES?: string;
    };
  }
}
