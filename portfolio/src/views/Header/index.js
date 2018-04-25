import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../Context'
import Contact from '../Contact'
import ButtonWrapper from '../../utilityComponents/ButtonWrapper'

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'Greetings',
      showContactHeader: false,
    }
  }

  toggleComponents = (params, e) => {
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
      <Context.Consumer>
        { value => 
          <header className='Header'>
            <div className='Navigation'>
              <ButtonWrapper 
                buttonClassName='HeaderButtons' 
                onClick={(e) => this.toggleComponents('Greetings', e)} 
                styles={{ borderBottom: (this.state.activeButton === 'Greetings' && '1px solid #373940')}}
              >
                <Link style={{color: '#373940', textDecoration: 'none'}} to='/'><p className='Text'>Greetings</p></Link>
              </ButtonWrapper>
              <ButtonWrapper 
                buttonClassName='HeaderButtons' 
                onClick={(e) => this.toggleComponents('Projects', e)}
                styles={{ borderBottom: (this.state.activeButton === 'Projects' && '1px solid #373940')}}
              >
                <Link style={{color: '#373940', textDecoration: 'none'}} to='/projects'><p className='Text'>Projects</p></Link>
              </ButtonWrapper>
              <ButtonWrapper
                buttonClassName='HeaderButtons' 
                onClick={(e) => { value.toggleContactComponent(e); this.toggleComponents('Contact', e); }} 
                styles={{ borderBottom: (this.state.activeButton === 'Contact' && '1px solid #373940')}}
              >
                <p className='Text'>Contact</p>
              </ButtonWrapper>
            </div>
            <h1 className='HeaderTitle'>Zachary Morel.</h1>
            
            {this.state.showContactHeader && <Contact />} 
          </header>
          // TODO: Fix the Contact Issues when navigating between routes which the blur will accdently get toggled improperly 
        }
      </Context.Consumer>
    )
  }
}

export default Header