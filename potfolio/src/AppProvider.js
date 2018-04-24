import React, { Component } from 'react'
import Context from './Context'


class AppProvider extends Component {
  state = {
    showContactComponent: false,
    toggleContactComponent: (e) =>  this.toggleContactComponent(e)
  }

  toggleContactComponent = (e) => ( this.setState({showContactComponent: !this.state.showContactComponent}) )

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default AppProvider