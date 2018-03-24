import React, { PureComponent } from 'react'

import NavigationButton from '../../utils/NavigationButton'
import Shape from '../../utils/Shapes'
import { ProjectConfig } from '../../ProjectConfig.js'

import '../../css/rightView.css'
import '../../css/shapes.css'

class RightView extends PureComponent {
  ShapeClassNames = ['BlueSmallCircleOne', 'RedSmallCircle', 'BlueSmallCircleTwo', 'BlueOval', 'TriangleTopRight', 'LightOval', 'TriangleRight'] 
  Projects = ProjectConfig

  render() {
    const { text } = style

    return (
      <div className='RightViewParent'>        
        <div key={this.props.currentProject} className='ImageParent1' > 
          <img className='Images' alt='Tracker should be here...' src={this.Projects[this.props.currentProject].projectImage}></img>
          <div className='ProjectButtons'>
            <NavigationButton 
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(this.Projects[this.props.currentProject].projectLink1)} 
              contentClassName='Text'
              content={this.Projects[this.props.currentProject].contentText1}
              contentTextSpecificStyle={text}
            />
            <NavigationButton 
              buttonClassName='ProjectLinkButtons' 
              onClick={() => window.open(this.Projects[this.props.currentProject].projectLink2)}  
              contentClassName='Text'
              content={this.Projects[this.props.currentProject].contentText2}
              contentTextSpecificStyle={text}
            />
          </div>
        </div>
        { this.ShapeClassNames.map(item => <Shape key={item} className={item} /> ) }
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