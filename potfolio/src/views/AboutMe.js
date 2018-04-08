// Components
import React from 'react'
import GreetingImageContainer from './GreetingImageContainer'
import SpaceFiller from '../utility_components/SpaceFiller'

// Styles
import '../css/aboutMe.css'

const AboutMe = () => {
  const { firstFiller, PersonalInfo } = styles
  return (
    <div className='AboutMeContainer'>
      <GreetingImageContainer />
      <p className='Text' style={PersonalInfo}><span className='Categories'>What I am:</span> Friendly Neighborhood Software Developer</p>
      <p className='Text' style={PersonalInfo}><span className='Categories'>Fact or two:</span> I am a passionate problem solver, nerd enthusiast, dad of three, lover of craft beer and recently, mad software developer. I’ve spent the last 5 years working as a craftsman with wood. I decided to make a career change and went to the Iron Yard immersive web development bootcamp in June 2017, I am currently a React/ React Native Developer for Avatar Nutrition.</p>
      {/*<SpaceFiller Styles={firstFiller}/>*/}
    </div> 
  )
}

const styles = {
  PersonalInfo: {
    marginTop: 5, 
    marginBottom: 5,
    width: 500
  }, 
  firstFiller: {
    height: 50
  }
}

export default AboutMe