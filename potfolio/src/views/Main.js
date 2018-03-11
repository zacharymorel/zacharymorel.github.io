import React, { Component } from 'react'

// Components
import LeftView from './LeftView'

// Styles
import '../css/App.css';
import RightView from './RightView';

class Main extends Component {

  render() {
    return (
      <div className='MainParent'>
        <LeftView />
        <RightView />
        {/*<Content />*/}
  
        {/* TODO: This is where the Component Toggling will happen*/}
      </div>
    )
  }
}

export default Main