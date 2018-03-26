import React, { Component } from 'react'

// Components
import LeftView from './LeftViewComponents/LeftView'
import RightView from './RightViewComponents/RightView';

// Styles
import '../css/main.css';

class Main extends Component {
  constructor(props) {
    super(props)
    this.interval = setInterval(() => this.updateProject(), 7000)
    this.state = {
      currentProject: 'AvatarNutritionTracker'
    }
  }

  updateProject = () => {
    (this.state.currentProject === 'AvatarNutritionTracker') ?
      this.setState({ currentProject: 'MotherNative' }) :
      this.setState({ currentProject: 'AvatarNutritionTracker' })
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