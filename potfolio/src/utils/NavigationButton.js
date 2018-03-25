import React from 'react'

const NavigationButton = (props) => {

  return (
    <button className={props.buttonClassName} style={props.styles} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default NavigationButton