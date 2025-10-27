import { useEffect, useState } from 'react'
import styles from './mainPage.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/app/store'
import { loadArticles, searchArticlesThunk } from '@/entities/article/model/articleThunk'
import ArticleList from '@/widgets/article-list/ui/articleList'
import SearchIcon from '@/shared/assets/icons/icon_ic_search.svg'
import { Input } from '@/shared/ui/input/input'

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>()
  const articles = useSelector((state: RootState) => state.articles.articles)
  const isLoading = useSelector((state: RootState) => state.articles.isLoading)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm.trim()) {
        dispatch(searchArticlesThunk(searchTerm))
      } else if (articles.length === 0) {
        dispatch(loadArticles())
      }
    }, 800)

    return () => clearTimeout(delay)
  }, [searchTerm, dispatch, articles.length])

  return (
    <main className={styles.mainBlock}>
      <h1 className={styles.mainHeader}>Блог</h1>
      <h2 className={styles.secondHeader}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также
        переводим зарубежные статьи
      </h2>

      <Input
        icon={<SearchIcon />}
        placeholder="Поиск по названию статьи"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="mainPageInput"
      />

      {isLoading ? <p>Загрузка статей...</p> : <ArticleList articles={articles} />}
    </main>
  )
}
