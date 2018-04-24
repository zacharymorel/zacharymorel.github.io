import React, { Component } from 'react'
import ButtonWrapper from '../../utility_components/ButtonWrapper'
import PortfolioConfig from '../../PortfolioConfig'
import './contact.css'
import '../header/header.css'

class Contact extends Component {

  handleOpenWebLink = (link) => (e) => (window.open(link))

  render() {
    return (
      <div className='ContactParent'>
        <section className='LinksContainer'>
          <ButtonWrapper
            buttonClassName='HeaderButtons'
            onClick={this.handleOpenWebLink(PortfolioConfig.ContactInfo.Twitter)}
          >
            <p className='Text'>Twitter</p>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons'
            onClick={this.handleOpenWebLink(PortfolioConfig.ContactInfo.GitHub)}
          >
            <p className='Text'>GitHub</p>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons'
            onClick={this.handleOpenWebLink(PortfolioConfig.ContactInfo.LinkedIn)}
          >
            <p className='Text'>LinkedIn</p>
          </ButtonWrapper>
          <ButtonWrapper
            buttonClassName='HeaderButtons'
            onClick={this.handleOpenWebLink(PortfolioConfig.ContactInfo.Telephone)}
          >
            <p className='Text'>TEL</p>
          </ButtonWrapper>
        </section>
      </div>
    )
  }
}

export default Contact