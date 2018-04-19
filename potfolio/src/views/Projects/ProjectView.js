import React from 'react'

import CenterView from '../../utility_components/CenterViewWrapper'
import ImagesWrapper from '../../utility_components/ImagesWrapper'
import PortfolioConfig from '../../PortfolioConfig'
import { imageImport } from '../../utility_functions/ImageImport'
import '../../css/projects.css'

const ProjectView = ({ image }) => {
  const images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  const { projectImage } = styles
  
  return (
    <div className='ProjectViewContainer'>
      <CenterView>
        <ImagesWrapper styles={projectImage} image={images[image]}/>
      </CenterView>
      <CenterView>
        <p>FOOO</p>
      </CenterView>
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