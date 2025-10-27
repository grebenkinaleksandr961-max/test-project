import axios from 'axios'
import type { Article } from '../model/articleSlice'

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await axios.get<Article[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  return response.data
}

export const searchArticles = async (query: string): Promise<Article[]> => {
  const response = await axios.get<Article[]>(
    `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`
  )
  return response.data
}
