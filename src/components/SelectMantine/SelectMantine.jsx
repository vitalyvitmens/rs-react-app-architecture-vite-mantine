import { forwardRef } from 'react'
import { Select } from '@mantine/core'
import '@mantine/core/styles.css'

export const SelectMantine = forwardRef(({ label, data, type, id, name, value, defaultValue, onChange }, ref) => {

  return (
    <Select
    label={label} 
    data={data}
    type={type} 
    id={id} 
    name={name} 
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    ref={ref}
  />
  )
})

SelectMantine.displayName = 'SelectMantine'
