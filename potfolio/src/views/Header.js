import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonWrapper from '../utility_components/ButtonWrapper'

import '../css/header.css'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'Greetings',
      showContactHeader: false,
    }
  }

  // TODO: Include Context API here? Send up url and teach it which components to show 
  //       instead of using React Router since it's so small?
  toggleComponents = (params) => {
    if(params === 'Greetings') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
        // this.props.headerDetermineContentCallBack(params)
      }
    }

    if(params === 'Projects') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
        // this.props.headerDetermineContentCallBack(params)
      }
    }

    if(params === 'Contact')
      !this.state.showContactHeader ? 
        this.setState({ activeButton: params, showContactHeader: true }) : 
        this.setState({ showContactHeader: false })
  }

  render() {
    return (
      <header className='Header' >
        <div className='Navigation'>
          <ButtonWrapper 
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('Greetings') } 
            styles={{ borderBottom: (this.state.activeButton === 'Greetings' && '1px solid #373940')}}
          >
            <Link style={{color: '#373940', textDecoration: 'none'}} to='/'><p className='Text'>Greetings</p></Link>
          </ButtonWrapper>
          <ButtonWrapper 
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('Projects') }
            styles={{ borderBottom: (this.state.activeButton === 'Projects' && '1px solid #373940')}}
          >
            <Link style={{color: '#373940', textDecoration: 'none'}} to='/projects'><p className='Text'>Projects</p></Link>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('Contact')} 
            styles={{ borderBottom: (this.state.activeButton === 'Contact' && '1px solid #373940')}}
          >
            <p className='Text'>Contact</p>
          </ButtonWrapper>
        </div>
        <h1 className='HeaderTitle'>Zachary Morel.</h1>
      </header>
    )
  }
}

export default Header 