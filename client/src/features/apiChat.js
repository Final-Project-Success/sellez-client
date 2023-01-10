import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatsApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:10000" }),
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
