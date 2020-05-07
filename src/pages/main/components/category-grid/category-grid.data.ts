import { translate } from 'lib/translate';

const cards = [
  {
    id: 1,
    title: translate('EasyFind_CategotyGrid_Technology', 'Технологија'),
    link1: translate('EasyFind_CategotyGrid_Computers', 'КОМПЈУТЕРИ'),
    link2: translate('EasyFind_CategotyGrid_Computer_Equipment', 'КОМПЈУТЕРСКА ОПРЕМА'),
    link3: translate('EasyFind_CategotyGrid_Mobile', 'МОБИЛНИ ТЕЛЕФОНИ'),
    url: '/assets/images/main/Technology.jpg'
  },
  {
    id: 2,
    title: translate('EasyFind_CategotyGrid_Fashion', 'Мода'),
    link1: translate('EasyFind_CategotyGrid_Male', 'МАШКА ОБЛЕКА'),
    link2: translate('EasyFind_CategotyGrid_Female', 'ЖЕНСКА ОБЛЕКА'),
    link3: translate('EasyFind_CategotyGrid_Shoes', 'ОБУВКИ'),
    url: '/assets/images/main/Fashion.jpg'
  },
  {
    id: 3,
    title: translate('EasyFind_CategotyGrid_Beauty', 'Убавина и здравје'),
    link1: translate('EasyFind_CategotyGrid_Cosmetics', 'КОЗМЕТИКА'),
    link2: translate('EasyFind_CategotyGrid_Perfumes', 'ПАРФЕМИ'),
    link3: translate('EasyFind_CategotyGrid_Care', 'НЕГА'),
    url: '/assets/images/main/Beauty_and_Health.jpg'
  },
  {
    id: 4,
    title: translate('EasyFind_CategotyGrid_Sport', 'Спорт'),
    link1: translate('EasyFind_CategotyGrid_Equipment', 'СПОРТСКА ОПРЕМА'),
    link2: translate('EasyFind_CategotyGrid_Clothes', 'СПОРТСКА ОБЛЕКА'),
    link3: translate('EasyFind_CategotyGrid_Fitness', 'ФИТНЕС'),
    url: '/assets/images/main/Sport.jpg'
  },
  {
    id: 5,
    title: translate('EasyFind_CategotyGrid_Household', 'Домаќинство'),
    link1: translate('EasyFind_CategotyGrid_House_Equipment', 'АПАРАТИ ЗА ДОМАЌИНСТВО'),
    link2: translate('EasyFind_CategotyGrid_White', 'БЕЛА ТЕХНИКА'),
    link3: translate('EasyFind_CategotyGrid_Garden', 'ДОМ И ГРАДИНА'),
    url: '/assets/images/main/Household.jpg'
  },
  {
    id: 6,
    title: translate('EasyFind_CategotyGrid_Services', 'Услуги'),
    link1: translate('EasyFind_CategotyGrid_Food', 'ХРАНА И ПИЈАЛОЦИ'),
    link2: translate('EasyFind_CategotyGrid_Education', 'ЕДУКАЦИЈА'),
    link3: translate('EasyFind_CategotyGrid_Events', 'КУЛТУРА И НАСТАНИ'),
    url: '/assets/images/main/Services.jpg'
  }
];

export { cards };
