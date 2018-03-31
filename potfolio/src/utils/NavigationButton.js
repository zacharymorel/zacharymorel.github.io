import React from 'react'

const NavigationButton = ({buttonClassName, styles, onClick, children}) => {
  return (
    <button className={buttonClassName} style={styles} onClick={onClick}>
      {children}
    </button>
  )
}

export default NavigationButton