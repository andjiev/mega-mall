import { translate } from 'lib/translate';

export interface IFooterItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  link: string;
}

const footerItems: IFooterItem[] = [
  {
    header: {
      title: translate('EasyFind_Footer_title', `ВЕБСПОТ | ТА ВЕБСПОТ ДОО`),
      link: ''
    },
    links: []
  },
  {
    header: {
      title: translate('EasyFind_Footer_header', 'Следете не'),
      link: ''
    },
    links: [
      {
        title: translate('EasyFind_Footer_link1', 'Facebook'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_link2', 'Instagram'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_link3', 'LinkedIn'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title1', 'Технологија'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_link4', 'Компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_link5', 'Компјутерска опрема'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_link6', 'Мобилни телефони'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title2', 'Спорт'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_link7', 'Машка облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_link8', 'Женска облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_link9', 'Спортска опрема'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title3', 'Мода'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_link10', 'Машка облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_link11', 'Женска облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_link12', 'Обувки'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title4', 'Убавина и здравје'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_link13', 'Козметика'),
        link: '#'
      },
      {
        title: translate('EasyFind_link14', 'Парфеми'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title5', 'Домаќинство'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_link15', 'Апарати за домаќинство'),
        link: '#'
      },
      {
        title: translate('EasyFind_link16', 'Бела техника'),
        link: '#'
      },
      {
        title: translate('EasyFind_link17', 'Дом и градина'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_title6', 'Услуги'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_link18', 'Храна и пијалоци'),
        link: '#'
      },
      {
        title: translate('EasyFind_link19', 'Едукација'),
        link: '#'
      },
      {
        title: translate('EasyFind_link20', 'Култура и настани'),
        link: '#'
      }
    ]
  }
];

export { footerItems };
