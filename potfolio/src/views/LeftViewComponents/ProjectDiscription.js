import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
import SpaceFiller from '../../utils/SpaceFiller'

// Styles
import '../../css/leftView.css';

class ProjectDiscription extends Component {
  constructor(props) {
    super(props)
    this.wordToStyle 
    this.state = {
      progressBarCalc: 0
    }
  }

  stringSlice = (input) => {
    const filteredWords = []
    const arr = input.split(' ')
    
    for(let i = 0; i <= arr.length - 1; i++) {
      (i === arr.length - 1) ? this.wordToStyle = arr[i].toString() : filteredWords.push(arr[i]);
    }

    return `${filteredWords.join(' ')}`
  }

  componentWillReceiveProps(NextProps) {
    if(this.props !== NextProps)
      this.calculateProgress(this.state.progressBarCalc)
  }

  calculateProgress = (calc) => {
    if(calc === 0) 
      this.setState({ progressBarCalc: 25 })

    if(calc === 25) 
      this.setState({ progressBarCalc: 50 })

    if(calc === 50) 
      this.setState({ progressBarCalc: 75 })

    if(calc === 75) 
      this.setState({ progressBarCalc: 100 })

    if(calc === 100) 
      this.setState({ progressBarCalc: 25 })
  }

  determineUpdate = (key, fillerKey) => ( key ? key : fillerKey )

  render () {
    return (
      <div className='ProjectDiscriptionParent'>
        <section className='ProjectDiscription'>
          <div key={this.determineUpdate(this.props.projectName, 'projectName')} className='ProjectTitle'>
            <h1 className='ProjectText'>{this.stringSlice(this.props.projectName)}</h1>
            <h1 className='ProjectText' style={{color: '#FCA311', paddingLeft: 6}}>{this.wordToStyle}</h1>
          </div>
          <SpaceFiller styles={{backgroundColor: '#fff', height: '20%', position: 'relative', width: '100%', zIndex: 5}} />
          <div key={this.determineUpdate(this.props.projectDiscriptionText, 'projectDiscriptionText')} className='ProjectInfo'>
            <p className='ProjectText' style={{fontSize: 15}}>{this.props.projectDiscriptionText}</p>
          </div>
          <SpaceFiller styles={{height: '2%', width: '100%'}}/>
          <ProgressBar progress={this.state.progressBarCalc} />
        </section>
      </div>
    )
  }
}

export default ProjectDiscription