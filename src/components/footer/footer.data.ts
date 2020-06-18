import { translate } from 'lib/translate';

export interface IFooterItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  link: string;
  url?: string;
}

const footerItems: IFooterItem[] = [
  {
    header: {
      url: '/assets/images/main/Mega-m-white.svg',
      title: translate('EasyFind_Footer_WebSpot', `ВЕБСПОТ | ТА ВЕБСПОТ ДОО`),
      link: ''
    },
    links: []
  },
  {
    header: {
      title: translate('EasyFind_Footer_Header', 'Следете не'),
      link: ''
    },
    links: [
      {
        title: translate('EasyFind_Footer_Facebook', 'Facebook'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Instagram', 'Instagram'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_LinkedIn', 'LinkedIn'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Technology', 'Технологија'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Computer', 'Компјутери'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Computer_Equipment', 'Компјутерска опрема'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Mobile', 'Мобилни телефони'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Sport', 'Спорт'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Male_Clothes', 'Машка облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Female_Clothes', 'Женска облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Sport_Wear', 'Спортска опрема'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Fashion', 'Мода'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Male', 'Машка облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Female', 'Женска облека'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Shoes', 'Обувки'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Beauty_Health', 'Убавина и здравје'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Cosmetics', 'Козметика'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Perfumes', 'Парфеми'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Household', 'Домаќинство'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Home_Equipment', 'Апарати за домаќинство'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Home_Enviroment', 'Бела техника'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Home_Garden', 'Дом и градина'),
        link: '#'
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Services', 'Услуги'),
      link: '#'
    },
    links: [
      {
        title: translate('EasyFind_Footer_Food_Drinks', 'Храна и пијалоци'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Education', 'Едукација'),
        link: '#'
      },
      {
        title: translate('EasyFind_Footer_Culture_Events', 'Култура и настани'),
        link: '#'
      }
    ]
  }
];

export { footerItems };
