import React from 'react'

const Textarea = ({ value, onChange, placeholder, onKeyDown, className }) => {
  return (
    <textarea
      className={className}
      tabIndex="0"
      data-id="root"
      rows="1"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  )
}

export default Textarea
