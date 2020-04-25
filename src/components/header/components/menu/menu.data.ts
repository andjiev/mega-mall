import { translate } from 'lib/translate';
import { CategoryTypes } from 'lib/enums';

const menuItems = [
  {
    type: CategoryTypes.Technology,
    title: 'ТЕХНОЛОГИЈА'
  },
  {
    type: CategoryTypes.Sport,
    title: 'СПОРТ'
  },
  {
    type: CategoryTypes.Fashion,
    title: 'МОДА'
  },
  {
    type: CategoryTypes.Beauty,
    title: 'УБАВИНА И ЗДРАВЈЕ'
  },
  {
    type: CategoryTypes.Home,
    title: 'ДОМАЌИНСТВО'
  },
  {
    type: CategoryTypes.Services,
    title: translate('EasyFind_Header_Services', 'УСЛУГИ')
  }
];

export { menuItems };
