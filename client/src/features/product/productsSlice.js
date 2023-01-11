import { createSlice } from "@reduxjs/toolkit";
const { useGetProductsQuery } = require("../apiSlice");

const initialState = {
  products: [],
  cities: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});
