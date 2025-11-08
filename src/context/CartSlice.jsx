import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (state,action)=>{
      state.value = action.payload
    },
     addItemInCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.value.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.value.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
    },
    updateQuantityInCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.value.cart.items.find((item) => item.productId === productId);

      state.value.totals.totalPrice -= existingItem.quantity * existingItem.price; 

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      state.value.totals.totalPrice += quantity * existingItem.price; 

    },
  deleteItemInCart: (state, action) => {
  const productId = action.payload;
   const existingItem = state.value.cart.items.find((item) => item.productId === productId);
  state.value.totals.totalPrice -= existingItem.quantity * existingItem.price; 
  state.value.cart.items = state.value.cart.items.filter((item) => item.productId !== productId);
    },
  }
});

export const {addCartItems,updateQuantityInCart,deleteItemInCart} = cartSlice.actions;
export default cartSlice.reducer;