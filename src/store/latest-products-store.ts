import { AppThunk } from './app-thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as ProductService from 'services/product-service';

export interface LatestProductListStore {
  data: Models.Product.Model[];
}

export const initialState: LatestProductListStore = {
  data: []
};

const slice = createSlice({
  name: 'latestProductList',
  initialState,
  reducers: {
    setData: (state: LatestProductListStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.data = action.payload;

      // TODO: change this
    }
  }
});

export const { setData } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getLatestProducts = (): AppThunk => async dispatch => {
  const result = await ProductService.getLatestProducts();

  dispatch(setData(result.data));
};
