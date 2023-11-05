import React from 'react'

const Button = ({ disabled, onClick, children, className }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
