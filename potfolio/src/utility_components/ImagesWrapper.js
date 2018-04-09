import React from 'react'

import '../css/utilityComponents.css'

const ImagesWrapper = ({image, styles}) => {
  return (
    <img className="ImageWrapper" alt="Well..." src={image} style={styles}></img>
  )
}

export default ImagesWrapper