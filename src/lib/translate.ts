import i18next from 'i18next';
import { CURRENT_ENVIRONMENT } from 'consts';
import { Environment } from 'lib/enums';

const initTranslations = (translations: Translations, culture: string) => {
  i18next.init({
    lng: culture,
    resources: translations
  });
};

const translate = (key: string, fallback: string): string => {
  // TODO: Uncoment this when translation keys are provided
  // if (CURRENT_ENVIRONMENT == Environment.Development) {
  //   return i18next.t(key) || key;
  // }

  return i18next.t(key, { defaultValue: fallback }) || fallback;
};

export { initTranslations, translate };
