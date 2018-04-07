import React, { Component } from 'react'

// Components
import LeftView from './LeftViewComponents/LeftView'
import RightView from './RightViewComponents/RightView';
import ImagesWrapper from '../utility_components/ImagesWrapper'
import { imageImport } from '../utility_functions/ImageImport'


// Styles
import '../css/main.css';
// import '../css/mobile/mainMobile.css'

class Main extends Component {
  images = imageImport(require.context('../images', false, /\.(png|jpe?g|svg)$/))
  
  render() {
    console.log('this.images: ', this.images);

    return (
      <div className='MainParent'>
        <ImagesWrapper image={this.images['Easter2018.jpg']} />
        <p>TEST</p>
        {/*<LeftView currentProject={this.state.currentProject} />*/}
        {/*<RightView currentProject={this.state.currentProject} />*/}
      </div>
    )
  }
}

export default Main