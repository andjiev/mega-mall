import { CategoryTypes } from 'lib/enums';

export interface ISubmenuItem {
  type: CategoryTypes;
  data: IData;
}

interface IData {
  left: IBoxItem;
  right: IBoxItem;
}

interface IBoxItem {
  title: string;
  items: IItem[];
}

interface IItem {
  id: number;
  title: string;
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
      right: {
        title: 'Мобилни телефони',
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
        title: 'Title',
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
        title: 'Title',
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

export { submenuItems };
