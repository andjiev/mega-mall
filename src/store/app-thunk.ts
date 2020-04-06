import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import ApplicationState from './application-store';

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>;
