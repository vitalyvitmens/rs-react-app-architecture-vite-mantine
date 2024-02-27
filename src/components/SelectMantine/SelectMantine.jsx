import { forwardRef } from 'react'
import { Select } from '@mantine/core'
import '@mantine/core/styles.css'

export const SelectMantine = forwardRef(
  (
    { label, data, type, id, name, value, defaultValue, placeholder, onChange },
    ref,
  ) => {
    return (
      <Select
        label={label}
        data={data}
        type={type}
        id={id}
        value={value}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    )
  },
)

SelectMantine.displayName = 'SelectMantine'
