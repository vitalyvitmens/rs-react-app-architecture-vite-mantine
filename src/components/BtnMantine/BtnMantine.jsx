import { Button } from '@mantine/core'

export const BtnMantine = ({ title, type, onClick, disabled, variant, color, gradient, style, children }) => {
  return (
    <Button onClick={onClick} type={type} disabled={disabled} variant={variant} color={color} gradient={gradient} style={style}>{title || children}</Button>
  )
}
