import React from 'react'

import '../../css/leftView.css'

// TODO: Look in to Flex Box and Flex grow, also Height Calc stuffs
// TODO: Create 'Filler' div component
const AboutMe = () => {
  return (
    <div className='AboutMeParent'>
      <section className='ImageAndFactsContainer'>
        <img className='Image' alt='I should be smiling here...' src={require('../../images/oldImages/ProfilePic.jpeg')} />
        <p className='Text' style={{marginTop: 5, marginBottom: 5}}><span className='Categories'>What I am:</span> Friendly Neighborhood Software Developer</p>
        <p className='Text' style={{marginTop: 5, marginBottom: 5}}><span className='Categories'>The GoodStuffs:</span> I am a passionate problem solver, nerd enthusiast, dad of three, lover of craft beer and recently, mad software developer. I’ve spent the last 5 years working as a craftsman with wood. I decided to make a career change and went to the Iron Yard immersive web development bootcamp, I am currently a React/ React Native Developer for Avatar Nutrition.</p>
        <div style={{height: 50}}/>
      </section>
      <div style={{flexGrow: 1}}></div>
    </div> 
  )
}

export default AboutMe