import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryTypes } from 'lib/enums';

export interface HeaderStore {
  categoryType?: CategoryTypes;
  showSubmenu: boolean;
  isOnSubmenu: boolean;
}

const initialState: HeaderStore = {
  showSubmenu: false,
  isOnSubmenu: false
};

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
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

export const { setCategoryType, setShowSubmenu, setIsOnSubmenu } = slice.actions;

export const reducer = slice.reducer;
