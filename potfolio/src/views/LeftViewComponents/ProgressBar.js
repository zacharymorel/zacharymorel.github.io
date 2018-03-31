import React from 'react'
import '../../css/leftView.css'

const ProgressBar = ({progress}) => {
  return (
    <div className='ProgressBarParent'>
      <div className='Progress' style={{ width: `${progress}%`}} />
    </div>
  )
}

export default ProgressBar