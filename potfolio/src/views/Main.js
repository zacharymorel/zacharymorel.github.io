import React from 'react'

import AboutMe from './AboutMe'
import GreetingImageContainer from './GreetingImageContainer'


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