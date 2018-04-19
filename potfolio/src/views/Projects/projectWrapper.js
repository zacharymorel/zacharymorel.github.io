import React from 'react'
import '../../css/projects.css'

const ProjectWrapper = ({ children }) => {
  return (
    <section className='ProjectWrapperContainer'>
      {children}
    </section>
  )
}

export default ProjectWrapper
