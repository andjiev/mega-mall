import { translate } from 'lib/translate';
import { CategoryTypes } from 'lib/enums';

const menuItems = [
  {
    type: CategoryTypes.Technology,
    title: 'ТЕХНОЛОГИЈА',
    link: `/categories/${CategoryTypes.Technology}`
  },
  {
    type: CategoryTypes.Sport,
    title: 'СПОРТ',
    link: `/categories/${CategoryTypes.Sport}`
  },
  {
    type: CategoryTypes.Fashion,
    title: 'МОДА',
    link: `/categories/${CategoryTypes.Fashion}`
  },
  {
    type: CategoryTypes.Beauty,
    title: 'УБАВИНА И ЗДРАВЈЕ',
    link: `/categories/${CategoryTypes.Beauty}`
  },
  {
    type: CategoryTypes.Home,
    title: 'ДОМАЌИНСТВО',
    link: `/categories/${CategoryTypes.Home}`
  },
  {
    type: CategoryTypes.Services,
    title: translate('EasyFind_Header_Services', 'УСЛУГИ'),
    link: `/categories/${CategoryTypes.Services}`
  }
];

export { menuItems };
