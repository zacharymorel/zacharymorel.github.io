import React, { Component } from 'react'

// Components
import LeftView from './LeftViewComponents/LeftView'
import RightView from './RightViewComponents/RightView';

// Styles
import '../css/main.css';
// import '../css/mobile/mainMobile.css'

class Main extends Component {

  render() {
    return (
      <div className='MainParent'>
        {/*<LeftView currentProject={this.state.currentProject} />*/}
        <RightView currentProject={this.state.currentProject} />
      </div>
    )
  }
}

export default Main