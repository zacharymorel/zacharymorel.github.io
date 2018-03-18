import React, { Component } from 'react'

import NavigationButton from '../utils/components/NavigationButton'

// Styles
import '../css/App.css';

const projects = {
  AvatarNutirionTracker : {
    projectImage: require('../images/AvatarNutritionTracker.png'),
    contentText1: 'Apple Store',
    contentText2: 'Google Play Store',
    projectLink1: 'https://itunes.apple.com/us/app/avatar-nutrition-tracker/id1337360354?mt=8',
    projectLink2: 'https://play.google.com/store/apps/details?id=com.avatarnutrition.avatarnutritionapp&hl=en'
  },
  MotherNative : {}
}

class RightView extends Component {

  render() {
    const { text } = style
    return (
      <div className='RightViewParent'>
        <div className='ImageParent'> 
          <img className='Images' alt='Tracker should be here...' src={projects.AvatarNutirionTracker.projectImage}></img>
          {/* TODO: ^^^ this is going to toggle JSX expression based upon PROPS current project*/}
          <div className='ProjectRighViewtButtons'>
            <NavigationButton 
              // TODO: this* buttons will also have dynamic content passed to them based upon current project
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(projects.AvatarNutirionTracker.projectLink1)} 
              contentClassName='Text'
              content={projects.AvatarNutirionTracker.contentText1}
              contentTextSpecificStyle={text}
            />
            <NavigationButton 
              // TODO: this* buttons will also have dynamic content passed to them based upon current project
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(projects.AvatarNutirionTracker.projectLink2)}  
              contentClassName='Text'
              content={projects.AvatarNutirionTracker.contentText2}
              contentTextSpecificStyle={text}
            />
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  text: {
    'fontSize': 14
  },
}

export default RightView