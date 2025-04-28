import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IData_SnippetNews } from '../models/models'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: builder => ({
    getNews: builder.query<IData_SnippetNews[], void>({
      query: () => 'news.json',
    }),
  }),
})
