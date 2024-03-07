import { forwardRef } from 'react'
import { TextInput } from '@mantine/core'
import '@mantine/core/styles.css'
import styles from './CustomInput.module.css'

export const InputMantine = forwardRef((props, ref) => {
  const { error } = props
  return (
    <div className={styles.customInput}>
      <TextInput {...props} ref={ref} error={error} />
    </div>
  )
})

InputMantine.displayName = 'InputMantine'
