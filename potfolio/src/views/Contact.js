import React from 'react'
import ButtonWrapper from '../utility_components/ButtonWrapper'
import { PortfolioConfig } from '../PortfolioConfig'

const Contact = () => {
  return (
    <div className='ContactParent'>
      <section className='LinksContainer'>
        <ButtonWrapper
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.Twitter)}
        >
          <p className='Text'>Twitter</p>
        </ButtonWrapper>
        <ButtonWrapper
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.GitHub)}
        >
          <p className='Text'>GitHub</p>
        </ButtonWrapper>
        <ButtonWrapper
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.LinkedIn)}
        >
          <p className='Text'>LinkedIn</p>
        </ButtonWrapper>
        <ButtonWrapper
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.Telephone)}
        >
          <p className='Text'>TEL</p>
        </ButtonWrapper>
      </section>
    </div>
  )
}

export default Contact