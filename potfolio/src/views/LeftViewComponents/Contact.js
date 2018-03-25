import React from 'react'
import NavigationButton from '../../utils/NavigationButton'
import { PortfolioConfig } from '../../PortfolioConfig'

import '../../css/leftView.css'

const Contact = () => {
  return (
    <div className='ContactParent'>
      <section className='LinksContainer'>
        <NavigationButton
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.Twitter)}
        >
          <p className='Text'>Twitter</p>
        </NavigationButton>
        <NavigationButton
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.GitHub)}
        >
          <p className='Text'>GitHub</p>
        </NavigationButton>
        <NavigationButton
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.LinkedIn)}
        >
          <p className='Text'>LinkedIn</p>
        </NavigationButton>
        <NavigationButton
          buttonClassName='HeaderButtons'
          onClick={() => window.open(PortfolioConfig.ContactInfo.Telephone)}
        >
          <p className='Text'>TEL</p>
        </NavigationButton>
      </section>
    </div>
  )
}

export default Contact