import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';
import * as HeaderStore from './header-store';
import * as ProductListStore from './product-list-store';
import * as MainStore from './main-store';
import * as ProductDetailsStore from './product-details-store';

const reducers = {
  ui: UiStore.reducer,
  shared: SharedStore.reducer,
  header: HeaderStore.reducer,
  productList: ProductListStore.reducer,
  mainData: MainStore.reducer,
  productDetails: ProductDetailsStore.reducer
};

export { reducers };
