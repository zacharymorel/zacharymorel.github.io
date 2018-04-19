import React from 'react'

import ImagesWrapper from '../../utility_components/ImagesWrapper'
import PortfolioConfig from '../../PortfolioConfig'
import { imageImport } from '../../utility_functions/ImageImport'
import '../../css/work.css'

const ProjectView = ({ image }) => {
  const images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  const { projectImage } = styles
  
  return (
    <div className='ProjectViewContainer'>
      <ImagesWrapper styles={projectImage} image={images[image]}/>
      <p>FOOO</p>
    </div>
  )
}

const styles = {
  projectImage: {
    height: '90%',
    width: '50%',
  }
}

export default ProjectView