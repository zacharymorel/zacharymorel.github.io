import React, { Component } from 'react'

// Components
import LeftView from './LeftView'

// Styles
import '../css/App.css';
import RightView from './RightView';

class Main extends Component {

  // Set up toggle notification props so left and right views can show respected content
  render() {
    return (
      <div className='MainParent'>
        <LeftView />
        <RightView />
        {/* TODO: This is where the Component Toggling will happen*/}
      </div>
    )
  }
}

export default Main