import React from 'react'

const ButtonWrapper = ({buttonClassName, styles, onClick, children}) => {
  return (
    <button className={buttonClassName} style={styles} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonWrapper