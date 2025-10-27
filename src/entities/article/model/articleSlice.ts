import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loadArticles, searchArticlesThunk } from './articleThunk'
import { IMAGES } from '@/shared/const/imgsConstants'

export interface Article {
  id: number
  title: string
  body: string
  likes: number
  dislikes: number
  image: string
  userReaction?: 'like' | 'dislike' | null
}

interface ArticleState {
  articles: Article[]
  isLoading: boolean
  error: string | null
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const article = state.articles.find((a) => a.id === action.payload)
      if (!article) return

      if (article.userReaction === 'like') {
        article.likes -= 1
        article.userReaction = null
      } else {
        article.likes += 1
        if (article.userReaction === 'dislike') {
          article.dislikes -= 1
        }
        article.userReaction = 'like'
      }
    },

    toggleDislike(state, action: PayloadAction<number>) {
      const article = state.articles.find((a) => a.id === action.payload)
      if (!article) return

      if (article.userReaction === 'dislike') {
        article.dislikes -= 1
        article.userReaction = null
      } else {
        article.dislikes += 1
        if (article.userReaction === 'like') {
          article.likes -= 1
        }
        article.userReaction = 'dislike'
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadArticles.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadArticles.fulfilled, (state, action) => {
        state.isLoading = false
        const updated = action.payload.map((article) => {
          const existing = state.articles.find((a) => a.id === article.id)
          return existing
            ? existing
            : {
                ...article,
                likes: Math.floor(Math.random() * 50),
                dislikes: Math.floor(Math.random() * 50),
                image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
              }
        })
        state.articles = updated
      })
      .addCase(loadArticles.rejected, (state, action) => {
        state.isLoading = false
        state.error = (action.payload as string) ?? 'Ошибка загрузки постов'
      })

      .addCase(searchArticlesThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchArticlesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.articles = action.payload.map((article) => {
          const existing = state.articles.find((a) => a.id === article.id)
          return existing
            ? existing
            : {
                ...article,
                likes: Math.floor(Math.random() * 50),
                dislikes: Math.floor(Math.random() * 50),
                image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
              }
        })
      })
      .addCase(searchArticlesThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = (action.payload as string) ?? 'Ошибка поиска статей'
      })
  },
})

export const { toggleLike, toggleDislike } = articleSlice.actions
export const articleReducer = articleSlice.reducer
