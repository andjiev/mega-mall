import { OrderTypes } from 'lib/enums';
import { translate } from 'lib/translate';

const getTextForOrderType = (type: OrderTypes) => {
  switch (type) {
    case OrderTypes.PriceAscending:
      return translate('MegaMall_FilterBar_PriceAscending', 'цена ниска > висока');
    case OrderTypes.PriceDescending:
      return translate('MegaMall_FilterBar_PriceDescending', 'цена висока > ниска');
    case OrderTypes.Latest:
      return translate('MegaMall_FilterBar_Latest', 'најнови');
    default:
      throw 'Order type is invalid';
  }
};

export { getTextForOrderType };
