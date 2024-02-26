import { forwardRef } from 'react'
import { Select } from '@mantine/core'
import '@mantine/core/styles.css'

export const SelectMantine = forwardRef(({ label, data, type, id, name, value, defaultValue, onChange, children }, ref) => {

  return (
    <Select
    label={label} 
    data={data}
    type={type} 
    id={id} 
    value={value}
    name={name} 
    defaultValue={defaultValue}
    onChange={onChange}
    ref={ref}>
      {children}
      {/* <option value="">Без сортировки</option>
      <option value="ASC">По возрастанию</option>
      <option value="DESC">По убыванию</option> */}
    </Select>
 )
})

SelectMantine.displayName = 'SelectMantine'
