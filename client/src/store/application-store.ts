import { RouterState } from 'connected-react-router';

import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';

export default interface ApplicationState {
  ui: UiStore.UiStore;
  router?: RouterState;
  sharedStore: SharedStore.SharedStore;
}
