import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU2MTlhMzI5M2U1NzJkZDU0Nzg2YyIsImlhdCI6MTcwNTYwNDgxNiwiZXhwIjoxNzA1Njg3NjE2fQ.ILRCobAw7E5R-kZjsrjfGYVpsQAZxAzb1vtX9MHIGaM';
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      console.log(date);
      const response = await axios.get(`/diary/${date}`);
      console.log(response);

      return response.data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  }
);

// едд продукт має відправляти запит на бекенд по додаванню даних
// і за ним гет запит по щоденнику
// і дані по щоденнику записувати в стор
// в щоденнику слідкуєм за стором і оновлюєм дані
export const addProductDiary = createAsyncThunk(
  'addProductDiary',
  async (productDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/diary/products', productDetails);
      // console.log('productDetailsAdd', productDetails);
      toast.success(`Product successfully added to diary!`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProductDiary = createAsyncThunk(
  'deleteProductDiary',
  async (productDetails, { rejectWithValue }) => {
    const { productId } = productDetails;

    try {
      const { data } = await axios.delete(`/diary/products/${productId}`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  }
);

// тут ще не чіпала
export const addExercisesDiary = createAsyncThunk(
  'addExercisesDiary',
  async (exercise, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/diary/exercises', exercise);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  }
);

export const deleteExercisesDiary = createAsyncThunk(
  'deleteExercisesDiary',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete('/diary/exercises/:exerciseId', {
        exerciseId: credential,
      });
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  }
);

// в джсх файлі робим діспатч(фетч), яка відправляє запит на бек і отримані в стейт
// щоб витягнути зі стейта дні, зробити в джсх селектор
