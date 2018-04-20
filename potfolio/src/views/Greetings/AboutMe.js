// Components
import React, { Fragment } from 'react'
import ImagesWrapper from '../../utility_components/ImagesWrapper'
import AppProvider from '../../AppProvider'

// functions
import { imageImport } from '../../utility_functions/ImageImport'
// Styles
import '../../css/aboutMe.css'

const AboutMe = () => {
  const images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  const { PersonalInfo, TampaBayImage } = styles

  return (
    <Fragment>
      <AppProvider.Consumer>
        <div className='AboutMeContainer' >
          <div className='AboutMePersonalInfo'>
            <p className='Text' style={PersonalInfo}><span className='Categories'>What I am:</span> Friendly Neighborhood Software Developer</p>
            <p className='Text' style={PersonalInfo}><span className='Categories'>Fact or two:</span> I am a passionate problem solver, nerd enthusiast, dad of three, lover of craft beer and recently, mad software developer. I’ve spent the last 5 years working as a craftsman with wood. I decided to make a career change and went to the Iron Yard immersive web development bootcamp in June 2017, I am currently a React/ React Native Developer for Avatar Nutrition.</p>
          </div>
          <div className='AboutMeMap'>
            <div className='AboutMeHomeContainer'>
              <p id='AboutMeHome' className='Text' >H.O.M.E.</p>
              {
                value => { 
                  console.log('VAL', value);
                  return (
                    <p>{value.showContactComponent}</p>
                  )
                }
              }
            </div>
            <ImagesWrapper styles={TampaBayImage} image={images['TampaBay.png']} />
          </div>
        </div> 
      </AppProvider.Consumer>
    </Fragment>
  )
}

const styles = {
  PersonalInfo: {
    marginTop: 15, 
    marginBottom: 5,
  },
  TampaBayImage: {
    height: '60%',
    width: '50%'
  }
}

export default AboutMe