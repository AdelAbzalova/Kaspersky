import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from '../services/news'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware),
})
