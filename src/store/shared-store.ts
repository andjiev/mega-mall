import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

import * as UiStore from './ui-store';
import * as HeaderStore from './header-store';
import { getTranslations } from 'services/translation-service';
import { initTranslations } from 'lib/translate';
import { initMoment } from 'lib/moment';
import { getCultureFromStorage } from './helpers/language-helper';
import { MenuItem } from 'lib/data';
import { getMenuItems } from './helpers/menu-helper';

export interface SharedStore {
  searchText: string;
  menuItems: MenuItem[];
}

const initialState: SharedStore = {
  searchText: '',
  menuItems: []
};

const slice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setSearchText: (state: SharedStore, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setMenuItems: (state: SharedStore, action: PayloadAction<MenuItem[]>) => {
      state.menuItems = action.payload;
    }
  }
});

export const { setSearchText, setMenuItems } = slice.actions;

export const reducer = slice.reducer;

//thunk

export const bootstrapApp = (): AppThunk => async (dispatch, store) => {
  try {
    dispatch(UiStore.showInitialLoader());

    const translations = await getTranslations();
    const culture = getCultureFromStorage();
    initTranslations(translations.data, culture);
    initMoment(culture);

    const menuItems = await getMenuItems();
    dispatch(setMenuItems(menuItems));

    dispatch(HeaderStore.setCulture(culture));
    dispatch(UiStore.hideInitialLoader());
  } catch (err) {
    dispatch(UiStore.hideInitialLoader());
  }
};
