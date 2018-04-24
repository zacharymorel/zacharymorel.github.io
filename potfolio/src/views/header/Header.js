import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import ButtonWrapper from '../../utility_components/ButtonWrapper'

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'Greetings',
      showContactHeader: false,
    }
  }

  toggleComponents = (params) => (e) => {
    if(params === 'Greetings') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
      }
    }

    if(params === 'Projects') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
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
            onClick={this.toggleComponents('Greetings') } 
            styles={{ borderBottom: (this.state.activeButton === 'Greetings' && '1px solid #373940')}}
          >
            <Link style={{color: '#373940', textDecoration: 'none'}} to='/'><p className='Text'>Greetings</p></Link>
          </ButtonWrapper>
          <ButtonWrapper 
            buttonClassName='HeaderButtons' 
            onClick={this.toggleComponents('Projects') }
            styles={{ borderBottom: (this.state.activeButton === 'Projects' && '1px solid #373940')}}
          >
            <Link style={{color: '#373940', textDecoration: 'none'}} to='/projects'><p className='Text'>Projects</p></Link>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons' 
            onClick={this.toggleComponents('Contact')} 
            styles={{ borderBottom: (this.state.activeButton === 'Contact' && '1px solid #373940')}}
          >
            <p className='Text'>Contact</p>
          </ButtonWrapper>
        </div>
        <h1 className='HeaderTitle'>Zachary Morel.</h1>
        {/* THIS IS WHERE I AM GOING TO SHOW CONTACT INFO DYNAMICALLY */}
        {/* this.state.showContactHeader && <Contact /> */}
      </header>
    )
  }
}

export default Header