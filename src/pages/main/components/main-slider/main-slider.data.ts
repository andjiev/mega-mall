import HeroImage from '../../../../assets/images/Hero-image-.jpg';

export interface ISliderItem {
  title: string;
  subTitle: string;
  buttonText: string;
  imageSource: string;
}

const sliderItems: ISliderItem[] = [
  {
    title: 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ',
    subTitle: 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.',
    buttonText: 'Подари веднаш',
    imageSource: HeroImage
  },
  {
    title: 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ',
    subTitle: 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.',
    buttonText: 'Подари веднаш',
    imageSource: HeroImage
  },
  {
    title: 'ПОДАРИ\nОБУВКИ НА ПРИЈАТЕЛ',
    subTitle: 'Ако патиките се ваши омилени обувки, значи дека на прво место ви е удобноста.',
    buttonText: 'Подари веднаш',
    imageSource: HeroImage
  }
];

export { sliderItems };
