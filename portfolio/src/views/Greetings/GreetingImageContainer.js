import React from 'react'
import ImagesWrapper from '../../utilityComponents/ImagesWrapper'

// functions
import { imageImport } from '../../utilityFunctions/ImageImport'

const GreetingImageContainer = () => {
  const images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  const { EasterImage, IgniteTampa, GreetingImageContainer, ProfilePic } = styles

  return (
    <div className='GreetingImageContainer' style={GreetingImageContainer}>
      <ImagesWrapper styles={EasterImage} image={images['Easter2018.jpg']} />
      {/*<ImagesWrapper styles={IgniteTampa} image={images['IgniteTampa2017.jpg']} />
      <ImagesWrapper styles={ProfilePic} image={images['ProfilePic.jpeg']} />*/}
    </div>
  )
}

// What to do with all this new space??

const styles = {
  GreetingImageContainer: {
    height: '100%',
    width: '40%'
  },
  EasterImage: {
    height: '70%',
    width: '98%'
  },
  IgniteTampa: {
    height: '30%',
    width: '53%'
  },
  ProfilePic: {
    height: '30%',
    width: '44%'
  },
}

export default GreetingImageContainer