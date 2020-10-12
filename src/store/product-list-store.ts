import { OrderTypes } from 'lib/enums';
import { AppThunk } from './app-thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageOptions } from 'lib/models';

import * as ProductService from 'services/product-service';

export interface ProductListStore {
  data: Models.Product.Model[];
  count: number;
  options: PageOptions;
}

export const initialState: ProductListStore = {
  data: [],
  count: 0,
  options: {
    page: 0,
    size: 10,
    order: OrderTypes.Latest,
    filter: ''
  }
};

const slice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setData: (state: ProductListStore, action: PayloadAction<Models.Product.Model[]>) => {
      state.data = action.payload;
      // TODO: change this
      state.count = 1000;
    },
    setOptions: (state: ProductListStore, action: PayloadAction<PageOptions>) => {
      state.options = action.payload;
    }
  }
});

export const { setData, setOptions } = slice.actions;

export const reducer = slice.reducer;

// thunk
export const getProducts = (filter: string | null): AppThunk => async (dispatch, store) => {
  const result = await ProductService.getProducts(store().productList.options.page, store().productList.options.size, store().productList.options.order, filter ? filter : store().productList.options.filter);

  if (filter) {
    dispatch(setOptions({ ...store().productList.options, filter }));
  }
  dispatch(setData(result.data));
};

export const changePageOptions = (options: PageOptions): AppThunk => async (dispatch, store) => {
  // TODO: add loading
  dispatch(setOptions(options));

  dispatch(getProducts(null));
};
