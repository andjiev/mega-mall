import { translate } from './translate';

interface MenuItem {
  id: number;
  title: string;
  link: string;
  imageSrc?: string;
  parentId?: number;
  children?: MenuItem[];
}

const menuItems = (): MenuItem[] => [
  {
    id: 1,
    title: translate('MegaMall_Header_Technology', 'ТЕХНОЛОГИЈА'),
    link: `/categories/technology`,
    imageSrc: '/assets/images/header/icons/tehnologija.svg'
  },
  {
    id: 2,
    title: translate('MegaMall_Header_Sport', 'СПОРТ'),
    link: `/categories/sport`,
    imageSrc: '/assets/images/header/icons/sport.svg'
  },
  {
    id: 3,
    title: translate('MegaMall_Header_Fashion', 'МОДА'),
    link: `/categories/fashion`,
    imageSrc: '/assets/images/header/icons/moda.svg'
  },
  {
    id: 4,
    title: translate('MegaMall_Header_Health', 'УБАВИНА И ЗДРАВЈЕ'),
    link: `/categories/beauty`,
    imageSrc: '/assets/images/header/icons/ubavina.svg'
  },
  {
    id: 5,
    title: translate('MegaMall_Header_Household', 'ДОМАЌИНСТВО'),
    link: `/categories/home`,
    imageSrc: '/assets/images/header/icons/domakinstvo.svg'
  },
  {
    id: 6,
    title: translate('MegaMall_Header_Services', 'УСЛУГИ'),
    link: `/categories/services`,
    imageSrc: '/assets/images/header/icons/uslugi.svg'
  },
  {
    id: 7,
    title: translate('MegaMall_Header_Computer_Accessories', 'Компјутерска галантерија'),
    link: `/categories/technology/computer-accessories`,
    parentId: 1
  },
  {
    id: 8,
    title: translate('MegaMall_Header_Monitors', 'Монитори, проектори'),
    link: `/categories/technology/monitors`,
    parentId: 1
  },
  {
    id: 9,
    title: translate('MegaMall_Header_Computers', 'Компјутери, компјутерски компоненти'),
    link: `/categories/technology/computers`,
    parentId: 1
  },
  {
    id: 10,
    title: translate('MegaMall_Header_Printers', 'Печатари и скенери'),
    link: `/categories/technology/printers`,
    parentId: 1
  },
  {
    id: 11,
    title: translate('MegaMall_Header_Consoles', 'Конзоли'),
    link: `/categories/technology/consoles`,
    parentId: 1
  },
  {
    id: 12,
    title: translate('MegaMall_Header_Notebooks', 'Преносни компјутери и опрема'),
    link: `/categories/technology/notebooks`,
    parentId: 1
  }
];

export { MenuItem, menuItems };
