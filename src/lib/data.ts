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
  },
  {
    id: 57,
    title: translate('MegaMall_Header_Keyboards', 'Тастатури'),
    link: `/categories/technology/computer-accessories/keyboards`,
    parentId: 7
  },
  {
    id: 58,
    title: translate('MegaMall_Header_Mice', 'Глувчиња'),
    link: `/categories/technology/computer-accessories/mice`,
    parentId: 7
  },
  {
    id: 59,
    title: translate('MegaMall_Header_Substrates', 'Подлоги'),
    link: `/categories/technology/computer-accessories/substrates`,
    parentId: 7
  },
  {
    id: 60,
    title: translate('MegaMall_Header_Speakers', 'Компјутерски звучници'),
    link: `/categories/technology/computer-accessories/speakers`,
    parentId: 7
  },
  {
    id: 61,
    title: translate('MegaMall_Header_Coolers', 'Кулери'),
    link: `/categories/technology/computer-accessories/coolers`,
    parentId: 7
  },
  {
    id: 62,
    title: translate('MegaMall_Header_Webcam', 'Веб камери,микрофони'),
    link: `/categories/technology/computer-accessories/webcam`,
    parentId: 7
  },
  {
    id: 63,
    title: translate('MegaMall_Header_Accessories', 'Додатоци'),
    link: `/categories/technology/computer-accessories/accessories`,
    parentId: 7
  },
  {
    id: 64,
    title: translate('MegaMall_Header_PC', 'Куќишта'),
    link: `/categories/technology/comuters/PC`,
    parentId: 9
  },
  {
    id: 65,
    title: translate('MegaMall_Header_Coolers', 'Кулери'),
    link: `/categories/technology/computers/coolers`,
    parentId: 9
  },
  {
    id: 66,
    title: translate('MegaMall_Header_Graphics', 'Графички карти'),
    link: `/categories/technology/computers/graphics`,
    parentId: 9
  },
  {
    id: 67,
    title: translate('MegaMall_Header_Hard_disk', 'Тврди дискови'),
    link: `/categories/technology/computers/hard_disk`,
    parentId: 9
  },
  {
    id: 68,
    title: translate('MegaMall_Header_Motherboards', 'Матични плочи'),
    link: `/categories/technology/computers/motherboards`,
    parentId: 9
  },
  {
    id: 69,
    title: translate('MegaMall_Header_Optical', 'Оптички уреди'),
    link: `/categories/technology/computers/optical`,
    parentId: 9
  },
  {
    id: 70,
    title: translate('MegaMall_Header_Power', 'Напојувања'),
    link: `/categories/technology/computers/power`,
    parentId: 9
  },
  {
    id: 71,
    title: translate('MegaMall_Header_Processors', 'Процесори'),
    link: `/categories/technology/computers/processors`,
    parentId: 9
  },
  {
    id: 72,
    title: translate('MegaMall_Header_RAM', 'RAM меморија'),
    link: `/categories/technology/computers/RAM`,
    parentId: 9
  },
  {
    id: 73,
    title: translate('MegaMall_Header_TV', 'ТВ и Звучни карти'),
    link: `/categories/technology/computers/TV`,
    parentId: 9
  },
  {
    id: 74,
    title: translate('MegaMall_Header_Consoles', 'Конзоли'),
    link: `/categories/technology/consoles/consoles`,
    parentId: 11
  },
  {
    id: 75,
    title: translate('MegaMall_Header_Games', 'Игри за конзоли'),
    link: `/categories/technology/consoles/games`,
    parentId: 11
  },
  {
    id: 76,
    title: translate('MegaMall_Header_Accessorices', 'Додатоци'),
    link: `/categories/technology/consoles/accessorices`,
    parentId: 11
  },
  {
    id: 77,
    title: translate('MegaMall_Header_Laptops', 'Лаптопи'),
    link: `/categories/technology/notebooks/laptops`,
    parentId: 12
  },
  {
    id: 78,
    title: translate('MegaMall_Header_Pads_coolers', 'Подлоги/кулери'),
    link: `/categories/technology/notebooks/pads_coolers`,
    parentId: 12
  },
  {
    id: 79,
    title: translate('MegaMall_Header_Backpacks', 'Ташни и ранци'),
    link: `/categories/technology/notebooks/backpacks`,
    parentId: 12
  },
  {
    id: 80,
    title: translate('MegaMall_Header_Equipment', 'Опрема'),
    link: `/categories/technology/notebooks/equipment`,
    parentId: 12
  },
  {
    id: 81,
    title: translate('MegaMall_Header_Tablets', 'Таблети'),
    link: `/categories/technology/tablets/tablets`,
    parentId: 13
  },
  {
    id: 82,
    title: translate('MegaMall_Header_Cases', 'Футроли'),
    link: `/categories/technology/tablets/cases`,
    parentId: 13
  },
  {
    id: 83,
    title: translate('MegaMall_Header_Tablet_Equipment', 'Опрема'),
    link: `/categories/technology/tablets/tablet_equipment`,
    parentId: 13
  },
  {
    id: 84,
    title: translate('MegaMall_Header_TVs', 'Телевизори'),
    link: `/categories/technology/multimedia/TVs`,
    parentId: 14
  },
  {
    id: 85,
    title: translate('MegaMall_Header_Music', 'Музички системи'),
    link: `/categories/technology/multimedia/music`,
    parentId: 14
  },
  {
    id: 86,
    title: translate('MegaMall_Header_Cinema', 'Домашно кино'),
    link: `/categories/technology/multimedia/cinema`,
    parentId: 14
  },
  {
    id: 87,
    title: translate('MegaMall_Header_Accessoricess', 'Галантерија'),
    link: `/categories/technology/multimedia/accessorices`,
    parentId: 14
  },
  {
    id: 88,
    title: translate('MegaMall_Header_Portable_speakers', 'Преносни звучници'),
    link: `/categories/technology/multimedia/portable_speakers`,
    parentId: 14
  },
  {
    id: 89,
    title: translate('MegaMall_Header_Mobile_phones', 'Мобилни телефони'),
    link: `/categories/technology/mobiles/mobile_phones`,
    parentId: 15
  },
  {
    id: 90,
    title: translate('MegaMall_Header_Smartwatch', 'Паметни часовници'),
    link: `/categories/technology/mobiles/smartwatch`,
    parentId: 15
  },
  {
    id: 91,
    title: translate('MegaMall_Header_Phonecase', 'Маски за телефони'),
    link: `/categories/technology/mobiles/phonecase`,
    parentId: 15
  },
  {
    id: 92,
    title: translate('MegaMall_Header_Other_equipment', 'Додатна опрема'),
    link: `/categories/technology/mobiles/other_equipment`,
    parentId: 15
  },
  {
    id: 93,
    title: translate('MegaMall_Header_Stoves', 'Шпорети'),
    link: `/categories/technology/household/stoves`,
    parentId: 16
  },
  {
    id: 94,
    title: translate('MegaMall_Header_Refrigerators', 'Фрижидери'),
    link: `/categories/technology/household/refrigerators`,
    parentId: 16
  },
  {
    id: 95,
    title: translate('MegaMall_Header_Microwave', 'Микробранови печки'),
    link: `/categories/technology/household/microwave`,
    parentId: 16
  },
  {
    id: 96,
    title: translate('MegaMall_Header_Freezers', 'Замрзнувачи'),
    link: `/categories/technology/household/freezers`,
    parentId: 16
  },
  {
    id: 97,
    title: translate('MegaMall_Header_Aspirators', 'Аспиратори'),
    link: `/categories/technology/household/aspirators`,
    parentId: 16
  },
  {
    id: 98,
    title: translate('MegaMall_Header_Water_heater', 'Бојлери'),
    link: `/categories/technology/household/water_heater`,
    parentId: 16
  },
  {
    id: 99,
    title: translate('MegaMall_Header_Washing_machine', 'Машини за перење'),
    link: `/categories/technology/household/washing_machine`,
    parentId: 16
  },
  {
    id: 100,
    title: translate('MegaMall_Header_Dishwasher', 'Машини за садови'),
    link: `/categories/technology/household/dishwasher`,
    parentId: 16
  },
  {
    id: 101,
    title: translate('MegaMall_Header_Heating', 'Системи за греење и ладење'),
    link: `/categories/technology/household/heating`,
    parentId: 16
  },
  {
    id: 102,
    title: translate('MegaMall_Header_Photo', 'Фото апарати'),
    link: `/categories/technology/video/photo`,
    parentId: 17
  },
  {
    id: 103,
    title: translate('MegaMall_Header_Camera', 'Камери'),
    link: `/categories/technology/video/camera`,
    parentId: 17
  },
  {
    id: 104,
    title: translate('MegaMall_Header_Drone', 'Дронови'),
    link: `/categories/technology/video/drone`,
    parentId: 17
  },
  {
    id: 105,
    title: translate('MegaMall_Header_Others', 'Опрема'),
    link: `/categories/technology/video/others`,
    parentId: 17
  }
];

export { MenuItem, menuItems };
