import React, { Fragment } from 'react'

import AboutMe from './AboutMe'
import GreetingImageContainer from './GreetingImageContainer'
import Header from './Header'
import Work from './Work.js'
import RouteState from './RouteState'


const Main = () => {
  const { contentInfo } = styles
  console.log(RouteState)
  return (
    <Fragment>
      <GreetingImageContainer />
      <RouteState>
        <RouteState.Consumer>
          {
            value => 
              <section style={contentInfo}>
                <Header />
                <AboutMe />
              </section>
          }
        </RouteState.Consumer>
      </RouteState>
    </Fragment>
  )
}

// TODO: Move this somewhere else
const styles = {
  contentInfo: {
    height: '100%',
    padding: 5,
    width: '60%'
  }
}

export default Main