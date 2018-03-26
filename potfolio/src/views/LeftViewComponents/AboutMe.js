import React from 'react'
import SpaceFiller from '../../utils/SpaceFiller'

import '../../css/leftView.css'

const AboutMe = (props) => {
  const { category, firstFiller, secondFiller} = styles
  return (
    <div className='AboutMeParent'>
      <section className='ImageAndFactsContainer'>
        <img className='Image' alt='I should be smiling here...' src={require('../../images/oldImages/ProfilePic.jpeg')} />
        <p className='Text' style={category}><span className='Categories'>What I am:</span> Friendly Neighborhood Software Developer</p>
        <p className='Text' style={category}><span className='Categories'>Fact or two:</span> I am a passionate problem solver, nerd enthusiast, dad of three, lover of craft beer and recently, mad software developer. I’ve spent the last 5 years working as a craftsman with wood. I decided to make a career change and went to the Iron Yard immersive web development bootcamp in June 2017, I am currently a React/ React Native Developer for Avatar Nutrition.</p>
        <SpaceFiller Styles={firstFiller}/>
      </section>
      <SpaceFiller Styles={secondFiller} />
    </div> 
  )
}

const styles = {
  category: {
    marginTop: 5, 
    marginBottom: 5
  }, 
  firstFiller: {
    height: 50
  },
  secondFiller: {
    flexGrow: 1
  }
}

export default AboutMe