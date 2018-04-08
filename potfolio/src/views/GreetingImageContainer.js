import React from 'react'
import ImagesWrapper from '../utility_components/ImagesWrapper'

// functions
import { imageImport } from '../utility_functions/ImageImport'

const GreetingImageContainer = () => {
  const { EasterImage, IgniteTampa, ProfilePic } = styles
  const images = imageImport(require.context('../images', false, /\.(png|jpe?g|svg)$/))

  return (
    <div className='GreetingImageContainer'>
      <ImagesWrapper styles={EasterImage} image={images['Easter2018.jpg']} />
      <ImagesWrapper styles={IgniteTampa} image={images['IgniteTampa2017.jpg']} />
      <ImagesWrapper styles={ProfilePic} image={images['ProfilePic.jpeg']} />
    </div>
  )
}

const styles = {
  EasterImage: {
    height: 100,
    width: 100
  },
  IgniteTampa: {
    height: 100,
    width: 100
  },
  ProfilePic: {
    height: 100,
    width: 100
  },
}

export default GreetingImageContainer