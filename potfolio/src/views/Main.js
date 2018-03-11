import React, { Component } from 'react'
import '../css/App.css';

class Main extends Component {

  render() {
    return (
      <div className='MainParent'>
        <header className='MainHeader'>
        {/*<img src={logo} className="AppLogo" alt="logo" />*/}
          <h1 className='MainTitle'>Zachary Morel.</h1>
          <div className='MainNavigation'>
            <button className='HeaderButtons' onClick={() => console.log('About was Clicked')}>
              <p className='text'>About</p>
            </button>
            <button className='HeaderButtons' onClick={() => console.log('Contact was Clicked')}>
              <p className='text'>Contact</p>
            </button>
          </div>
        </header>
        
  
        {/* TODO: This is where the Component Toggling will happen*/}
      </div>
    )
  }
}

export default Main