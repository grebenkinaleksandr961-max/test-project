import styles from './randomImg.module.scss'
import clsx from 'clsx'

interface RandomImageProps {
  src: string
  variant: 'smallArticleImg' | 'mediumArticleImg' | 'fullArticleImg'
}

export default function RandomImage({ src, variant }: RandomImageProps) {
  return (
    <div className={styles.imgWrapper}>
      <img className={clsx(styles[variant])} src={src} alt="Article" />
    </div>
  )
}
