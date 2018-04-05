import React, { PureComponent } from 'react'

// Components
import ProjectDiscription from './ProjectDiscription'
import Header from './Header'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { PortfolioConfig } from '../../PortfolioConfig'

// Styles
import '../../css/leftView.css'
import '../../css/mobile/leftViewMobile.css'

class LeftView extends PureComponent {
  constructor(props) {
    super(props)
    this.Projects = PortfolioConfig
    this.state = {
      projectName: '', 
      projectDiscriptionText: '',
      determineContent: 'ProjectDiscription',
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

  toggleContent = (content, isShowing) => {
    content ? this.setState({ determineContent: content, showContactHeader: isShowing }) :
    this.setState({ showContactHeader: isShowing }) 
  }

  render() {
    return (
      <div className='LeftViewParent'>
        <Header headerDetermineContentCallBack={this.headerDetermineContentCallBack} />
        {this.state.showContactHeader && <Contact />}
        {this.state.determineContent === 'ProjectDiscription' &&  
          <ProjectDiscription 
            projectName={this.state.projectName} 
            projectDiscriptionText={this.state.projectDiscriptionText} 
          />
        }
        {this.state.determineContent === 'AboutMe' && <AboutMe /> }
      </div>
    )
  }
}

export default LeftView