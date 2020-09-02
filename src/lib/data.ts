import { translate } from './translate';

interface MenuItem {
  id: number;
  title: string;
  link: string;
  parentId?: number;
  children?: MenuItem[];
}

const menuItems = (): MenuItem[] => [
  {
    id: 1,
    title: translate('MegaMall_Header_Technology', 'ТЕХНОЛОГИЈА'),
    link: `/categories/technology`
  },
  {
    id: 2,
    title: translate('MegaMall_Header_Sport', 'СПОРТ'),
    link: `/categories/sport`
  },
  {
    id: 3,
    title: translate('MegaMall_Header_Fashion', 'МОДА'),
    link: `/categories/fashion`
  },
  {
    id: 4,
    title: translate('MegaMall_Header_Health', 'УБАВИНА И ЗДРАВЈЕ'),
    link: `/categories/beauty`
  },
  {
    id: 5,
    title: translate('MegaMall_Header_Household', 'ДОМАЌИНСТВО'),
    link: `/categories/home`
  },
  {
    id: 6,
    title: translate('MegaMall_Header_Services', 'УСЛУГИ'),
    link: `/categories/services`
  },
  {
    id: 7,
    title: translate('MegaMall_Header_Computer_Accessories', 'Компјутерска галантерија'),
    link: `/categories/technology/computer-accessories`,
    parentId: 1
  },
  {
    id: 8,
    title: translate('MegaMall_Header_Monitors', 'Монитори, проектори'),
    link: `/categories/technology/monitors`,
    parentId: 1
  },
  {
    id: 9,
    title: translate('MegaMall_Header_Computers', 'Компјутери, компјутерски компоненти'),
    link: `/categories/technology/computers`,
    parentId: 1
  },
  {
    id: 10,
    title: translate('MegaMall_Header_Printers', 'Печатари и скенери'),
    link: `/categories/technology/printers`,
    parentId: 1
  },
  {
    id: 11,
    title: translate('MegaMall_Header_Consoles', 'Конзоли'),
    link: `/categories/technology/consoles`,
    parentId: 1
  },
  {
    id: 12,
    title: translate('MegaMall_Header_Notebooks', 'Преносни компјутери и опрема'),
    link: `/categories/technology/notebooks`,
    parentId: 1
  },
  {
    id: 13,
    title: translate('MegaMall_Header_Tablets', 'Таблет уреди'),
    link: `/categories/technology/tablets`,
    parentId: 1
  },
  {
    id: 14,
    title: translate('MegaMall_Header_Multimedia', 'Мултимедија'),
    link: `/categories/technology/multimedia`,
    parentId: 1
  },
  {
    id: 15,
    title: translate('MegaMall_Header_Mobiles', 'Мобилни уреди'),
    link: `/categories/technology/mobiles`,
    parentId: 1
  },
  {
    id: 16,
    title: translate('MegaMall_Header_Household', 'Бела техника'),
    link: `/categories/technology/household`,
    parentId: 1
  },
  {
    id: 17,
    title: translate('MegaMall_Header_Video', 'Видео и фотографија'),
    link: `/categories/technology/video`,
    parentId: 1
  },
  {
    id: 18,
    title: translate('MegaMall_Header_Navigation', 'Навигациски уреди'),
    link: `/categories/technology/Navigation`,
    parentId: 1
  },
  {
    id: 19,
    title: translate('MegaMall_Header_MakeUP', 'MAKE UP'),
    link: `/categories/beauty/MakeUP`,
    parentId: 4
  },
  {
    id: 20,
    title: translate('MegaMall_Header_Accessorice', 'Аксесоари'),
    link: `/categories/beauty/Accessorice`,
    parentId: 4
  },
  {
    id: 21,
    title: translate('MegaMall_Header_Hair', 'Коса'),
    link: `/categories/beauty/Hair`,
    parentId: 4
  },
  {
    id: 22,
    title: translate('MegaMall_Header_Skincare', 'Нега на кожа'),
    link: `/categories/beauty/Skincare`,
    parentId: 4
  },
  {
    id: 23,
    title: translate('MegaMall_Header_Perfumes', 'Парфеми'),
    link: `/categories/beauty/perfumes`,
    parentId: 4
  },
  {
    id: 24,
    title: translate('MegaMall_Header_Oral_hygiene', 'Орална хигиена'),
    link: `/categories/beauty/oral_hygiene`,
    parentId: 4
  },
  {
    id: 25,
    title: translate('MegaMall_Header_Shower', 'Када и туш'),
    link: `/categories/beauty/shower`,
    parentId: 4
  },
  {
    id: 26,
    title: translate('MegaMall_Header_Lotion', 'Креми'),
    link: `/categories/beauty/lotion`,
    parentId: 4
  },
  {
    id: 27,
    title: translate('MegaMall_Header_Breastfeeding', 'Доење'),
    link: `/categories/beauty/Breastfeeding`,
    parentId: 4
  },
  {
    id: 28,
    title: translate('MegaMall_Header_Male_clothes', 'Машка облека'),
    link: `/categories/fashion/male_clothes`,
    parentId: 3
  },
  {
    id: 29,
    title: translate('MegaMall_Header_Male_shoes', 'Машки обувки'),
    link: `/categories/fashion/male_shoes`,
    parentId: 3
  },
  {
    id: 30,
    title: translate('MegaMall_Header_Male_accessorize', 'Машки додатоци'),
    link: `/categories/fashion/male_accessorize`,
    parentId: 3
  },
  {
    id: 31,
    title: translate('MegaMall_Header_Female_clothes', 'Женска облека'),
    link: `/categories/fashion/female_clothes`,
    parentId: 3
  },
  {
    id: 32,
    title: translate('MegaMall_Header_Female_shoes', 'Женски обувки'),
    link: `/categories/fashion/female_shoes`,
    parentId: 3
  },
  {
    id: 33,
    title: translate('MegaMall_Header_Female_accessorize', 'Женски додатоци'),
    link: `/categories/fashion/female_accessorize`,
    parentId: 3
  },
  {
    id: 34,
    title: translate('MegaMall_Header_Кids_shoes', 'Детски обувки'),
    link: `/categories/fashion/kids_shoes`,
    parentId: 3
  },
  {
    id: 35,
    title: translate('MegaMall_Header_Кids_clothes', 'Детска облека'),
    link: `/categories/fashion/kids_clothes`,
    parentId: 3
  },
  {
    id: 36,
    title: translate('MegaMall_Header_Food', 'Храна'),
    link: `/categories/services/food`,
    parentId: 6
  },
  {
    id: 37,
    title: translate('MegaMall_Header_Events', 'Настани'),
    link: `/categories/services/events`,
    parentId: 6
  },
  {
    id: 38,
    title: translate('MegaMall_Header_Courses', 'Обуки и курсеви'),
    link: `/categories/services/courses`,
    parentId: 6
  },
  {
    id: 39,
    title: translate('MegaMall_Header_Security', 'Полиси за осигурување'),
    link: `/categories/services/security`,
    parentId: 6
  },
  {
    id: 40,
    title: translate('MegaMall_Header_Matress', 'Душеци и над-душеци'),
    link: `/categories/home/matress`,
    parentId: 5
  },
  {
    id: 41,
    title: translate('MegaMall_Header_Pillow', 'Перници'),
    link: `/categories/home/pillow`,
    parentId: 5
  },
  {
    id: 42,
    title: translate('MegaMall_Header_Sheets', 'Јоргани'),
    link: `/categories/home/sheeets`,
    parentId: 5
  },
  {
    id: 43,
    title: translate('MegaMall_Header_Bedding', 'Постелнина'),
    link: `/categories/home/bedding`,
    parentId: 5
  },
  {
    id: 44,
    title: translate('MegaMall_Header_Furniture', 'Мебел'),
    link: `/categories/home/furniture`,
    parentId: 5
  },
  {
    id: 45,
    title: translate('MegaMall_Header_Appliances', 'Бела техника'),
    link: `/categories/home/appliances`,
    parentId: 5
  },
  {
    id: 46,
    title: translate('MegaMall_Header_Kitchen', 'Кујна'),
    link: `/categories/home/kitchen`,
    parentId: 5
  },
  {
    id: 47,
    title: translate('MegaMall_Header_Garden', 'Двор и градина'),
    link: `/categories/home/garden`,
    parentId: 5
  },
  {
    id: 48,
    title: translate('MegaMall_Header_Bathroon', 'Бања'),
    link: `/categories/home/bathroom`,
    parentId: 5
  },
  {
    id: 49,
    title: translate('MegaMall_Header_Bikes', 'Велосипеди'),
    link: `/categories/sport/Bikes`,
    parentId: 2
  },
  {
    id: 50,
    title: translate('MegaMall_Header_Scooters', 'Тротинети'),
    link: `/categories/sport/scooters`,
    parentId: 2
  },
  {
    id: 51,
    title: translate('MegaMall_Header_Rollers', 'Ролерки'),
    link: `/categories/sport/rollers`,
    parentId: 2
  },
  {
    id: 52,
    title: translate('MegaMall_Header_Seakers', 'Патики'),
    link: `/categories/sport/sneakers`,
    parentId: 2
  },
  {
    id: 53,
    title: translate('MegaMall_Header_Sportswear', 'Спортска облека'),
    link: `/categories/sport/sportswear`,
    parentId: 2
  },
  {
    id: 54,
    title: translate('MegaMall_Header_Sport_equipment', 'Спортска опрема'),
    link: `/categories/sport/sport_equipment`,
    parentId: 2
  },
  {
    id: 55,
    title: translate('MegaMall_Header_Mountaineering', 'Планинарење'),
    link: `/categories/sport/mountaineering`,
    parentId: 2
  },
  {
    id: 56,
    title: translate('MegaMall_Header_Fitness', 'Фитнес'),
    link: `/categories/sport/fitness`,
    parentId: 2
  }
];

export { MenuItem, menuItems };
