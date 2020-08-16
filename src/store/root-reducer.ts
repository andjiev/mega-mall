import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';
import * as HeaderStore from './header-store';
import * as ProductListStore from './product-list-store';

const reducers = {
  ui: UiStore.reducer,
  shared: SharedStore.reducer,
  header: HeaderStore.reducer,
  productList: ProductListStore.reducer
};

export { reducers };
