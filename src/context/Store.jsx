import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice.jsx';
import prodReducer from './ProductsSlice.jsx';
import sellerReducer from './SellerProductsSlice.jsx';
import cartReducer from './CartSlice.jsx';

export const store = configureStore({
  reducer:{
    user: userReducer,
    prod: prodReducer,
    seller: sellerReducer,
    cart: cartReducer,
  },
});

