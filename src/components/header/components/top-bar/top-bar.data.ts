import { translate } from 'lib/translate';

export interface ITopItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title?: string;
  link?: string;
  id?: number;
  src?: string;
}
const topData: ITopItem[] = [
  {
    header: {
      id: 1,
      src: '/src/assets/images/main/Mega-m-original.svg'
    },
    links: [
      {
        id: 2,
        title: translate('EasyFind_TopBar_Shops', 'Продавници'),
        link: '#'
      },
      {
        id: 3,
        title: translate('EasyFind_TopBar', 'Fb'),
        link: '#'
      },
      {
        id: 4,
        title: translate('EasyFind_TopBar_Insta', 'Insta'),
        link: '#'
      }
    ]
  }
];

export { topData };
