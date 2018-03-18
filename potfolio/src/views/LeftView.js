import React, { Component } from 'react'

// Components
import LeftViewContent from './LeftViewContent'
import NavigationButton from '../utils/components/NavigationButton'

// Styles
import '../css/App.css';

const projectDiscriptionText = {
  AvatarNutirionTracker: 'The Tracker for Avatar Nutrition is a cross platfrom Mobile App that I got hired on to create, lead, build, and mantain the app for the company.  It is an essential product to Avatar Nutriton\'s product sweep.',
  MotherNative: 'Mother Native is an app that provides an easy task manager for mothers who are expecting and mothers that already have little ones. We aim to consider their needs with easy-to-use features for simplicity during the busiest times of their lives.',
}

const projectName = {
  AvatarNutirionTracker: 'Avatar Nutirion Tracker',
  MotherNative: 'Mother Native'
}

class LeftView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectName: '', 
      projectDiscriptionText: ''
    }
  }

  componentDidMount () {
    const description = projectDiscriptionText[this.props.currentProject]
    const project = projectName[this.props.currentProject]
    this.setState({ projectName: project, projectDiscriptionText: description})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentProject !== this.props.currentProject) {
      const description = projectDiscriptionText[this.props.currentProject]
      const project = projectName[this.props.currentProject]
      this.setState({ projectName: project, projectDiscriptionText: description})
    }
  }


  render() {
    return (
      <div className='LeftViewParent'>
        <header className='MainHeader'>
        {/*<img src={logo} className="AppLogo" alt="logo" />*/}
          <h1 className='MainTitle'>Zachary Morel.</h1>
          <div className='MainNavigation'>
            <NavigationButton 
              buttonClassName='HeaderButtons' 
              onClick={() => console.log('About was Clicked')} 
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
        <LeftViewContent 
          projectName={this.state.projectName} 
          projectDiscriptionText={this.state.projectDiscriptionText} 
        />
      </div>
    )
  }
}

export default LeftView