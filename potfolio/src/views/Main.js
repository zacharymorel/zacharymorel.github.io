import React, { Component } from 'react'

// Components
import LeftView from './LeftViewComponents/LeftView'
import RightView from './RightViewComponents/RightView';

// Styles
import '../css/App.css';

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