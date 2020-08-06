import { CategoryTypes } from 'lib/enums';

export interface ISubmenuItem {
  type: CategoryTypes;
  data: IData;
}

interface IData {
  left: IBoxItem;
  right: IBoxItem;
  center: IBoxItem;
}

interface IBoxItem {
  title: string;
  items: IItem[];
  url?: string;
}

interface IItem {
  id: number;
  title: string;
  url?: string;
}

const submenuItems: ISubmenuItem[] = [
  {
    type: CategoryTypes.Technology,
    data: {
      left: {
        title: 'Компјутери и опрема',
        items: [
          {
            id: 1,
            title: 'Персонални компјутери'
          },
          {
            id: 2,
            title: 'Преносни компјутери'
          },
          {
            id: 3,
            title: 'Опрема за лаптоп'
          },
          {
            id: 4,
            title: 'Глувчиња'
          },
          {
            id: 5,
            title: 'Тастатури'
          },
          {
            id: 6,
            title: 'Компјутерски звучници'
          }
        ]
      },
      center: {
        title: 'Мобилни телефони 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Мобилни телефони 3',
        items: [
          {
            id: 1,
            title: 'Маски за телефон'
          },
          {
            id: 2,
            title: 'Маска предна'
          },
          {
            id: 3,
            title: 'Предно стакло тач-бело'
          },
          {
            id: 4,
            title: 'Дисплеј црн'
          },
          {
            id: 5,
            title: 'Батерии'
          },
          {
            id: 6,
            title: 'Задни капачиња'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Sport,
    data: {
      left: {
        title: 'Спорт1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      center: {
        title: 'Спорт 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Спорт 3',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Fashion,
    data: {
      left: {
        title: 'Мода1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      center: {
        title: 'Мода 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Мода 3',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Beauty,
    data: {
      left: {
        title: 'Здравје и убавина 1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      center: {
        title: 'Здравје и убавина 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Здравје и убавина 3',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Home,
    data: {
      left: {
        title: 'Домаќинство 1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      center: {
        title: 'Домаќинство 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },

      right: {
        title: 'Домаќинство 3',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Services,
    data: {
      left: {
        title: 'Услуги 1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      center: {
        title: 'Услуги 2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Услуги 3',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      }
    }
  }
];

const submenuIcons = [
  {
    url: '/assets/images/header/icons/tehnologija.svg'
  },
  {
    url: '/assets/images/header/icons/sport.svg'
  },
  {
    url: '/assets/images/header/icons/uslugi.svg'
  },
  {
    url: '/assets/images/header/icons/ubavina.svg'
  },
  {
    url: '/assets/images/header/icons/domakinstvo.svg'
  },
  {
    url: '/assets/images/header/icons/uslugi.svg'
  }
];

export { submenuItems, submenuIcons };
