import { useDispatch, useSelector } from 'react-redux'
import { toggleLike, toggleDislike } from '@/entities/article/model/articleSlice'
import type { RootState } from '@/app/store'
import styles from './likeDislike.module.scss'
import LikeUp from '@/shared/assets/icons/ThumbUpAlt.svg'
import LikeDown from '@/shared/assets/icons/ThumbDownAlt.svg'

interface LikeDislikeProps {
  id: number
}

export default function LikeDislike({ id }: LikeDislikeProps) {
  const dispatch = useDispatch()
  const article = useSelector((state: RootState) =>
    state.articles.articles.find((a) => a.id === id)
  )

  if (!article) return null

  const handleLike = () => dispatch(toggleLike(id))
  const handleDislike = () => dispatch(toggleDislike(id))

  return (
    <div className={styles.likeDislikeWrapper}>
      <div
        onClick={handleLike}
        className={`${styles.iconWrapper} ${article.userReaction === 'like' ? styles.activeLike : ''}`}
      >
        <LikeUp />
      </div>
      <p className={styles.likeCounter}>{article.likes}</p>

      <div
        onClick={handleDislike}
        className={`${styles.iconWrapper} ${article.userReaction === 'dislike' ? styles.activeDislike : ''}`}
      >
        <LikeDown />
      </div>
      <p className={styles.dislikeCounter}>{article.dislikes}</p>
    </div>
  )
}
