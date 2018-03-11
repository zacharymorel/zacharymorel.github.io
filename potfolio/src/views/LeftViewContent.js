import React from 'react'

// Styles
import '../css/App.css';

const LeftViewContent = (props) => {
  return (
    <div className='LeftViewContentParent'>
      <section className='ProjectLeftViewContent'>
        <div className='ProjectInfo'>
          <h1 className='Text'>{props.projectName}</h1>
        </div>
        <div className='ProjectInfo'>
          <p className='Text' style={{fontSize: 15}}>{props.projectDiscriptionText}</p>
        </div>
      </section>
    </div>
  )
}

export default LeftViewContent