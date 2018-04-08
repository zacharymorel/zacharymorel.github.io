import React, { Component } from 'react'
import ButtonWrapper from '../../utility_components/ButtonWrapper'

// import '../../css/mobile/leftViewMobile.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'ProjectDiscription',
      showContactHeader: false,
    }
  }

  toggleComponents = (params) => {
    if(params === 'ProjectDiscription') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
        this.props.headerDetermineContentCallBack(params)
      }
    }

    if(params === 'AboutMe') {
      if(this.props.determineContent !== params ) {
        this.setState({ activeButton: params, showContactHeader: false }) 
        this.props.headerDetermineContentCallBack(params)
      }
    }

    if(params === 'Contact')
      !this.state.showContactHeader ? 
        this.setState({ activeButton: params, showContactHeader: true }) : 
        this.setState({ showContactHeader: false })
  }

  render() {
    return (
      <header className='Header'>
        <h1 className='HeaderTitle'>Zachary Morel.</h1>
        <div className='Navigation'>
          <ButtonWrapper 
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('ProjectDiscription') } 
            styles={{ borderBottom: (this.state.activeButton === 'ProjectDiscription' && '1px solid #373940')}}
          >
            <p className='Text'>Greetings</p>
          </ButtonWrapper>
          <ButtonWrapper 
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('AboutMe') }
            styles={{ borderBottom: (this.state.activeButton === 'AboutMe' && '1px solid #373940')}}
          >
            <p className='Text'>Work</p>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons' 
            onClick={() => this.toggleComponents('Contact')} 
            styles={{ borderBottom: (this.state.activeButton === 'Contact' && '1px solid #373940')}}
          >
            <p className='Text'>Contact</p>
          </ButtonWrapper>
        </div>
      </header>
    )
  }
}

export default Header 