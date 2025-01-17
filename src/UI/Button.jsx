import React from 'react'
import Card from './Card'

const Button = (props) => {
  return (
    <Card className={props.className}>
        <button type={props.type} onClick={props.onClick}>{props.name}</button>
    </Card>
  )
}

export default Button