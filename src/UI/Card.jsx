import React from 'react'

const Card = (props) => {
  const classes = 'card ' + props.className
  return (
    <div className={`${classes} rounded-lg shadow-slate-700 shadow-md  `}>{props.children}</div>
  )
}

export default Card