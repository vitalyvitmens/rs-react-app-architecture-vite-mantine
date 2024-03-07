import { Button } from '@mantine/core'
import '@mantine/core/styles.css'
import styles from './button.module.css'

export const BtnMantine = (props) => {
  const { title, children } = props
  return <Button {...props} className={styles.btn}>{title || children}</Button>
}
