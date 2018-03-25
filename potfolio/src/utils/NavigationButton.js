import React from 'react'

const NavigationButton = (props) => {

  return (
    <button className={props.buttonClassName} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default NavigationButton