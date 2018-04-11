import React, { Fragment } from 'react'

import AboutMe from './AboutMe'
import GreetingImageContainer from './GreetingImageContainer'
import Header from './Header'

const Main = () => {
  const { contentInfo } = styles
  return (
    <Fragment>
      <GreetingImageContainer />
      <section style={contentInfo}>
        <Header />
        <AboutMe />
      </section>
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