import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';

const reducers = {
  ui: UiStore.reducer,
  sharedStore: SharedStore.reducer
};

export { reducers };
