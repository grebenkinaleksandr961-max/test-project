import styles from './articleCard.module.scss'
import { Button } from '@/shared/ui/button/button'
import LikeDislike from '@/shared/ui/likeDislike/likeDislike'
import RandomImage from '@/shared/ui/randomImg/randomImg'
import { Link } from 'react-router-dom'

interface ArticleCardProps {
  title?: string
  text?: string
  id: number
  className?: string
  likesCounter: number
  dislikesCounter: number
  image: string
}

export default function ArticleCard({
  title,
  text,
  id,
  className = '',
  likesCounter,
  dislikesCounter,
  image,
}: ArticleCardProps) {
  return (
    <article className={` ${className}`}>
      <div className={styles.articleCardWrapper}>
        <RandomImage src={image} variant={'smallArticleImg'} />
        <div className={styles.textContentWrapper}>
          <h2 className={styles.articleTitle}>{title}</h2>
          <div className={styles.reactionButtonWrapper}>
            <LikeDislike id={id} />

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
