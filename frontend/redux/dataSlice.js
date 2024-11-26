import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    foods: [],
    cart: [],
  },
  reducers: {
    setFoods: (state, action) => {
      state.foods = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setFoods, addToCart, removeFromCart } = dataSlice.actions;

export const selectFoods = state => state.data.foods;
export const selectCart = state => state.data.cart;

export default dataSlice.reducer;
