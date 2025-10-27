import type { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  text?: 'Читать далее'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  text,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(styles.button, styles[variant], styles[size], className)}
    >
      {text}
    </button>
  )
}
