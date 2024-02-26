import { forwardRef } from 'react'
import { TextInput  } from '@mantine/core'
import '@mantine/core/styles.css'

export const InputMantine = forwardRef(({ label, variant, size, radius,  description, placeholder, type, id, name, autoComplete, disabled }, ref) => {

  return (
     <TextInput
     label={label}
     description={description}
     placeholder={placeholder}
     variant={variant}
     size={size}
     radius={radius}
     type={type}
     id={id}
     name={name}
     autoComplete={autoComplete}
     disabled={disabled}
     ref={ref}
   />
  )
})

InputMantine.displayName = 'InputMantine'
