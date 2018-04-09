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
    width: '60%'
  }
}

export default Main