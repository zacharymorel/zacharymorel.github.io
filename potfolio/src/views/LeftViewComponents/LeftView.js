import React, { PureComponent } from 'react'

// Components
import ProjectDiscription from './ProjectDiscription'
import NavigationButton from '../../utils/NavigationButton'
import AboutMe from './AboutMe'
import { ProjectConfig } from '../../ProjectConfig'

// Styles
import '../../css/leftView.css';

class LeftView extends PureComponent {
  constructor(props) {
    super(props)
    this.Projects = ProjectConfig
    this.state = {
      projectName: '', 
      projectDiscriptionText: '',
      componentToShow: 'ProjectDiscription'
    }
  }

  componentDidMount () {
    const description = this.Projects[this.props.currentProject].discription
    const project = this.Projects[this.props.currentProject].projectName
    this.setState({ projectName: project, projectDiscriptionText: description})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentProject !== this.props.currentProject) {
      const description = this.Projects[nextProps.currentProject].discription
      const project = this.Projects[nextProps.currentProject].projectName
      this.setState({ projectName: project, projectDiscriptionText: description})
    }
  }

  toggleComponents = (params) => {
    this.state.componentToShow !== params ? this.setState({ componentToShow: params }) : this.setState({ componentToShow: 'ProjectDiscription' })
  }

  render() {
    return (
      <div className='LeftViewParent'>
        <header className='LeftHeader'>
          <h1 className='LeftTitle'>Zachary Morel.</h1>
          <div className='Navigation'>
            <NavigationButton 
              buttonClassName='HeaderButtons' 
              onClick={() => this.toggleComponents('AboutMe')} 
              contentClassName='Text'
              content='About'
            />
            <NavigationButton 
              buttonClassName='HeaderButtons' 
              onClick={() => console.log('Contact was Clicked')} 
              contentClassName='Text'
              content='Contact'
            />
          </div>
        </header>
        {this.state.componentToShow === 'ProjectDiscription' ? 
          <ProjectDiscription 
            projectName={this.state.projectName} 
            projectDiscriptionText={this.state.projectDiscriptionText} 
          />
          : 
          <AboutMe />
        }
      </div>
    )
  }
}

export default LeftView