import { ArticleCard } from '@/entities/article/ui'
import type { Article } from '@/entities/article/model/articleSlice'
import { ArticleCardFirst } from '@/entities/article/ui'
import styles from './articleList.module.scss'

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <section className={styles.articlesSection}>
      {articles.map((article: Article, index: number) =>
        index === 0 ? (
          <ArticleCardFirst
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            text={article.body}
            likesCounter={article.likes}
            dislikesCounter={article.dislikes}
            className={styles.articleCardFirst}
          />
        ) : (
          <ArticleCard
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            text={article.body}
            className={styles.articleCard}
            likesCounter={article.likes}
            dislikesCounter={article.dislikes}
          />
        )
      )}
    </section>
  )
}
