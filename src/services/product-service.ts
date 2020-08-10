import http from './http-service';
import { DataServiceResponse } from 'lib/models';

async function getProducts(page: number, size: number): Promise<DataServiceResponse<Models.Product.Model[]>> {
  return http.get(`api/products?page=${page}&take=${size}`);
}

export { getProducts };