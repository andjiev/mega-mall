import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryTypes } from 'lib/enums';
import { AppThunk } from './app-thunk';
import { setCultureToStorage } from './helpers/language-helper';

export interface HeaderStore {
  culture: string;
  categoryType?: CategoryTypes;
  showSubmenu: boolean;
  isOnSubmenu: boolean;
}

const initialState: HeaderStore = {
  culture: '',
  showSubmenu: false,
  isOnSubmenu: false
};

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setCulture: (store: HeaderStore, action: PayloadAction<string>) => {
      store.culture = action.payload;
    },
    setCategoryType: (store: HeaderStore, action: PayloadAction<CategoryTypes>) => {
      store.categoryType = action.payload;
      store.showSubmenu = true;
      store.isOnSubmenu = false;
    },
    setShowSubmenu: (store: HeaderStore, action: PayloadAction<boolean>) => {
      store.showSubmenu = action.payload;
    },
    setIsOnSubmenu: (store: HeaderStore, action: PayloadAction<boolean>) => {
      store.isOnSubmenu = action.payload;
    }
  }
});

export const { setCulture, setCategoryType, setShowSubmenu, setIsOnSubmenu } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const changeCulture = (culture: string): AppThunk => async (dispatch, store) => {
  setCultureToStorage(culture);

  // refresh
  window.location.reload(false);
};
