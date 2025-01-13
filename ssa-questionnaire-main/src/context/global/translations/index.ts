import { ITranslations } from '@/interfaces';
import { globalEn, eligibilityEn, replacementEn, feedbackEn } from './en';
import { globalEs, eligibilityEs, replacementEs, feedbackEs } from './es';

export const translations: ITranslations = {
  global: {
    en: globalEn,
    es: globalEs,
  },
  eligibility: {
    en: eligibilityEn,
    es: eligibilityEs,
  },
  replacement: {
    en: replacementEn,
    es: replacementEs,
  },
  feedback: {
    en: feedbackEn,
    es: feedbackEs,
  },
};
