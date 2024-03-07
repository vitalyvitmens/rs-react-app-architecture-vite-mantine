import { forwardRef } from 'react'
import { Select } from '@mantine/core'
import '@mantine/core/styles.css'
import styles from './CustomSelect.module.css'

export const SelectMantine = forwardRef((props, ref) => {
  return (
    <div className={styles.customSelect}>
      <Select {...props} ref={ref} />
    </div>
  )
})

SelectMantine.displayName = 'SelectMantine'
