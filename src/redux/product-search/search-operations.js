import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosProductSearch, axiosAddNewProduct } from '../../api/product-search';
// import { saveAs } from 'file-saver'; //for save data to Json file in localmashine -> (download)

// const createJsonFile = (data) => {
//   const jsonContent = JSON.stringify(data);
//   const blob = new Blob([jsonContent], { type: 'application/json' });
//   saveAs(blob, 'data.json');
// }

export const getProductOperations = createAsyncThunk(
  '/product',
  async (query, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await axiosProductSearch(query);
      // createJsonFile(data);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const addNewProduct = createAsyncThunk(
  '/product/add',
  async (userData, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = await axiosAddNewProduct(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);