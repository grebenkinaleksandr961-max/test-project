import styles from './articleCardFirst.module.scss'
import { Button } from '@/shared/ui/button/button'
import LikeDislike from '@/shared/ui/likeDislike/likeDislike'
import RandomImage from '@/shared/ui/randomImg/randomImg'
import { Link } from 'react-router-dom'

interface ArticleCardFirstProps {
  title?: string
  text?: string
  id: number
  likesCounter?: number
  dislikesCounter?: number
  className?: string
  image: string
}

export default function ArticleCardFirst({
  title,
  text,
  className = '',
  likesCounter,
  dislikesCounter,
  id,
  image,
}: ArticleCardFirstProps) {
  return (
    <article className={` ${className}`}>
      <div className={styles.articleCardWrapper}>
        <RandomImage src={image} variant={'fullArticleImg'} />

        <div className={styles.textContentWrapper}>
          <div className={styles.titleLikeWrapper}>
            <h2 className={styles.articleTitle}>{title}</h2>
            <LikeDislike id={id} />
          </div>

          <p className={styles.firstArticleParagraph}>{text}</p>

          <div className={styles.reactionButtonWrapper}>
            <Link
              state={{
                title,
                text,
                likesCounter,
                dislikesCounter,
                id,
                image,
              }}
              key={22}
              to={`/post/${id}`}
              className={styles.mlauto}
            >
              <Button text={'Читать далее'} variant={'primary'} size={'md'}></Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
