import { translate } from 'lib/translate';
import { CategoryTypes } from 'lib/enums';

const menuItems = [
  {
    type: CategoryTypes.Technology,
    title: translate('MegaMall_Header_Technology', 'ТЕХНОЛОГИЈА'),
    link: `/categories/${CategoryTypes.Technology}`
  },
  {
    type: CategoryTypes.Sport,
    title: translate('MegaMall_Header_Sport', 'СПОРТ'),
    link: `/categories/${CategoryTypes.Sport}`
  },
  {
    type: CategoryTypes.Fashion,
    title: translate('MegaMall_Header_Fashion', 'МОДА'),
    link: `/categories/${CategoryTypes.Fashion}`
  },
  {
    type: CategoryTypes.Beauty,
    title: translate('MegaMall_Header_Health', 'УБАВИНА И ЗДРАВЈЕ'),
    link: `/categories/${CategoryTypes.Beauty}`
  },
  {
    type: CategoryTypes.Home,
    title: translate('MegaMall_Header_Household', 'ДОМАЌИНСТВО'),
    link: `/categories/${CategoryTypes.Home}`
  },
  {
    type: CategoryTypes.Services,
    title: translate('MegaMall_Header_Services', 'УСЛУГИ'),
    link: `/categories/${CategoryTypes.Services}`
  }
];

export { menuItems };
