import React from 'react'
import StyledButton from './style'
import iButton from './interface'

const Button = (props: iButton) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
