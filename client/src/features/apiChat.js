import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatsApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://44.203.56.35:10000" }),
  endpoints: (builder) => ({
    chats: builder.query({
      query: () => "/msg",
    }),
    addChat: builder.mutation({
      query: (chat) => ({
        url: "/msg",
        method: "POST",
        body: chat,
      }),
    }),
  }),
});

export const { useChatsQuery, useAddChatMutation } = chatsApi;
