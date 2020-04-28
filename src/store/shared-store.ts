import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

import * as UiStore from './ui-store';
import { getTranslations } from 'services/language-service';
import { initTranslations } from 'lib/translate';
import { initMoment } from 'lib/moment';
import { webGlobal } from 'consts';

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
    let translations = await getTranslations();

    initTranslations(translations.data, 'mk-MK');
    initMoment('mk-MK');

    dispatch(UiStore.hideInitialLoader());
  } catch (err) {
    dispatch(UiStore.hideInitialLoader());
  }
};
