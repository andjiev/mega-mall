import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';
import * as HeaderStore from './header-store';

const reducers = {
  ui: UiStore.reducer,
  sharedStore: SharedStore.reducer,
  headerStore: HeaderStore.reducer
};

export { reducers };
