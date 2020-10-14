import { AppThunk } from './app-thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as ProductService from 'services/product-service';

export interface MainStore {
  latestData: Models.Product.Model[];
  mostViewedData: Models.Product.Model[];
}

export const initialState: MainStore = {
  latestData: [],
  mostViewedData: []
};

const slice = createSlice({
  name: 'latestProductList',
  initialState,
  reducers: {
    setMostViewedData: (state: MainStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.mostViewedData = action.payload;
    },
    setLatestData: (state: MainStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.latestData = action.payload;
    }
  }
});

export const { setMostViewedData, setLatestData } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getLatestProducts = (): AppThunk => async dispatch => {
  const result = await ProductService.getLatestProducts();
  dispatch(setLatestData(result.data.list));
};

export const getMostPopularProducts = (): AppThunk => async dispatch => {
  const result = await ProductService.getMostPopularProducts();
  dispatch(setMostViewedData(result.data.list));
};
