import { Button } from '@mantine/core'
import '@mantine/core/styles.css'

export const BtnMantine = (props) => {
  const { title, children } = props
  return <Button {...props}>{title || children}</Button>
}
