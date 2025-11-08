import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    adduser: (state,action)=>{
      state.value = action.payload
    },
    updateuser: (state,action)=>{
      state.value = {...state.value , ...action.payload};
    },
    addaddress: (state,action)=>{
      state.value.addresses.push(action.payload);
    }
  }
});

export const {adduser,addaddress,updateuser} = userSlice.actions;
export default userSlice.reducer;