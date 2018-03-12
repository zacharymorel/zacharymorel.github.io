import React, { Component } from 'react'

// Styles
import '../css/App.css';

class RightView extends Component {

  render() {
    return (
      <div className='RightViewParent'>
        <div className='ImageParent' style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <p>TEST</p>
        </div>
      </div>
    )
  }
}

export default RightView