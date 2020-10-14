import { AppThunk } from './app-thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as ProductService from 'services/product-service';

export interface ProductDetailsStore {
  data: Models.Product.Model;
  similarData: Models.Product.Model[];
}

export const initialState: ProductDetailsStore = {
  data: { id: '', link: '', name: '', price: '', imageSource: '' },
  similarData: []
};

const slice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setData: (state: ProductDetailsStore, action: PayloadAction<Models.Product.Model>) => {
      state.data = action.payload;
      // TODO: change this
    },
    setSimilar: (state: ProductDetailsStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.similarData = action.payload;
    }
  }
});

export const { setData, setSimilar } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getProductDetails = (id: string): AppThunk => async (dispatch, store) => {
  const result = await ProductService.getProductDetails(id);

  dispatch(setData(result.data));
};
export const getSimilarProducts = (): AppThunk => async (dispatch, store) => {
  // TODO: add loading
  const result = await ProductService.getSimilarProducts();
  dispatch(setSimilar(result.data.list));
};
