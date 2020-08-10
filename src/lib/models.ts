export interface DataServiceResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: DataServiceRequestConfig;
  request?: any;
}

export interface DataServiceRequestConfig {
  url?: string;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
}

export interface PageOptions {
  page: number;
  size: number;
}
