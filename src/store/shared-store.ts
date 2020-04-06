import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

import * as UiStore from './ui-store';

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

    // TODO: init translations

    // let values = await Promise.all([getTranslations()]);

    // initTranslations(values[1].data, 'en');

    dispatch(UiStore.hideInitialLoader());
  } catch (err) {
    dispatch(UiStore.hideInitialLoader());
  }
};
