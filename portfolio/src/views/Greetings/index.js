import React from 'react'
import Context from '../../Context'
import AboutMe from './AboutMe'
import GreetingImageContainer from './GreetingImageContainer'


const Main = () => {
  const { mainContainer } = styles
  return (
    <Context.Consumer>
    { value => 
      <div style={Object.assign({WebkitFilter: (value.showContactComponent) && 'blur(8px)'}, mainContainer)} >
        <GreetingImageContainer />
        <AboutMe />
      </div>
    }
    </Context.Consumer>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: '#FCFCFC',
    display: 'flex', 
    flexFlow: 'flow',
    height: '100%'    
  },
}


export default Main