import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchArticles, searchArticles } from '../api/articleApi'

export const loadArticles = createAsyncThunk(
  'article/loadArticles',
  async (_, thunkAPI) => {
    try {
      const articles = await fetchArticles()
      return articles
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки постов')
    }
  }
)

export const searchArticlesThunk = createAsyncThunk(
  'article/searchArticles',
  async (query: string, thunkAPI) => {
    try {
      const articles = await searchArticles(query)
      return articles
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка поиска статей')
    }
  }
)
