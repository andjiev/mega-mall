import { translate } from 'lib/translate';

const cards = [
  {
    id: 1,
    title: translate('MegaMall_CategotyGrid_Technology', 'Технологија'),
    link1: translate('MegaMall_CategotyGrid_Computers', 'КОМПЈУТЕРИ'),
    link2: translate('MegaMall_CategotyGrid_Computer_Equipment', 'КОМПЈУТЕРСКА ОПРЕМА'),
    link3: translate('MegaMall_CategotyGrid_Mobile', 'МОБИЛНИ ТЕЛЕФОНИ'),
    url: '/assets/images/main/category-card-images/technology.jpg'
  },
  {
    id: 2,
    title: translate('MegaMall_CategotyGrid_Fashion', 'Мода'),
    link1: translate('MegaMall_CategotyGrid_Male', 'МАШКА ОБЛЕКА'),
    link2: translate('MegaMall_CategotyGrid_Female', 'ЖЕНСКА ОБЛЕКА'),
    link3: translate('MegaMall_CategotyGrid_Shoes', 'ОБУВКИ'),
    url: '/assets/images/main/category-card-images/fashion.jpg'
  },
  {
    id: 3,
    title: translate('MegaMall_CategotyGrid_Beauty', 'Убавина и здравје'),
    link1: translate('MegaMall_CategotyGrid_Cosmetics', 'КОЗМЕТИКА'),
    link2: translate('MegaMall_CategotyGrid_Perfumes', 'ПАРФЕМИ'),
    link3: translate('MegaMall_CategotyGrid_Care', 'НЕГА'),
    url: '/assets/images/main/category-card-images/health-and-beauty.jpg'
  },
  {
    id: 4,
    title: translate('MegaMall_CategotyGrid_Sport', 'Спорт'),
    link1: translate('MegaMall_CategotyGrid_Equipment', 'СПОРТСКА ОПРЕМА'),
    link2: translate('MegaMall_CategotyGrid_Clothes', 'СПОРТСКА ОБЛЕКА'),
    link3: translate('MegaMall_CategotyGrid_Fitness', 'ФИТНЕС'),
    url: '/assets/images/main/category-card-images/sport.jpg'
  },
  {
    id: 5,
    title: translate('MegaMall_CategotyGrid_Household', 'Домаќинство'),
    link1: translate('MegaMall_CategotyGrid_House_Equipment', 'АПАРАТИ ЗА ДОМАЌИНСТВО'),
    link2: translate('MegaMall_CategotyGrid_White', 'БЕЛА ТЕХНИКА'),
    link3: translate('MegaMall_CategotyGrid_Garden', 'ДОМ И ГРАДИНА'),
    url: '/assets/images/main/category-card-images/household.jpg'
  },
  {
    id: 6,
    title: translate('MegaMall_CategotyGrid_Services', 'Услуги'),
    link1: translate('MegaMall_CategotyGrid_Food', 'ХРАНА И ПИЈАЛОЦИ'),
    link2: translate('MegaMall_CategotyGrid_Education', 'ЕДУКАЦИЈА'),
    link3: translate('MegaMall_CategotyGrid_Events', 'КУЛТУРА И НАСТАНИ'),
    url: '/assets/images/main/category-card-images/services.jpg'
  }
];

export { cards };
