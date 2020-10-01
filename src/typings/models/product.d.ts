declare module Models.Product {
  export interface Model {
    id: string;
    link: string;
    name: string;
    price: string;
    discountPrice?: string;
    imageSource: string;
    storeLogo: string;
  }
}
