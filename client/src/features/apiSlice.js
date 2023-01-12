import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://44.203.56.35:4000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getCityRajaOngkir: builder.query({
      query: () => {
        return {
          url: "orders/city",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        };
      },
    }),
    getCostRajaOngkir: builder.mutation({
      query: (cost) => {
        return {
          url: "orders/cost",
          method: "POST",
          body: cost,
          headers: {
            access_token: localStorage.getItem("access_token"),
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCityRajaOngkirQuery,
  useGetCostRajaOngkirMutation,
} = productsApi;
