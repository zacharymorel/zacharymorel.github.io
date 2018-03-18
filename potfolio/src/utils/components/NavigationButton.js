import React from 'react'

const NavigationButton = (props) => {

  return (
    <button className={props.buttonClassName} onClick={props.onClick}>
      <p className={props.contentClassName} style={props.contentTextSpecificStyle}>{props.content}</p>
    </button>
  )
}

export default NavigationButton