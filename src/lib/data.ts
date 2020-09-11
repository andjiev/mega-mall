import { translate } from './translate';

interface MenuItem {
  id: number;
  title: string;
  link: string;
  imageSrc?: string;
  parentId?: number;
  children?: MenuItem[];
}

const menuItems = (): MenuItem[] => [
  {
    id: 1,
    title: translate('MegaMall_Header_Technology', 'ТЕХНОЛОГИЈА'),
    link: `/categories/technology`,
    imageSrc: '/assets/images/header/icons/tehnologija.svg'
  },
  {
    id: 2,
    title: translate('MegaMall_Header_Sport', 'СПОРТ'),
    link: `/categories/sport`,
    imageSrc: '/assets/images/header/icons/sport.svg'
  },
  {
    id: 3,
    title: translate('MegaMall_Header_Fashion', 'МОДА'),
    link: `/categories/fashion`,
    imageSrc: '/assets/images/header/icons/moda.svg'
  },
  {
    id: 4,
    title: translate('MegaMall_Header_Health', 'УБАВИНА И ЗДРАВЈЕ'),
    link: `/categories/beauty`,
    imageSrc: '/assets/images/header/icons/ubavina.svg'
  },
  {
    id: 5,
    title: translate('MegaMall_Header_Household', 'ДОМАЌИНСТВО'),
    link: `/categories/home`,
    imageSrc: '/assets/images/header/icons/domakinstvo.svg'
  },
  {
    id: 6,
    title: translate('MegaMall_Header_Services', 'УСЛУГИ'),
    link: `/categories/services`,
    imageSrc: '/assets/images/header/icons/uslugi.svg'
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
    title: translate('MegaMall_Header_Household1', 'Бела техника'),
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
    title: translate('MegaMall_Header_Sneakers', 'Патики'),
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
    title: translate('MegaMall_Header_Coolers1', 'Кулери'),
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
    title: translate('MegaMall_Header_Consoles1', 'Конзоли'),
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
    title: translate('MegaMall_Header_Tablets1', 'Таблети'),
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
  },
  {
    id: 106,
    title: translate('MegaMall_Header_Contour', 'Контурирање'),
    link: `/categories/beauty/MakeUP/contour`,
    parentId: 19
  },
  {
    id: 107,
    title: translate('MegaMall_Header_Blush', 'Руменило'),
    link: `/categories/beauty/MakeUP/blush`,
    parentId: 19
  },
  {
    id: 108,
    title: translate('MegaMall_Header_Bronzer', 'Bronzer'),
    link: `/categories/beauty/MakeUP/bronzer`,
    parentId: 19
  },
  {
    id: 109,
    title: translate('MegaMall_Header_Corector', 'Коректори'),
    link: `/categories/beauty/MakeUP/corector`,
    parentId: 19
  },
  {
    id: 110,
    title: translate('MegaMall_Header_Foundation', 'Пудри'),
    link: `/categories/beauty/MakeUP/foundation`,
    parentId: 19
  },
  {
    id: 111,
    title: translate('MegaMall_Header_Fix', 'Фиксатори'),
    link: `/categories/beauty/MakeUP/fix`,
    parentId: 19
  },
  {
    id: 112,
    title: translate('MegaMall_Header_Primer', 'Подлоги'),
    link: `/categories/beauty/MakeUP/primer`,
    parentId: 19
  },
  {
    id: 113,
    title: translate('MegaMall_Header_Highliter', 'Хајлајтери'),
    link: `/categories/beauty/MakeUP/Highliter`,
    parentId: 19
  },
  {
    id: 114,
    title: translate('MegaMall_Header_Mascara', 'Маскари за очи'),
    link: `/categories/beauty/MakeUP/mascara`,
    parentId: 19
  },
  {
    id: 115,
    title: translate('MegaMall_Header_Pen', 'Моливи за очи'),
    link: `/categories/beauty/MakeUP/pen`,
    parentId: 19
  },
  {
    id: 116,
    title: translate('MegaMall_Header_Eyeliner', 'Туш за очи'),
    link: `/categories/beauty/MakeUP/eyeliner`,
    parentId: 19
  },
  {
    id: 117,
    title: translate('MegaMall_Header_Shampoo', 'Шампони'),
    link: `/categories/beauty/Hair/shampoo`,
    parentId: 21
  },
  {
    id: 118,
    title: translate('MegaMall_Header_Regenerator', 'Регенератори'),
    link: `/categories/beauty/Hair/regenerator`,
    parentId: 21
  },
  {
    id: 119,
    title: translate('MegaMall_Header_Treatments', 'Третмани'),
    link: `/categories/beauty/Hair/treatments`,
    parentId: 21
  },
  {
    id: 120,
    title: translate('MegaMall_Header_Bodycare', 'Нега на тело'),
    link: `/categories/beauty/Skincare/bodycare`,
    parentId: 22
  },
  {
    id: 121,
    title: translate('MegaMall_Header_Cellulite', 'Анти целулит'),
    link: `/categories/beauty/Skincare/bodycare/cellulite`,
    parentId: 120
  },
  {
    id: 122,
    title: translate('MegaMall_Header_Waxing', 'Депилација'),
    link: `/categories/beauty/Skincare/bodycare/waxing`,
    parentId: 120
  },
  {
    id: 123,
    title: translate('MegaMall_Header_Lotions', 'Креми'),
    link: `/categories/beauty/Skincare/bodycare/lotion`,
    parentId: 120
  },
  {
    id: 124,
    title: translate('MegaMall_Header_Footcare', 'Нега на стапала'),
    link: `/categories/beauty/Skincare/bodycare/footcare`,
    parentId: 120
  },
  {
    id: 125,
    title: translate('MegaMall_Header_ShowerGel', 'Гелови за туширање'),
    link: `/categories/beauty/Skincare/bodycare/showergel`,
    parentId: 120
  },
  {
    id: 126,
    title: translate('MegaMall_Header_Mani', 'Маникир и педикир'),
    link: `/categories/beauty/Skincare/bodycare/mani`,
    parentId: 120
  },
  {
    id: 127,
    title: translate('MegaMall_Header_Skincaree', 'Нега на кожа'),
    link: `/categories/beauty/Skincare/skincare`,
    parentId: 22
  },
  {
    id: 128,
    title: translate('MegaMall_Header_Micellar', 'Вода за чистење лице'),
    link: `/categories/beauty/Skincare/skincare/micellar`,
    parentId: 127
  },
  {
    id: 129,
    title: translate('MegaMall_Header_Gel', 'Гел за миење лице'),
    link: `/categories/beauty/Skincare/skincare/gel`,
    parentId: 127
  },

  {
    id: 130,
    title: translate('MegaMall_Header_Moisturizer', 'Креми за лице'),
    link: `/categories/beauty/Skincare/skincare/moisturizer`,
    parentId: 127
  },
  {
    id: 131,
    title: translate('MegaMall_Header_Mask', 'Маски за лице'),
    link: `/categories/beauty/Skincare/skincare/mask`,
    parentId: 127
  },
  {
    id: 132,
    title: translate('MegaMall_Header_Organic', 'Органско природно'),
    link: `/categories/beauty/Skincare/skincare/organic`,
    parentId: 127
  },
  {
    id: 133,
    title: translate('MegaMall_Header_Serum', 'Серум за лице'),
    link: `/categories/beauty/Skincare/skincare/serum`,
    parentId: 127
  },
  {
    id: 134,
    title: translate('MegaMall_Header_Toner', 'Тоник за лице'),
    link: `/categories/beauty/Skincare/skincare/toner`,
    parentId: 127
  },
  {
    id: 135,
    title: translate('MegaMall_Header_Peeling', 'Пилинг за лице'),
    link: `/categories/beauty/Skincare/skincare/peeling`,
    parentId: 127
  },
  {
    id: 136,
    title: translate('MegaMall_Header_Bathbomb', 'Купки'),
    link: `/categories/beauty/shower/bathbomb`,
    parentId: 25
  },
  {
    id: 137,
    title: translate('MegaMall_Header_Soap', 'Сапуни'),
    link: `/categories/beauty/shower/soap`,
    parentId: 25
  },
  {
    id: 138,
    title: translate('MegaMall_Header_Showergel', 'Гелови за туширање'),
    link: `/categories/beauty/shower/showergel`,
    parentId: 25
  },
  {
    id: 139,
    title: translate('MegaMall_Header_Peelings', 'Пилинзи'),
    link: `/categories/beauty/shower/peeling`,
    parentId: 25
  },
  {
    id: 140,
    title: translate('MegaMall_Header_Oils', 'Масла за туширање'),
    link: `/categories/beauty/shower/oil`,
    parentId: 25
  },
  {
    id: 141,
    title: translate('MegaMall_Header_Regeneratorss', 'Регенератори'),
    link: `/categories/beauty/shower/regenerator`,
    parentId: 25
  },
  {
    id: 142,
    title: translate('MegaMall_Header_Shaving', 'Бричење'),
    link: `/categories/beauty/shower/shaving`,
    parentId: 25
  },
  {
    id: 142,
    title: translate('MegaMall_Header_Tshirts', 'Маици'),
    link: `/categories/fashion/male_clothes/t-shirt`,
    parentId: 28
  },
  {
    id: 143,
    title: translate('MegaMall_Header_Shirts', 'Кошули'),
    link: `/categories/fashion/male_clothes/shirt`,
    parentId: 28
  },
  {
    id: 144,
    title: translate('MegaMall_Header_Tops', 'Блузи'),
    link: `/categories/fashion/male_clothes/top`,
    parentId: 28
  },
  {
    id: 145,
    title: translate('MegaMall_Header_Suits', 'Одела'),
    link: `/categories/fashion/male_clothes/suit`,
    parentId: 28
  },
  {
    id: 146,
    title: translate('MegaMall_Header_Sweatshirts', 'Дуксери'),
    link: `/categories/fashion/male_clothes/sweatshirt`,
    parentId: 28
  },
  {
    id: 147,
    title: translate('MegaMall_Header_Sweater', 'Џемпери'),
    link: `/categories/fashion/male_clothes/sweater`,
    parentId: 28
  },
  {
    id: 148,
    title: translate('MegaMall_Header_Jacket', 'Јакни'),
    link: `/categories/fashion/male_clothes/jacket`,
    parentId: 28
  },
  {
    id: 149,
    title: translate('MegaMall_Header_Vests', 'Елеци'),
    link: `/categories/fashion/male_clothes/vest`,
    parentId: 28
  },
  {
    id: 150,
    title: translate('MegaMall_Header_Bermuda', 'Бермуди'),
    link: `/categories/fashion/male_clothes/bermuda`,
    parentId: 28
  },
  {
    id: 151,
    title: translate('MegaMall_Header_Pants', 'Панталони'),
    link: `/categories/fashion/male_clothes/pants`,
    parentId: 28
  },
  {
    id: 152,
    title: translate('MegaMall_Header_Jeans', 'Фармерки'),
    link: `/categories/fashion/male_clothes/jeans`,
    parentId: 28
  },
  {
    id: 153,
    title: translate('MegaMall_Header_Swimwear', 'Костими за капење'),
    link: `/categories/fashion/male_clothes/swimwear`,
    parentId: 28
  },
  {
    id: 154,
    title: translate('MegaMall_Header_Coats', 'Капути'),
    link: `/categories/fashion/male_clothes/coat`,
    parentId: 28
  },
  {
    id: 155,
    title: translate('MegaMall_Header_Coat', 'Мантили'),
    link: `/categories/fashion/male_clothes/coats`,
    parentId: 28
  },
  {
    id: 156,
    title: translate('MegaMall_Header_Otherr', 'Останато'),
    link: `/categories/fashion/male_clothes/other`,
    parentId: 28
  },
  {
    id: 157,
    title: translate('MegaMall_Header_Men_Shoes', 'Кондури'),
    link: `/categories/fashion/male_shoes/shoes`,
    parentId: 29
  },
  {
    id: 158,
    title: translate('MegaMall_Header_Men_Sneakers', 'Патики'),
    link: `/categories/fashion/male_shoes/sneakers`,
    parentId: 29
  },
  {
    id: 159,
    title: translate('MegaMall_Header_Sandals', 'Сандали'),
    link: `/categories/fashion/male_shoes/sandal`,
    parentId: 29
  },
  {
    id: 160,
    title: translate('MegaMall_Header_Boots', 'Чизми'),
    link: `/categories/fashion/male_shoes/boot`,
    parentId: 29
  },
  {
    id: 161,
    title: translate('MegaMall_Header_Slippers', 'Папучи и апостолки'),
    link: `/categories/fashion/male_shoes/slipper`,
    parentId: 29
  },
  {
    id: 162,
    title: translate('MegaMall_Header_Men_Other', 'Останато'),
    link: `/categories/fashion/male_shoes/other`,
    parentId: 29
  },
  {
    id: 163,
    title: translate('MegaMall_Header_Men_Belts', 'Ремени'),
    link: `/categories/fashion/male_accessorize/belt`,
    parentId: 30
  },
  {
    id: 164,
    title: translate('MegaMall_Header_Men_Bags', 'Торби'),
    link: `/categories/fashion/male_accessorize/bag`,
    parentId: 30
  },
  {
    id: 165,
    title: translate('MegaMall_Header_Men_Backpacks', 'Ранци'),
    link: `/categories/fashion/male_accessorize/backpack`,
    parentId: 30
  },
  {
    id: 166,
    title: translate('MegaMall_Header_Men_Wallets', 'Паричници'),
    link: `/categories/fashion/male_accessorize/wallet`,
    parentId: 30
  },
  {
    id: 167,
    title: translate('MegaMall_Header_Men_Ties', 'Вратоврски'),
    link: `/categories/fashion/male_accessorize/tie`,
    parentId: 30
  },
  {
    id: 168,
    title: translate('MegaMall_Header_Men_Bows', 'Лептир машни'),
    link: `/categories/fashion/male_accessorize/bow`,
    parentId: 30
  },
  {
    id: 169,
    title: translate('MegaMall_Header_Men_Scarves', 'Марами'),
    link: `/categories/fashion/male_accessorize/scarf`,
    parentId: 30
  },
  {
    id: 170,
    title: translate('MegaMall_Header_Men_Scarve', 'Шалови'),
    link: `/categories/fashion/male_accessorize/scarves`,
    parentId: 30
  },
  {
    id: 171,
    title: translate('MegaMall_Header_Men_Braclets', 'Нараквици'),
    link: `/categories/fashion/male_accessorize/braclet`,
    parentId: 30
  },
  {
    id: 172,
    title: translate('MegaMall_Header_Men_Socks', 'Чорапи'),
    link: `/categories/fashion/male_accessorize/socks`,
    parentId: 30
  },
  {
    id: 173,
    title: translate('MegaMall_Header_Men_Glasses', 'Очила'),
    link: `/categories/fashion/male_accessorize/glasses`,
    parentId: 30
  },
  {
    id: 174,
    title: translate('MegaMall_Header_Men_Other_Stuff', 'Останато'),
    link: `/categories/fashion/male_accessorize/other`,
    parentId: 30
  },
  {
    id: 175,
    title: translate('MegaMall_Header_Women_Tshirt', 'Маици'),
    link: `/categories/fashion/female_clothes/tshirt`,
    parentId: 31
  },
  {
    id: 176,
    title: translate('MegaMall_Header_Women_Tops', 'Топчиња'),
    link: `/categories/fashion/female_clothes/top`,
    parentId: 31
  },
  {
    id: 177,
    title: translate('MegaMall_Header_Women_Shirts', 'Кошули'),
    link: `/categories/fashion/female_clothes/shirt`,
    parentId: 31
  },
  {
    id: 178,
    title: translate('MegaMall_Header_Women_Blouse', 'Блузи'),
    link: `/categories/fashion/female_clothes/blouse`,
    parentId: 31
  },
  {
    id: 179,
    title: translate('MegaMall_Header_Women_Coats', 'Палта'),
    link: `/categories/fashion/female_clothes/coat`,
    parentId: 31
  },
  {
    id: 180,
    title: translate('MegaMall_Header_Women_Jacket', 'Јакни'),
    link: `/categories/fashion/female_clothes/jacket`,
    parentId: 31
  },
  {
    id: 181,
    title: translate('MegaMall_Header_Women_Vests', 'Елеци'),
    link: `/categories/fashion/female_clothes/vest`,
    parentId: 31
  },
  {
    id: 182,
    title: translate('MegaMall_Header_Women_Sweaters', 'Џемпери'),
    link: `/categories/fashion/female_clothes/sweater`,
    parentId: 31
  },
  {
    id: 183,
    title: translate('MegaMall_Header_Women_Sweatshirts', 'Дуксери'),
    link: `/categories/fashion/female_clothes/sweatshirt`,
    parentId: 31
  },
  {
    id: 184,
    title: translate('MegaMall_Header_Women_Coat', 'Мантили'),
    link: `/categories/fashion/female_clothes/coat`,
    parentId: 31
  },
  {
    id: 185,
    title: translate('MegaMall_Header_Women_Overcoat', 'Капути'),
    link: `/categories/fashion/female_clothes/overcoat`,
    parentId: 31
  },
  {
    id: 186,
    title: translate('MegaMall_Header_Women_Dresses', 'Фустани'),
    link: `/categories/fashion/female_clothes/dress`,
    parentId: 31
  },
  {
    id: 187,
    title: translate('MegaMall_Header_Women_Skirts', 'Здолништа'),
    link: `/categories/fashion/female_clothes/skirt`,
    parentId: 31
  },
  {
    id: 188,
    title: translate('MegaMall_Header_Women_Overalls', 'Комбинезони'),
    link: `/categories/fashion/female_clothes/overalls`,
    parentId: 31
  },
  {
    id: 189,
    title: translate('MegaMall_Header_Women_Bermudes', 'Бермуди'),
    link: `/categories/fashion/female_clothes/bermudes`,
    parentId: 31
  },
  {
    id: 190,
    title: translate('MegaMall_Header_Women_Swimwear', 'Костими за капење'),
    link: `/categories/fashion/female_clothes/swimwear`,
    parentId: 31
  },
  {
    id: 191,
    title: translate('MegaMall_Header_Women_Jeans', 'Фармерки'),
    link: `/categories/fashion/female_clothes/jeans`,
    parentId: 31
  },
  {
    id: 192,
    title: translate('MegaMall_Header_Women_Pants', 'Панталони'),
    link: `/categories/fashion/female_clothes/pants`,
    parentId: 31
  },
  {
    id: 193,
    title: translate('MegaMall_Header_Women_Sweats', 'Тренерки'),
    link: `/categories/fashion/female_clothes/sweats`,
    parentId: 31
  },
  {
    id: 194,
    title: translate('MegaMall_Header_Women_Leggings', 'Хеланки'),
    link: `/categories/fashion/female_clothes/legging`,
    parentId: 31
  },
  {
    id: 195,
    title: translate('MegaMall_Header_Women_Other', 'Останато'),
    link: `/categories/fashion/female_clothes/other`,
    parentId: 31
  },
  {
    id: 196,
    title: translate('MegaMall_Header_Women_Sneakers', 'Патики'),
    link: `/categories/fashion/female_shoes/sneakers`,
    parentId: 32
  },
  {
    id: 197,
    title: translate('MegaMall_Header_Women_Shoes', 'Чевли'),
    link: `/categories/fashion/female_shoes/shoes`,
    parentId: 32
  },
  {
    id: 198,
    title: translate('MegaMall_Header_Women_Heels', 'Високи потпетици'),
    link: `/categories/fashion/female_shoes/heels`,
    parentId: 32
  },
  {
    id: 199,
    title: translate('MegaMall_Header_Women_Flats', 'Балетанки'),
    link: `/categories/fashion/female_shoes/flats`,
    parentId: 32
  },
  {
    id: 200,
    title: translate('MegaMall_Header_Women_Sandals', 'Сандали'),
    link: `/categories/fashion/female_shoes/sandals`,
    parentId: 32
  },
  {
    id: 201,
    title: translate('MegaMall_Header_Women_Slippers', 'Папучи и апостолки'),
    link: `/categories/fashion/female_shoes/slippers`,
    parentId: 32
  },
  {
    id: 202,
    title: translate('MegaMall_Header_Women_Boots', 'Чизми'),
    link: `/categories/fashion/female_shoes/boots`,
    parentId: 32
  },
  {
    id: 203,
    title: translate('MegaMall_Header_Women_Other_Stuff', 'Останато'),
    link: `/categories/fashion/female_shoes/other`,
    parentId: 32
  },
  {
    id: 204,
    title: translate('MegaMall_Header_Women_Purses', 'Чанти'),
    link: `/categories/fashion/female_accessorize/purse`,
    parentId: 33
  },
  {
    id: 205,
    title: translate('MegaMall_Header_Women_Wallets', 'Паричници'),
    link: `/categories/fashion/female_accessorize/wallet`,
    parentId: 33
  },
  {
    id: 206,
    title: translate('MegaMall_Header_Women_Belts', 'Ремени'),
    link: `/categories/fashion/female_accessorize/belt`,
    parentId: 33
  },
  {
    id: 207,
    title: translate('MegaMall_Header_Women_Sunnies', 'Очила за сонце'),
    link: `/categories/fashion/female_accessorize/sunnies`,
    parentId: 33
  },
  {
    id: 208,
    title: translate('MegaMall_Header_Women_Jewelry', 'Накит и додатоци'),
    link: `/categories/fashion/female_accessorize/jewelry`,
    parentId: 33
  },
  {
    id: 209,
    title: translate('MegaMall_Header_Women_Hats', 'Шешири и капи'),
    link: `/categories/fashion/female_accessorize/hat`,
    parentId: 33
  },
  {
    id: 210,
    title: translate('MegaMall_Header_Women_Bags', 'Торби'),
    link: `/categories/fashion/female_accessorize/bag`,
    parentId: 33
  },
  {
    id: 211,
    title: translate('MegaMall_Header_Women_Backpacks', 'Ранци'),
    link: `/categories/fashion/female_accessorize/backpack`,
    parentId: 33
  },
  {
    id: 212,
    title: translate('MegaMall_Header_Women_Socks', 'Чорапи'),
    link: `/categories/fashion/female_accessorize/sock`,
    parentId: 33
  },
  {
    id: 213,
    title: translate('MegaMall_Header_Women_Scarves', 'Шалови'),
    link: `/categories/fashion/female_accessorize/scarf`,
    parentId: 33
  },
  {
    id: 214,
    title: translate('MegaMall_Header_Women_Scarf', 'Марами'),
    link: `/categories/fashion/female_accessorize/scarves`,
    parentId: 33
  },
  {
    id: 215,
    title: translate('MegaMall_Header_Women_Gloves', 'Ракавици'),
    link: `/categories/fashion/female_accessorize/glove`,
    parentId: 33
  },
  {
    id: 216,
    title: translate('MegaMall_Header_Breakfast', 'Доручек'),
    link: `/categories/services/food`,
    parentId: 36
  },
  {
    id: 217,
    title: translate('MegaMall_Header_Salads', 'Салати'),
    link: `/categories/services/food`,
    parentId: 36
  },
  {
    id: 218,
    title: translate('MegaMall_Header_Antre', 'Предјадење'),
    link: `/categories/services/food/antre`,
    parentId: 36
  },
  {
    id: 219,
    title: translate('MegaMall_Header_Meal', 'Главно јадење'),
    link: `/categories/services/food/meal`,
    parentId: 36
  },
  {
    id: 220,
    title: translate('MegaMall_Header_Sandwitches', 'Сендвичи'),
    link: `/categories/services/food/sandwitch`,
    parentId: 36
  },
  {
    id: 221,
    title: translate('MegaMall_Header_Pizza', 'Пици'),
    link: `/categories/services/food/pizza`,
    parentId: 36
  },
  {
    id: 222,
    title: translate('MegaMall_Header_Deserts', 'Десерти'),
    link: `/categories/services/food/deserts`,
    parentId: 36
  },
  {
    id: 223,
    title: translate('MegaMall_Header_Pasta', 'Тестенини'),
    link: `/categories/services/food/pasta`,
    parentId: 36
  },
  {
    id: 223,
    title: translate('MegaMall_Header_Pillow_Classic', 'Класични'),
    link: `/categories/home/pillow/classic`,
    parentId: 41
  },
  {
    id: 223,
    title: translate('MegaMall_Header_Pillow_Decorative', 'Декоративни'),
    link: `/categories/home/pillow/decorative`,
    parentId: 41
  },
  {
    id: 223,
    title: translate('MegaMall_Heade_Pillow_Anatomic', 'Анатомски'),
    link: `/categories/home/pillow/anatomic`,
    parentId: 41
  },
  {
    id: 223,
    title: translate('MegaMall_Header_Pillow_Memory', 'Мемори пена'),
    link: `/categories/home/pillow/memory`,
    parentId: 41
  },
  {
    id: 224,
    title: translate('MegaMall_Header_Sheets_Cotton', 'Памучни'),
    link: ` /categories/home/sheeets/cotton`,
    parentId: 42
  },
  {
    id: 224,
    title: translate('MegaMall_Header_Sheets_Season', 'Сезонски'),
    link: ` /categories/home/sheeets/season`,
    parentId: 42
  },
  {
    id: 224,
    title: translate('MegaMall_Header_Sheets_Printed', 'Печатени'),
    link: ` /categories/home/sheeets/printed`,
    parentId: 42
  },
  {
    id: 224,
    title: translate('MegaMall_Header_Sheets_White', 'Бели'),
    link: ` /categories/home/sheeets/white`,
    parentId: 42
  },
  {
    id: 224,
    title: translate('MegaMall_Header_Sheets_Color', 'Во боја'),
    link: ` /categories/home/sheeets/color`,
    parentId: 42
  },
  {
    id: 225,
    title: translate('MegaMall_Header_Quilt_Covers', 'Навлаки за јорган'),
    link: ` /categories/home/bedding/covers`,
    parentId: 43
  },
  {
    id: 226,
    title: translate('MegaMall_Header_Pillow_Covers', 'Навлаки за перници'),
    link: ` /categories/home/bedding/cover`,
    parentId: 43
  },
  {
    id: 227,
    title: translate('MegaMall_Header_Sheet', 'Чаршафи'),
    link: ` /categories/home/bedding/sheets`,
    parentId: 43
  },
  {
    id: 228,
    title: translate('MegaMall_Header_Sets', 'Гарнитури'),
    link: ` /categories/home/furniture/sets`,
    parentId: 44
  },
  {
    id: 229,
    title: translate('MegaMall_Header_Armchairs', 'Фотељи'),
    link: ` /categories/home/furniture/armchair`,
    parentId: 44
  },
  {
    id: 230,
    title: translate('MegaMall_Header_Tables', 'Маси'),
    link: ` /categories/home/furniture/table`,
    parentId: 44
  },
  {
    id: 231,
    title: translate('MegaMall_Header_Chairs', 'Столици'),
    link: ` /categories/home/furniture/chair`,
    parentId: 44
  },
  {
    id: 232,
    title: translate('MegaMall_Header_Couches', 'Комоди'),
    link: ` /categories/home/furniture/couch`,
    parentId: 44
  },
  {
    id: 233,
    title: translate('MegaMall_Header_Garden_Tables', 'Маси'),
    link: ` /categories/home/garden/table`,
    parentId: 47
  },
  {
    id: 234,
    title: translate('MegaMall_Header_Garden_Chairs', 'Столици'),
    link: ` /categories/home/garden/chair`,
    parentId: 47
  },
  {
    id: 235,
    title: translate('MegaMall_Header_Garden_Umbrellas', 'Чадори'),
    link: ` /categories/home/garden/umbrella`,
    parentId: 47
  },
  {
    id: 236,
    title: translate('MegaMall_Header_Garden_Sunbeds', 'Лежалки'),
    link: ` /categories/home/garden/sunbed`,
    parentId: 47
  },
  {
    id: 237,
    title: translate('MegaMall_Header_Garden_Sets', 'Гарнитури'),
    link: ` /categories/home/garden/sets`,
    parentId: 47
  },
  {
    id: 238,
    title: translate('MegaMall_Header_Garden_Pools', 'Базени'),
    link: ` /categories/home/garden/pool`,
    parentId: 47
  },
  {
    id: 239,
    title: translate('MegaMall_Header_Garden_Lights', 'Светилки'),
    link: ` /categories/home/garden/light`,
    parentId: 47
  },
  {
    id: 240,
    title: translate('MegaMall_Header_Garden_Lawn', 'Косилки'),
    link: ` /categories/home/garden.lawn`,
    parentId: 47
  },
  {
    id: 241,
    title: translate('MegaMall_Header_Garden_Shelves', 'Рафтови'),
    link: ` /categories/home/garden/shelves`,
    parentId: 47
  },
  {
    id: 242,
    title: translate('MegaMall_Header_Garden_Stairs', 'Скали'),
    link: ` /categories/home/garden/stair`,
    parentId: 47
  },
  {
    id: 243,
    title: translate('MegaMall_Header_Garden_Tools', 'Алати'),
    link: ` /categories/home/garden/tools`,
    parentId: 47
  },
  {
    id: 244,
    title: translate('MegaMall_Header_Bath_Towels', 'Крпи'),
    link: ` /categories/home/bathroom/towel`,
    parentId: 48
  },
  {
    id: 245,
    title: translate('MegaMall_Header_Bath_Curtains', 'Завеси'),
    link: ` /categories/home/bathroom/curtains`,
    parentId: 48
  },
  {
    id: 246,
    title: translate('MegaMall_Header_Bath_Bathropes', 'Бањарки'),
    link: ` /categories/home/bathroom/bathrope`,
    parentId: 48
  },
  {
    id: 247,
    title: translate('MegaMall_Header_Bikes_Classic', 'Велосипеди'),
    link: `/categories/sport/Bikes/bike`,
    parentId: 49
  },
  {
    id: 248,
    title: translate('MegaMall_Header_Bikes_Kids', 'Детски велосипеди'),
    link: `/categories/sport/Bikes/kids`,
    parentId: 49
  },
  {
    id: 249,
    title: translate('MegaMall_Header_Bikes_Tricycles', 'Трицикли'),
    link: `/categories/sport/Bikes/tricycle`,
    parentId: 49
  },
  {
    id: 250,
    title: translate('MegaMall_Header_Sneakers_Lifestyle', 'Lifestyle'),
    link: `/categories/sport/sneakers/lifestyle`,
    parentId: 52
  },
  {
    id: 251,
    title: translate('MegaMall_Header_Sneakers_Football', 'Фудбал'),
    link: `/categories/sport/sneakers/football`,
    parentId: 52
  },
  {
    id: 252,
    title: translate('MegaMall_Header_Sneakers_Running', 'Трчање'),
    link: `/categories/sport/sneakers/running`,
    parentId: 52
  },
  {
    id: 253,
    title: translate('MegaMall_Header_Sneakers_Basketball', 'Кошарка'),
    link: `/categories/sport/sneakers/basketball`,
    parentId: 52
  },
  {
    id: 254,
    title: translate('MegaMall_Header_Sneakers_Handball', 'Ракомет'),
    link: `/categories/sport/sneakers/handball`,
    parentId: 52
  },
  {
    id: 255,
    title: translate('MegaMall_Header_Sneakers_Fitness', 'Фитнес'),
    link: `/categories/sport/sneakers/fitness`,
    parentId: 52
  },
  {
    id: 256,
    title: translate('MegaMall_Header_Sneakers_Volleyball', 'Одбојка'),
    link: `/categories/sport/sneakers/volleyball`,
    parentId: 52
  },
  {
    id: 257,
    title: translate('MegaMall_Header_Sneakers_Recreation', 'Рекреација'),
    link: `/categories/sport/sneakers/recreation`,
    parentId: 52
  },
  {
    id: 258,
    title: translate('MegaMall_Header_Mountaineering_Backpacks', 'Ранци'),
    link: `/categories/sport/mountaineering/backpack`,
    parentId: 55
  },
  {
    id: 259,
    title: translate('MegaMall_Header_Mountaineering_Boots', 'Чизми'),
    link: `/categories/sport/mountaineering/boots`,
    parentId: 55
  },
  {
    id: 260,
    title: translate('MegaMall_Header_Mountaineering_Bags', 'Ташни'),
    link: `/categories/sport/mountaineering/bags`,
    parentId: 55
  },
  {
    id: 261,
    title: translate('MegaMall_Header_Mountaineering_Bag', 'Торби'),
    link: `/categories/sport/mountaineering/bag`,
    parentId: 55
  },
  {
    id: 262,
    title: translate('MegaMall_Header_Mountaineering_Knives', 'Ножеви'),
    link: `/categories/sport/mountaineering/knive`,
    parentId: 55
  },
  {
    id: 263,
    title: translate('MegaMall_Header_Mountaineering_Tents', 'Шатори'),
    link: `/categories/sport/mountaineering/tent`,
    parentId: 55
  },
  {
    id: 264,
    title: translate('MegaMall_Header_Mountaineering_Lamps', 'Лампи'),
    link: `/categories/sport/mountaineering/lamps`,
    parentId: 55
  },
  {
    id: 265,
    title: translate('MegaMall_Header_Mountaineering_Glasses', 'Наочари'),
    link: `/categories/sport/mountaineering/glasses`,
    parentId: 55
  },
  {
    id: 266,
    title: translate('MegaMall_Header_Mountaineering_Thermoses', 'Термоси'),
    link: `/categories/sport/mountaineering/thermoses`,
    parentId: 55
  },
  {
    id: 267,
    title: translate('MegaMall_Header_Mountaineering_Tools', 'Алати'),
    link: `/categories/sport/mountaineering/tools`,
    parentId: 55
  },
  {
    id: 268,
    title: translate('MegaMall_Header_Mountaineering_Navigation', 'Навигациски уреди'),
    link: `/categories/sport/mountaineering/navigation`,
    parentId: 55
  },
  {
    id: 269,
    title: translate('MegaMall_Header_Mountaineering_Equipment', 'Опрема'),
    link: `/categories/sport/mountaineering/equipment`,
    parentId: 55
  },
  {
    id: 270,
    title: translate('MegaMall_Header_Fitness_Weights', 'Тегови'),
    link: `/categories/sport/fitness/weights`,
    parentId: 56
  },
  {
    id: 271,
    title: translate('MegaMall_Header_Fitness_Ropes', 'Јажиња'),
    link: `/categories/sport/fitness/ropes`,
    parentId: 56
  },
  {
    id: 272,
    title: translate('MegaMall_Header_Fitness_Elastics', 'Стегачи'),
    link: `/categories/sport/fitness/elastics`,
    parentId: 56
  },
  {
    id: 273,
    title: translate('MegaMall_Header_Fitness_Gloves', 'Ракавици'),
    link: `/categories/sport/fitness/gloves`,
    parentId: 56
  },
  {
    id: 274,
    title: translate('MegaMall_Header_Fitness_Bags', 'Торби'),
    link: `/categories/sport/fitness/bag`,
    parentId: 56
  },
  {
    id: 275,
    title: translate('MegaMall_Header_Fitness_Balls', 'Фитнес топки'),
    link: `/categories/sport/fitness/balls`,
    parentId: 56
  }
];

export { MenuItem, menuItems };
