import React from 'react'
import '../../css/leftView.css'

const ProgressBar = (props) => {

  return (
    <div className='ProgressBarParent'>
      <div className='Progress' style={{ width: `${props.progress}%`}} />
    </div>
  )
}

export default ProgressBar