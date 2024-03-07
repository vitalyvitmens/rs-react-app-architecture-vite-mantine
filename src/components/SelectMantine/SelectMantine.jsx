import { forwardRef } from 'react'
import { Select } from '@mantine/core'
import '@mantine/core/styles.css'

export const SelectMantine = forwardRef((props, ref) => {
  return <Select {...props} ref={ref} />
})

SelectMantine.displayName = 'SelectMantine'
