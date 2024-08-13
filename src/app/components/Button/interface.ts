import { sizes, cases, spacings } from '@styles/utilities/types'

type direction = 'column' | 'row-reverse' | 'column-reverse'
type align = 'flex-start' | 'flex-end' | 'center'
type justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

type position = 'absolute' | 'relative' | 'unset' | 'fixed' | 'sticky'

export default interface iButton {
  children: any
  text?: string
  direction?: direction
  align?: align
  justify?: justify
  position?: position
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  type?: 'outlined' | 'solid'
  disabled?: boolean
  cancel?: boolean
  submit?: boolean
  spacing?: spacings
  letterSpacing?: string
  height?: number | string
  width?: number | string
  padding?: string
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  weight?: 'bold' | 'medium' | 'normal'
  textAlign?: 'left' | 'center'
  size?: sizes
  case?: cases
  onClick?: (e) => void
}
