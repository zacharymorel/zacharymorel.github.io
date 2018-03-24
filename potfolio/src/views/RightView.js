import React, { PureComponent } from 'react'

import NavigationButton from '../utils/components/NavigationButton'
import Shape from '../utils/components/shapes'

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
  MotherNative : {
    projectImage: require('../images/MotherNative.png'),
    contentText1: 'GitHub Node.js',
    contentText2: 'GitHub React',
    projectLink1: 'https://github.com/zacharymorel/momapp',
    projectLink2: 'https://github.com/zacharymorel/finalProject'
  }
}


class RightView extends PureComponent {
  ShapeClassNames = ['BlueSmallCircleOne', 'RedSmallCircle', 'BlueSmallCircleTwo', 'PurpleOval', 'TriangleTopLeft', 'TriangleRight'] 

  render() {
    const { text } = style

    return (
      <div className='RightViewParent'>        
        <div key={this.props.currentProject} className='ImageParent1' > 
          <img className='Images' alt='Tracker should be here...' src={projects[this.props.currentProject].projectImage}></img>
          <div className='ProjectRighViewtButtons'>
            <NavigationButton 
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(projects[this.props.currentProject].projectLink1)} 
              contentClassName='Text'
              content={projects[this.props.currentProject].contentText1}
              contentTextSpecificStyle={text}
            />
            <NavigationButton 
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(projects[this.props.currentProject].projectLink2)}  
              contentClassName='Text'
              content={projects[this.props.currentProject].contentText2}
              contentTextSpecificStyle={text}
            />
          </div>
        </div>
        { this.ShapeClassNames.map((item) => <Shape key={item} className={item} /> ) }
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