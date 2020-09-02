import { RouterState } from 'connected-react-router';

import * as UiStore from './ui-store';
import * as SharedStore from './shared-store';
import * as HeaderStore from './header-store';
import * as ProductListStore from './product-list-store';
import * as LatestProductListStore from './latest-products-store';

export default interface ApplicationState {
  ui: UiStore.UiStore;
  router?: RouterState;

  shared: SharedStore.SharedStore;
  header: HeaderStore.HeaderStore;
  productList: ProductListStore.ProductListStore;
  latestProductList: LatestProductListStore.LatestProductListStore;
}
