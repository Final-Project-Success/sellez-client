import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://44.203.56.35:4000" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    oauthLogin: builder.mutation({
      query: (user) => ({
        url: "/login-oauth",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useOauthLoginMutation } =
  usersApi;
