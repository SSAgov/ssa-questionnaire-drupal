import { app } from '@/constants';
import { capitalize } from '@/global-utils';
import { ELang, ELetterCase, ITranslations } from '@/interfaces';

export function t(
  lang: ELang,
  translations: ITranslations,
  translationKey: string,
  letterCase: ELetterCase = ELetterCase.capitalized,
) {
  if (!app || !lang || !translations) return translationKey;

  if (!translations[app] || !translations[app][lang]) return translationKey;

  const combinedWithGlobal = {
    ...translations.global[lang],
    ...translations[app][lang],
  };

  // console.log('translations.global[lang] = ', translations['eligibility']['es'])

  if (!combinedWithGlobal[translationKey]) {
    const otherLang = lang === 'es' ? 'en' : 'es';
    const combinedWithGlobalOtherLang = {
      ...translations.global[otherLang],
      ...translations[app][otherLang],
    };
    if (combinedWithGlobalOtherLang[translationKey])
      return combinedWithGlobalOtherLang[translationKey];

    return translationKey;
  }

  const translatedValue = combinedWithGlobal[translationKey];

  if (letterCase === ELetterCase.capitalized) {
    return capitalize(translatedValue);
  } else if (letterCase === ELetterCase.uppercase) {
    return translatedValue.toUpperCase();
  } else if (letterCase === ELetterCase.lowercase) {
    return translatedValue.toLowerCase();
  } else {
    return translatedValue;
  }
}
