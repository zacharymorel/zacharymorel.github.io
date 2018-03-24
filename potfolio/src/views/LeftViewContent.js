import React, { Component } from 'react'

// Styles
import '../css/App.css';

let wordToStyle 
class LeftViewContent extends Component {

  stringSlice = (input) => {
    const filteredWords = []
    const arr = input.split(' ')
    
    for(let i = 0; i <= arr.length - 1; i++) {
      (i === arr.length - 1) ? wordToStyle = arr[i].toString() : filteredWords.push(arr[i]);
    }

    return `${filteredWords.join(' ')}`
  }

  render () {
    return (
      <div className='LeftViewContentParent'>
        <section  className='ProjectLeftViewContent'>
          <div key={this.props.projectName} className='ProjectInfo'>
            <h1 className='ProjectText'>{this.stringSlice(this.props.projectName)}</h1>
            <h1 className='ProjectText' style={{color: '#FCA311', paddingLeft: 6}}>{wordToStyle}</h1>
          </div>
          <div key={this.props.projectDiscriptionText} className='ProjectInfo'>
            <p className='ProjectText' style={{fontSize: 15}}>{this.props.projectDiscriptionText}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default LeftViewContent