import { translate } from 'lib/translate';

export interface IFooterItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  link?: string;
  src?: string;
}

const footerItems: IFooterItem[] = [
  {
    header: {
      title: 'Logo',
      src: '/assets/images/main/Mega-m-white.svg'
    },
    links: [
      {
        title: translate('MegaMall_Footer_WebSpot', `ВЕБСПОТ | ТА ВЕБСПОТ ДОО`),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('MegaMall_Footer_Header', 'Следете не'),
      link: '#'
    },
    links: [
      {
        title: translate('MegaMall_Footer_Facebook', 'Facebook'),
        link: '#'
      },
      {
        title: translate('MegaMall_Footer_Instagram', 'Instagram'),
        link: '#'
      },
      {
        title: translate('MegaMall_Footer_LinkedIn', 'LinkedIn'),
        link: '#'
      }
    ]
  }
];

export { footerItems };
