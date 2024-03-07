import { forwardRef } from 'react'
import { TextInput } from '@mantine/core'
import '@mantine/core/styles.css'

export const InputMantine = forwardRef((props, ref) => {
  const { error } = props
  return <TextInput {...props} ref={ref} error={error} />
})

InputMantine.displayName = 'InputMantine'
