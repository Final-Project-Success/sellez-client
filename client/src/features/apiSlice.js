import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {}

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getAllRajaOngkir: builder.query({
      query: () => "orders/city",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetAllRajaOngkirQuery,
} = productsApi;
