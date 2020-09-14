import { CategoryTypes } from 'lib/enums';
import { translate } from 'lib/translate';

const cardData = [
  {
    id: 1,
    url: '/assets/images/products-subcategories/fitnes.png',
    title: translate('MegaMall_Subcategory_Mobile', 'Мобилни телефони'),
    link: `/categories/${CategoryTypes.Technology}/1`
  },
  {
    id: 2,
    url: '/assets/images/products-subcategories/patiki.png',
    title: translate('MegaMall_Subcategory_PC', 'Преносни компјутери'),
    link: `/categories/${CategoryTypes.Technology}/2`
  },
  {
    id: 3,
    url: '/assets/images/products-subcategories/planinarenje.png',
    title: translate('MegaMall_Subcategory_Speakers', 'Компјутерски звучници'),
    link: `/categories/${CategoryTypes.Technology}/3`
  },
  {
    id: 4,
    url: '/assets/images/products-subcategories/rolerki.png',
    title: translate('MegaMall_Subcategory_Mice', 'Глувчиња'),
    link: `/categories/${CategoryTypes.Technology}/4`
  },
  {
    id: 5,
    url: '/assets/images/products-subcategories/sportskaObleka.png',
    title: translate('MegaMall_Subcategory_Keyboards', 'Тастатури')
  },
  {
    id: 6,
    url: '/assets/images/products-subcategories/sportskaOprema.png',
    title: translate('MegaMall_Subcategory_Backpacks', 'Торби и ранци')
  },
  {
    id: 7,
    url: '/assets/images/products-subcategories/sportskaOprema2.png',
    title: translate('MegaMall_Subcategory_Headsets', 'Слушалки')
  },
  {
    id: 8,
    url: '/assets/images/products-subcategories/trotineti.png',
    title: translate('MegaMall_Subcategory_Cases', 'Футроли и заштита')
  },
  {
    id: 9,
    url: '/assets/images/products-subcategories/velosiped.png',
    title: translate('MegaMall_Subcategory_Laptop', 'Персонални компјутери')
  },
  {
    id: 10,
    url: '/assets/images/products-subcategories/fitnes.png',
    title: translate('MegaMall_Subcategory_Tablets', 'Таблети')
  },
  {
    id: 11,
    url: '/assets/images/products-subcategories/patiki.png',
    title: translate('MegaMall_Subcategory_Gaming', 'Gaming конзоли')
  },
  {
    id: 12,
    url: '/assets/images/products-subcategories/planinarenje.png',
    title: translate('MegaMall_Subcategory_HDD', 'Екстерни HDD')
  }
];
export { cardData };
