import React, { PureComponent } from 'react'

// Components
import ProjectDiscription from './ProjectDiscription'
import NavigationButton from '../../utils/NavigationButton'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { PortfolioConfig } from '../../PortfolioConfig'

// Styles
import '../../css/leftView.css';

class LeftView extends PureComponent {
  constructor(props) {
    super(props)
    this.Projects = PortfolioConfig
    this.state = {
      projectName: '', 
      projectDiscriptionText: '',
      determineContent: 'ProjectDiscription',
      activeButton: 'ProjectDiscription',
      showContactHeader: false,
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
    if(params === 'ProjectDiscription')
      this.state.determineContent !== params && this.setState({ activeButton: params, determineContent: params, showContactHeader: false }) 

    if(params === 'AboutMe')
      this.state.determineContent !== params && this.setState({ activeButton: params, determineContent: params, showContactHeader: false }) 

    if(params === 'Contact')
      !this.state.showContactHeader ? 
        this.setState({ activeButton: params, showContactHeader: true }) : 
        this.setState({ showContactHeader: false })
  }

  render() {
    return (
      <div className='LeftViewParent'>
        <header className='LeftHeader'>
          <h1 className='LeftTitle'>Zachary Morel.</h1>
          <div className='Navigation'>
            <NavigationButton 
              buttonClassName='HeaderButtons' 
              onClick={() => this.toggleComponents('ProjectDiscription') } 
              styles={{ borderBottom: (this.state.activeButton === 'ProjectDiscription' && '1px solid #373940')}}
            >
              <p className='Text'>Home</p>
            </NavigationButton>
            <NavigationButton 
              buttonClassName='HeaderButtons' 
              onClick={() => this.toggleComponents('AboutMe') }
              styles={{ borderBottom: (this.state.activeButton === 'AboutMe' && '1px solid #373940')}}
            >
              <p className='Text'>About</p>
            </NavigationButton>
            <NavigationButton
              value='Contact'
              buttonClassName='HeaderButtons' 
              onClick={() => this.toggleComponents('Contact')} 
              styles={{ borderBottom: (this.state.activeButton === 'Contact' && '1px solid #373940')}}
            >
              <p className='Text'>Contact</p>
            </NavigationButton>
          </div>
        </header>
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