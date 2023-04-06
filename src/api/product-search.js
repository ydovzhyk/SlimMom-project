import instance from './auth';

export const axiosProductSearch = async query => {
  const { data } = await instance.post(`/product?search=${query}`);
  return data;
};

export const axiosAddNewProduct = async userData => {
  return await instance.post('/product/add', userData);
};