import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

import * as UiStore from './ui-store';
import * as HeaderStore from './header-store';
import { getTranslations } from 'services/translation-service';
import { initTranslations } from 'lib/translate';
import { initMoment } from 'lib/moment';
import { getCultureFromStorage } from './helpers/language-helper';

export interface SharedStore {
  searchText: string;
}

const initialState: SharedStore = {
  searchText: ''
};

const slice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setSearchText: (store: SharedStore, action: PayloadAction<string>) => {
      store.searchText = action.payload;
    }
  }
});

export const { setSearchText } = slice.actions;

export const reducer = slice.reducer;

//thunk
export const bootstrapApp = (): AppThunk => async (dispatch, store) => {
  try {
    dispatch(UiStore.showInitialLoader());
    const translations = await getTranslations();

    const culture = getCultureFromStorage();
    dispatch(HeaderStore.setCulture(culture));

    initTranslations(translations.data, culture);
    initMoment(culture);

    dispatch(UiStore.hideInitialLoader());
  } catch (err) {
    dispatch(UiStore.hideInitialLoader());
  }
};
