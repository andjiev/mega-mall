import { OrderTypes } from 'lib/enums';
import http from './http-service';
import { DataServiceResponse } from 'lib/models';

async function getProducts(page: number, size: number, order: OrderTypes, filter: string): Promise<DataServiceResponse<Models.Common.ListPage<Models.Product.Model>>> {
  return http.get(`api/products?page=${page}&take=${size}&order=${order}&filter=${filter}`);
}

async function getLatestProducts(): Promise<DataServiceResponse<Models.Common.ListPage<Models.Product.Model>>> {
  return http.get(`api/products/latest`);
}

async function getMostPopularProducts(): Promise<DataServiceResponse<Models.Common.ListPage<Models.Product.Model>>> {
  return http.get(`api/products/popular`);
}

async function getProductDetails(id: string): Promise<DataServiceResponse<Models.Product.Model>> {
  return http.get(`api/products/${id}`);
}

export { getProducts, getLatestProducts, getProductDetails, getMostPopularProducts };
