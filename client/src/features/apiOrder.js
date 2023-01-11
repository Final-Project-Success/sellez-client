import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => {
        return {
          url: "/orders",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        };
      },
    }),
    postOrders: builder.mutation({
      query: (order) => {
        console.log(order, "<<<<<<<<<<<");
        return {
          url: "/orders",
          method: "POST",
          body: order,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            access_token: localStorage.getItem("access_token"),
          },
        };
      },
    }),
  }),
});

export const { useGetOrdersQuery, usePostOrdersMutation } = ordersApi;
