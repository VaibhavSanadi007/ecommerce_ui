import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const sellerSlice = createSlice({
  name: 'sellerProducts',
  initialState,
  reducers: {
    addSellerProducts: (state,action)=>{
      state.value = action.payload
    },
    updateSellerProducts: (state, action) => {
      const { _id, ...updatedData } = action.payload;
      state.value = state.value.map(product => 
        product._id === _id ? { ...product, ...updatedData } : product
      );
    },
    deleteSellerProducts: (state, action) => {
      const productId = action.payload;
      state.value = state.value.filter(product => product._id !== productId);
    }
  }
});

export const { addSellerProducts, updateSellerProducts, deleteSellerProducts } = sellerSlice.actions;
export default sellerSlice.reducer;