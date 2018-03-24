import React, { Component } from 'react'

// Styles
import '../../css/leftView.css';

class ProjectDiscription extends Component {
  wordToStyle 

  stringSlice = (input) => {
    const filteredWords = []
    const arr = input.split(' ')
    
    for(let i = 0; i <= arr.length - 1; i++) {
      (i === arr.length - 1) ? this.wordToStyle = arr[i].toString() : filteredWords.push(arr[i]);
    }

    return `${filteredWords.join(' ')}`
  }

  determineUpdate = (key, fillerKey) => ( key ? key : fillerKey )

  render () {
    return (
      <div className='ProjectDiscriptionParent'>
        <section className='ProjectDiscription'>
          <div key={this.determineUpdate(this.props.projectName, 'projectName')} className='ProjectInfo'>
            <h1 className='ProjectText'>{this.stringSlice(this.props.projectName)}</h1>
            <h1 className='ProjectText' style={{color: '#FCA311', paddingLeft: 6}}>{this.wordToStyle}</h1>
          </div>
          <div key={this.determineUpdate(this.props.projectDiscriptionText, 'projectDiscriptionText')} className='ProjectInfo'>
            <p className='ProjectText' style={{fontSize: 15}}>{this.props.projectDiscriptionText}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default ProjectDiscription