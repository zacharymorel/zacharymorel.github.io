import React from 'react'
import './projects.css'

const ProjectWrapper = ({ children }) => {
  return (
    <section className='ProjectWrapperContainer'>
      {children}
    </section>
  )
}

export default ProjectWrapper
