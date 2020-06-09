import { translate } from 'lib/translate';

const filterData = [
  {
    id: 1,
    title: translate('EasyFind_Mobile_Filter_Sort', 'Сортирај'),
    link1: translate('EasyFind_Mobile_Filter_High', 'Висока > ниска'),
    link2: translate('EasyFind_Mobile_Filter_Low', 'Ниска > висока')
  },
  {
    id: 2,
    title: translate('EasyFind_Mobile_Filter_Manufacturer', 'Производител'),
    link1: translate('EasyFind_Mobile_Filter_Acer', 'Acer'),
    link2: translate('EasyFind_Mobile_Filter_Apple', 'Apple'),
    link3: translate('EasyFind_Mobile_Filter_Allienware', 'Allienware'),
    link4: translate('EasyFind_Mobile_Filter_Dell', 'Dell'),
    link5: translate('EasyFind_Mobile_Filter_HP', 'HP'),
    link6: translate('EasyFind_Mobile_Filter_Lenovo', 'Lenovo'),
    link7: translate('EasyFind_Mobile_Filter_Skytech', 'Skytech Gaming'),
    link8: translate('EasyFind_Mobile_Filter_Samsung', 'Samsung'),
    link9: translate('EasyFind_Mobile_Filter_Toshiba', 'Toshiba')
  },
  {
    id: 3,
    title: translate('EasyFind_Mobile_Filter_Shops', 'Продавници'),
    link1: translate('EasyFind_Mobile_Filter_Anhoch', 'Анхоч'),
    link2: translate('EasyFind_Mobile_Filter_Setec', 'Сетек'),
    link3: translate('EasyFind_Mobile_Filter_Neptun', 'Нептун'),
    link4: translate('EasyFind_Mobile_Filter_Niko', 'Нико компјутери'),
    link5: translate('EasyFind_Mobile_Filter_Makpetrol', 'Макпетрол Dell'),
    link6: translate('EasyFind_Mobile_Filter_Techno', 'Техно маркет'),
    link7: translate('EasyFind_Mobile_Filter_Premium', 'Премиум компјутери'),
    link8: translate('EasyFind_Mobile_Filter_Wort', 'Вортекс компјутери'),
    link9: translate('EasyFind_Mobile_Filter_Deka', 'Дека електроникс'),
    link10: translate('EasyFind_Mobile_Filter_Maks', 'Макс компјутери'),
    link11: translate('EasyFind_Mobile_Filter_Elektro', 'Електро Механика'),
    link12: translate('EasyFind_Mobile_Filter_DDStore', 'DDStore LTD')
  }
];

const sortData = [
  {
    id: 1,
    link: translate('EasyFind_Mobile_Filter_High', 'Висока > ниска')
  },
  {
    id: 2,
    link: translate('EasyFind_Mobile_Filter_Low', 'Ниска > висока')
  }
];
export { filterData, sortData };
