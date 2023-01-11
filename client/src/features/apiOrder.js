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
  }),
});

export const { useGetOrdersQuery } = ordersApi;
