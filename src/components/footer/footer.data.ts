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
      title: `ВЕБСПОТ | ТА ВЕБСПОТ ДОО`,
      link: ''
    },
    links: []
  },
  {
    header: {
      title: 'Следете не',
      link: ''
    },
    links: [
      {
        title: 'Facebook',
        link: '#'
      },
      {
        title: 'Instagram',
        link: '#'
      },
      {
        title: 'LinkedIn',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Технологија',
      link: '#'
    },
    links: [
      {
        title: 'Компјутери',
        link: '#'
      },
      {
        title: 'Компјутерска опрема',
        link: '#'
      },
      {
        title: 'Мобилни телефони',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Спорт',
      link: '#'
    },
    links: [
      {
        title: 'Машка облека',
        link: '#'
      },
      {
        title: 'Женска облека',
        link: '#'
      },
      {
        title: 'Спортска опрема',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Мода',
      link: '#'
    },
    links: [
      {
        title: 'Машка облека',
        link: '#'
      },
      {
        title: 'Женска облека',
        link: '#'
      },
      {
        title: 'Обувки',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Убавина и здравје',
      link: '#'
    },
    links: [
      {
        title: 'Козметика',
        link: '#'
      },
      {
        title: 'Парфеми',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Домаќинство',
      link: '#'
    },
    links: [
      {
        title: 'Апарати за домаќинство',
        link: '#'
      },
      {
        title: 'Бела техника',
        link: '#'
      },
      {
        title: 'Дом и градина',
        link: '#'
      }
    ]
  },
  {
    header: {
      title: 'Услуги',
      link: '#'
    },
    links: [
      {
        title: 'Храна и пијалоци',
        link: '#'
      },
      {
        title: 'Едукација',
        link: '#'
      },
      {
        title: 'Култура и настани',
        link: '#'
      }
    ]
  }
];

export { footerItems };
