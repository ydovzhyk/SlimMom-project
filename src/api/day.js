import { instance } from './auth';

export const axiosDay = async userData => {
  const { data } = await instance.post('/day', userData);
  return data;
};

export const axiosDayEatenProduct = async date => {
  const { data } = await instance.post('/day/product', { date });
  return data;
};

export const axiosDayInfo = async userData => {
  const { data } = await instance.post('/day/info', userData);
  return data;
};

export const axiosPeriodInfo = async () => {
  const { data } = await instance.get('/day/period');
  return data;
};

export const axiosDeleteDay = async userData => {
  const { data } = await instance.post('/day/delete', userData);
  return data;
}

