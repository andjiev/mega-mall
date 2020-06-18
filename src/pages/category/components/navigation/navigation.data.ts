import { translate } from 'lib/translate';
export interface INavItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  link?: string;
}

const navigationData: INavItem[] = [
  {
    header: {
      title: translate('EasyFind_Navigation_Manufacturer', 'Производител')
    },
    links: [
      {
        title: translate('EasyFind_Navigation_HP', 'HP'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Dell', 'Dell'),
        link: '#'
      },
      {
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
        title: translate('EasyFind_Navigation_Setec', 'Сетек'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Anhoch', 'Анхоч'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Neptun', 'Нептун'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_TechnoMarket', 'Техно Маркет'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Elektromehanika', 'Електро Механика'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Nikokompjuteri', 'Нико компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Makskompjuteri', 'Макс компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Vorteks', 'Вортекс компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_MakpetrolDell', 'Макпетрол Dell продавница'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_Premiumkompjuteri', 'Премиум компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_DDStoreLtd', 'DDStore LTD'),
        link: '#'
      },
      {
        title: translate('EasyFind_Navigation_DekaElektroniks', 'Дека електроникс'),
        link: '#'
      }
    ]
  }
];

export { navigationData };
