import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

import * as UiStore from './ui-store';
import * as HeaderStore from './header-store';
import { getTranslations } from 'services/translation-service';
import { initTranslations } from 'lib/translate';
import { initMoment } from 'lib/moment';
import { getCultureFromStorage } from './helpers/language-helper';
import { MenuItem, menuItems } from 'lib/data';

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

    dispatch(getMenuItems());

    dispatch(HeaderStore.setCulture(culture));
    dispatch(UiStore.hideInitialLoader());
  } catch (err) {
    dispatch(UiStore.hideInitialLoader());
  }
};

const getMenuItems = (): AppThunk => async (dispatch, store) => {
  const flatMenuItems = menuItems();

  const result = flatMenuItems
    .map(parent => {
      parent.children = flatMenuItems.filter(child => child.parentId === parent.id);
      return parent;
    })
    .filter(x => !x.parentId);

  dispatch(setMenuItems(result));
};

export { getMenuItems };
