declare module Models.Common {
  export interface ListPage<T> {
    list: T[];
    count: number;
  }
}
