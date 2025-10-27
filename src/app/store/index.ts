import { configureStore } from '@reduxjs/toolkit'
import { articleReducer } from '@/entities/article/model/articleSlice'

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
})

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
