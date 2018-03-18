import React, { Component } from 'react'

// Styles
import '../css/App.css';

let filteredWords = []
let wordToStyle 
class LeftViewContent extends Component {

  stringSlice = (input) => {
    const arr = input.split(' ')

    console.log('arr', arr)
    for(let i = 0; i <= arr.length - 1; i++) {
      (i === arr.length - 1) ? wordToStyle = arr[i].toString() : filteredWords.push(arr[i]);
    }                                                            // ^^^ TODO: BUG HERE Pushing on to exsisting arr
                                                                // I need to delete past array before pushing more projectName or I can treate it immitably  
    console.log('FILTERED', filteredWords)
    return `${filteredWords.join(' ')}`
  }

  render () {
    console.log(this.props.projectName)
    return (
      <div className='LeftViewContentParent'>
        <section className='ProjectLeftViewContent'>
          <div className='ProjectInfo'>
            <h1 className='Text'>{this.stringSlice(this.props.projectName)}</h1>
            <h1 className='Text' style={{color: '#FCA311'}}>{wordToStyle}</h1>
          </div>
          <div className='ProjectInfo'>
            <p className='Text' style={{fontSize: 15}}>{this.props.projectDiscriptionText}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default LeftViewContent