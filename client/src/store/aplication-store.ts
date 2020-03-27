import { RouterState } from 'connected-react-router';

import * as SharedStore from './shared-store';

export default interface ApplicationState {
  router?: RouterState;
  sharedStore: SharedStore.SharedStore;
}