import React from 'react'
import ProjectWrapper from './projectWrapper'
import ProjectView from './ProjectView'
import '../../css/work.css'

const projects = ['AvatarNutritionTracker', 'MotherNative']
const projectImages = ['AvatarNutritionTracker.png', 'MotherNative.png']

const Work = () => {
  return (
    <div className='WorkContainer'>
    {
      projects.map((project, index) => 
        <ProjectWrapper key={project}>
          <ProjectView image={projectImages[index]} />
        </ProjectWrapper>
      )
    }  
    </div>
  )
}

export default Work
