import React from 'react'

import AboutMe from './Greetings/AboutMe'
import GreetingImageContainer from './Greetings/GreetingImageContainer'


const Main = () => {
  const { mainContainer } = styles
  return (
    <div style={mainContainer}>
      <GreetingImageContainer />
      <AboutMe />
    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex', 
    flexFlow: 'flow',
    height: '100%'    
  },
}


export default Main