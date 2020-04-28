import { translate } from 'lib/translate';
import { CategoryTypes } from 'lib/enums';

const menuItems = [
  {
    type: CategoryTypes.Technology,
    title: translate('EasyFind_Header_Technology', 'ТЕХНОЛОГИЈА')
  },
  {
    type: CategoryTypes.Sport,
    title: translate('EasyFind_Header_Sport', 'СПОРТ')
  },
  {
    type: CategoryTypes.Fashion,
    title: translate('EasyFind_Header_Fashion', 'МОДА')
  },
  {
    type: CategoryTypes.Beauty,
    title: translate('EasyFind_Header_Health', 'УБАВИНА И ЗДРАВЈЕ')
  },
  {
    type: CategoryTypes.Home,
    title: translate('EasyFind_Header_Household', 'ДОМАЌИНСТВО')
  },
  {
    type: CategoryTypes.Services,
    title: translate('EasyFind_Header_Services', 'УСЛУГИ')
  }
];

export { menuItems };
