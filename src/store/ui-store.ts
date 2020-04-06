import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiStore {
  showInitialLoader: boolean;
}

export const initialState: UiStore = {
  showInitialLoader: true
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showInitialLoader: (state: UiStore, action: PayloadAction) => {
      state.showInitialLoader = true;
    },
    hideInitialLoader: (state: UiStore, action: PayloadAction) => {
      state.showInitialLoader = false;
    }
  }
});

export const { showInitialLoader, hideInitialLoader } = slice.actions;

export const reducer = slice.reducer;
