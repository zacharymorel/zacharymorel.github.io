import React from 'react'
import ProjectWrapper from './projectWrapper'
import ProjectView from './ProjectView'
import PortfolioConfig from '../../PortfolioConfig'

import '../../css/projects.css'

const projects = ['AvatarNutritionTracker', 'MotherNative']
const projectImages = ['AvatarNutritionTracker.png', 'MotherNative.png']

const Projects = () => {
  return (
    <div className='ProjectsContainer'>
    {
      projects.map((project, index) => 
        <ProjectWrapper key={project}>
          <ProjectView image={projectImages[index]} projectDisplayInfo={PortfolioConfig[project]} />
        </ProjectWrapper>
      )
    }  
    </div>
  )
}

export default Projects
