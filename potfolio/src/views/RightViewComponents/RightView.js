import React, { PureComponent } from 'react'

import NavigationButton from '../../utils/NavigationButton'
import Shape from '../../utils/Shapes'
import { PortfolioConfig } from '../../PortfolioConfig.js'

import '../../css/rightView.css'
import '../../css/shapes.css'
// import '../../css/mobile/rightViewMobile.css'
// import '../../css/mobile/shapesMobile.css'

class RightView extends PureComponent {
  ShapeClassNames = ['BlueSmallCircleOne', 'RedSmallCircle', 'BlueSmallCircleTwo', 'BlueOval', 'TriangleTopRight', 'LightOval', 'TriangleRight'] 
  Projects = PortfolioConfig

  render() {
    const { text } = style

    return (
      <div className='RightViewParent'>
        <section key={this.props.currentProject} className='RighViewContent'>        
          <div key={this.props.currentProject} className='ImageParent' > 
            <img className='Images' alt='Tracker should be here...' src={this.Projects[this.props.currentProject].projectImage}></img>
            <div className='ProjectButtons'>
              <NavigationButton 
                buttonClassName='ProjectLinkButtons' 
                onClick={() => window.open(this.Projects[this.props.currentProject].projectLink1)} 
              >
                <p className='Text' style={text}>{this.Projects[this.props.currentProject].contentText1}</p>
              </NavigationButton>
              <NavigationButton 
                buttonClassName='ProjectLinkButtons' 
                onClick={() => window.open(this.Projects[this.props.currentProject].projectLink2)}  
              >
                <p className='Text' style={text}>{this.Projects[this.props.currentProject].contentText2}</p>
              </NavigationButton>
            </div>
          </div>
        </section>
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