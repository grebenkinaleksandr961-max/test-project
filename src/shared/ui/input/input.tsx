import type { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  variant?: 'mainPageInput' | 'anotherPage'
  placeholder?: string
}

export function Input({
  icon,
  variant = 'mainPageInput',
  className,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className={clsx(styles.wrapper, styles[variant], className)}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        {...props}
        placeholder={placeholder}
        className={clsx(styles.input, { [styles.withIcon]: icon })}
      />
    </div>
  )
}
