import React, { Component } from 'react'

// Styles
import '../css/App.css';

class RightView extends Component {

  render() {
    return (
      <div className='RightViewParent'>
        <div className='ImageParent'>
          <img className='Images' alt='Tracker should be here...' src={require('../images/AvatarNutritionTracker.png')}></img>
        </div>
      </div>
    )
  }
}

export default RightView