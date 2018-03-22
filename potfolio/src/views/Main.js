import React, { Component } from 'react'

// Components
import LeftView from './LeftView'

// Styles
import '../css/App.css';
import RightView from './RightView';

class Main extends Component {
  constructor(props) {
    super(props)
    this.interval = setInterval(() => this.updateProject(), 7000)
    this.state = {
      currentProject: 'AvatarNutirionTracker'
    }
  }

  updateProject = () => {
    (this.state.currentProject === 'AvatarNutirionTracker') ?
      this.setState({ currentProject: 'MotherNative' }) :
      this.setState({ currentProject: 'AvatarNutirionTracker' })
  }

  render() {
    return (
      <div className='MainParent'>
        <LeftView currentProject={this.state.currentProject} />
        <RightView currentProject={this.state.currentProject} />
      </div>
    )
  }
}

export default Main