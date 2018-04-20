import React, { Component } from 'react'
import Context from './Context'


class AppProvider extends Component {
  state = {
    // showContactComponent: false
    showContactComponent: 'FOOOF'
  }

  render() {
    console.log(Context)
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default AppProvider