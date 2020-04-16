import { AxiosResponse } from 'axios';
import { Environment } from 'lib/enums';
import { CURRENT_ENVIRONMENT } from 'consts';
import httpService from './http-service';

const getTranslations = async (): Promise<Translations> => {
  let translationsPromise: Promise<AxiosResponse<Translations>>;

  if (CURRENT_ENVIRONMENT == Environment.Development) {
    translationsPromise = httpService.get<Translations>('http://localhost:4100/static/translations.json');
  } else {
    translationsPromise = httpService.get<Translations>('/static/translations.json');
  }

  return (await translationsPromise).data;
};

export { getTranslations };
