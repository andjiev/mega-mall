import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { reducers } from "./root-reducer"
import ApplicationState from "./aplication-store";

export interface DashboardStore {
    name: string;
}

const initialState: DashboardStore = {
    name: 'initial'
}

const slice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setName: (store: DashboardStore, action: PayloadAction<string>) => {
            store.name = action.payload;
        }
    }
});


export const { setName } = slice.actions;

export const reducer = slice.reducer;


// thunks