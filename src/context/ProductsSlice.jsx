import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const prodSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state,action)=>{
      state.value = action.payload
    },
  }
});

export const {addProducts} = prodSlice.actions;
export default prodSlice.reducer;