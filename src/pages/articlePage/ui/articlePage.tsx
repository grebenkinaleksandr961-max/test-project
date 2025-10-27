import styles from './articlePage.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import LikeDislike from '@/shared/ui/likeDislike/likeDislike'
import RandomImage from '@/shared/ui/randomImg/randomImg'
import ArrowBack from '@/shared/assets/icons/keyboard_backspace.svg'

export default function ArticlePage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { title, text, id, image } = state

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <article className={styles.articlePageWrapper}>
      <div className={styles.topBar}>
        <div className={styles.backButtonBlock} onClick={handleGoBack}>
          <ArrowBack />
          <p className={styles.returnParagraph}>Вернуться к статьям</p>
        </div>
        <LikeDislike id={id} />
      </div>

      <div className={styles.articleContent}>
        <h1 className={styles.articleContentHeader}>{title}</h1>
        <RandomImage src={image} variant={'mediumArticleImg'} />
        <p className={styles.articleText}>{text}</p>
      </div>
    </article>
  )
}
