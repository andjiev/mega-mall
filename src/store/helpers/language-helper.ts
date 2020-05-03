import { MK_CULTURE } from 'consts';

const key = 'culture';
const defaultCulture = MK_CULTURE;

const getCultureFromStorage = () => {
  const culture = localStorage.getItem(key);
  return culture ? culture : defaultCulture;
};

const setCultureToStorage = (culture: string) => {
  localStorage.setItem(key, culture);
};

export { getCultureFromStorage, setCultureToStorage };
