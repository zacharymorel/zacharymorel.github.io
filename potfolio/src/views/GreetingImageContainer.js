import React from 'react'
import ImagesWrapper from '../utility_components/ImagesWrapper'

// functions
import { imageImport } from '../utility_functions/ImageImport'

const GreetingImageContainer = () => {
  const { EasterImage, IgniteTampa, GreetingImageContainer, ProfilePic } = styles
  const images = imageImport(require.context('../images', false, /\.(png|jpe?g|svg)$/))

  return (
    <div className='GreetingImageContainer' style={GreetingImageContainer}>
      <ImagesWrapper styles={EasterImage} image={images['Easter2018.jpg']} />
      <ImagesWrapper styles={IgniteTampa} image={images['IgniteTampa2017.jpg']} />
      <ImagesWrapper styles={ProfilePic} image={images['ProfilePic.jpeg']} />
    </div>
  )
}

const styles = {
  GreetingImageContainer: {
    height: '100%',
    width: '40%'
  },
  EasterImage: {
    height: '62%',
    width: '98%'
  },
  IgniteTampa: {
    height: '36%',
    width: '53%'
  },
  ProfilePic: {
    height: '36%',
    width: '44%'
  },
}

export default GreetingImageContainer