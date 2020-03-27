import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface SharedStore {
  searchText: string;
}

const initialState: SharedStore = {
  searchText: ''
}

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

// thunk actions