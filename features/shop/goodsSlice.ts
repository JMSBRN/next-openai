import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';

const initialState = {
    goods: [],
};
const goodsSlice = createSlice({
 name: 'shop',
 initialState,
 reducers: {
    setGoods: (state, action) => {
      state.goods = action.payload;
    }
 }
});

export const { setGoods } = goodsSlice.actions;
export const selectGoods = (state: RootState) => state.goods;
export default goodsSlice.reducer;