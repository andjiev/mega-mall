import { ListTypes } from 'lib/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';

export interface ListTypeStore {
  listType: ListTypes;
}

export const initialState: ListTypeStore = {
  listType: ListTypes.Products
};

const slice = createSlice({
  name: 'listType',
  initialState,
  reducers: {
    setListType: (state: ListTypeStore, action: PayloadAction<ListTypes>) => {
      state.listType = action.payload;
    }
  }
});

export const { setListType } = slice.actions;

export const reducer = slice.reducer;

export const changeListType = (listType: ListTypes): AppThunk => async (dispatch, store) => {
  dispatch(setListType(listType));
};
