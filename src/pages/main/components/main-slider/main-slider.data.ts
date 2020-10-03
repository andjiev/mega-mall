import { translate } from 'lib/translate';
export interface ISliderItem {
  title: string;
  subTitle: string;
  buttonText: string;
  imageSrc: string;
}

const sliderItems: ISliderItem[] = [
  {
    title: translate('MegaMall_Mainslider_title1', 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ'),
    subTitle: translate('MegaMall_Mainslider_subtitle1', 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.'),
    buttonText: translate('MegaMall_Mainslider_button1', 'Подари веднаш'),
    imageSrc: '/assets/images/main/main-slider/Hantersstylebaner1.png'
  },
  {
    title: translate('MegaMall_Mainslider_title2', 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ'),
    subTitle: translate('MegaMall_Mainslider_subtitle2', 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.'),
    buttonText: translate('MegaMall_Mainslider_button1', 'Подари веднаш'),
    imageSrc: '/assets/images/main/main-slider/trimaksbaner.png'
  },
  {
    title: translate('MegaMall_Mainslider_title3', 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ'),
    subTitle: translate('MegaMall_Mainslider_subtitle3', 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.'),
    buttonText: translate('MegaMall_Mainslider_button1', 'Подари веднаш'),
    imageSrc: '/assets/images/main/main-slider/v-tacbaner.png'
  }
];

export { sliderItems };
