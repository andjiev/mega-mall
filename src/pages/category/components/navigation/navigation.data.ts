import { translate } from 'lib/translate';
export interface INavItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  link?: string;
  id?: number;
}

const navigationData: INavItem[] = [
  {
    header: {
      title: translate('EasyFind_Navigation_Manufacturer', 'Производител')
    },
    links: [
      {
        id: 1,
        title: translate('EasyFind_Navigation_HP', 'HP'),
        link: '#'
      },
      {
        id: 2,
        title: translate('EasyFind_Navigation_Dell', 'Dell'),
        link: '#'
      },
      {
        id: 3,
        title: translate('EasyFind_Navigation_Acer', 'Acer'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Navigation_Stores', 'Продавници')
    },
    links: [
      {
        id: 4,
        title: translate('EasyFind_Navigation_Setec', 'Сетек'),
        link: '#'
      },
      {
        id: 5,
        title: translate('EasyFind_Navigation_Anhoch', 'Анхоч'),
        link: '#'
      },
      {
        id: 6,
        title: translate('EasyFind_Navigation_Neptun', 'Нептун'),
        link: '#'
      },
      {
        id: 7,
        title: translate('EasyFind_Navigation_TechnoMarket', 'Техно Маркет'),
        link: '#'
      },
      {
        id: 8,
        title: translate('EasyFind_Navigation_Elektromehanika', 'Електро Механика'),
        link: '#'
      },
      {
        id: 9,
        title: translate('EasyFind_Navigation_Nikokompjuteri', 'Нико компјутери'),
        link: '#'
      },
      {
        id: 10,
        title: translate('EasyFind_Navigation_Makskompjuteri', 'Макс компјутери'),
        link: '#'
      },
      {
        id: 11,
        title: translate('EasyFind_Navigation_Vorteks', 'Вортекс компјутери'),
        link: '#'
      },
      {
        id: 12,
        title: translate('EasyFind_Navigation_MakpetrolDell', 'Макпетрол Dell продавница'),
        link: '#'
      },
      {
        id: 13,
        title: translate('EasyFind_Navigation_Premiumkompjuteri', 'Премиум компјутери'),
        link: '#'
      },
      {
        id: 14,
        title: translate('EasyFind_Navigation_DDStoreLtd', 'DDStore LTD'),
        link: '#'
      },
      {
        id: 15,
        title: translate('EasyFind_Navigation_DekaElektroniks', 'Дека електроникс'),
        link: '#'
      }
    ]
  }
];

export { navigationData };
