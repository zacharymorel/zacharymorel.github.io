import React, { Fragment } from 'react'

import ImagesWrapper from '../../utility_components/ImagesWrapper'
import PortfolioConfig from '../../PortfolioConfig'
import { imageImport } from '../../utility_functions/ImageImport'

const ProjectView = ({image}) => {
  const images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  const { projectImage } = styles
  
  return (
    <Fragment>
      <ImagesWrapper styles={projectImage} image={images[image]}/>
    </Fragment>
  )
}

const styles = {
  projectImage: {
    height: '90%',
    width: '50%',
  }
}

export default ProjectView