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
    setPopularData: (state: MainStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.latestData = action.payload;
    }
  }
});

export const { setMostViewedData, setPopularData } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getLatestProducts = (): AppThunk => async dispatch => {
  const result = await ProductService.getLatestProducts();
  dispatch(setMostViewedData(result.data));
};

export const getMostPopularProducts = (): AppThunk => async dispatch => {
  const result = await ProductService.getMostPopularProducts();
  dispatch(setPopularData(result.data));
};
