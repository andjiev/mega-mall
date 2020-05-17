import { MK_CULTURE, EN_CULTURE } from 'consts';

const formatCulture = (culture: string) => {
  return culture == MK_CULTURE ? 'MK' : 'EN';
};

const formatLanguage = (lang: string) => {
  return lang == 'MK' ? MK_CULTURE : EN_CULTURE;
};

export { formatCulture, formatLanguage };
