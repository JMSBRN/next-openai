import { getGoodsFromGoogle } from '@/pages/api/apiGoodsUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getGoods = createAsyncThunk(
    'goods/getGoods',
    async () => {
     const data = await  getGoodsFromGoogle();
     console.log(data);
     
    }

);