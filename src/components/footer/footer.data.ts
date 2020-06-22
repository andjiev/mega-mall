import { translate } from 'lib/translate';

export interface IFooterItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
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
        title: translate('EasyFind_Footer_WebSpot', `ВЕБСПОТ | ТА ВЕБСПОТ ДОО`)
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Header', 'Следете не')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Facebook', 'Facebook')
      },
      {
        title: translate('EasyFind_Footer_Instagram', 'Instagram')
      },
      {
        title: translate('EasyFind_Footer_LinkedIn', 'LinkedIn')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Technology', 'Технологија')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Computer', 'Компјутери')
      },
      {
        title: translate('EasyFind_Footer_Computer_Equipment', 'Компјутерска опрема')
      },
      {
        title: translate('EasyFind_Footer_Mobile', 'Мобилни телефони')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Sport', 'Спорт')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Male_Clothes', 'Машка облека')
      },
      {
        title: translate('EasyFind_Footer_Female_Clothes', 'Женска облека')
      },
      {
        title: translate('EasyFind_Footer_Sport_Wear', 'Спортска опрема')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Fashion', 'Мода')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Male', 'Машка облека')
      },
      {
        title: translate('EasyFind_Footer_Female', 'Женска облека')
      },
      {
        title: translate('EasyFind_Footer_Shoes', 'Обувки')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Beauty_Health', 'Убавина и здравје')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Cosmetics', 'Козметика')
      },
      {
        title: translate('EasyFind_Footer_Perfumes', 'Парфеми')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Household', 'Домаќинство')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Home_Equipment', 'Апарати за домаќинство')
      },
      {
        title: translate('EasyFind_Footer_Home_Enviroment', 'Бела техника')
      },
      {
        title: translate('EasyFind_Footer_Home_Garden', 'Дом и градина')
      }
    ]
  },
  {
    header: {
      title: translate('EasyFind_Footer_Services', 'Услуги')
    },
    links: [
      {
        title: translate('EasyFind_Footer_Food_Drinks', 'Храна и пијалоци')
      },
      {
        title: translate('EasyFind_Footer_Education', 'Едукација')
      },
      {
        title: translate('EasyFind_Footer_Culture_Events', 'Култура и настани')
      }
    ]
  }
];

export { footerItems };
