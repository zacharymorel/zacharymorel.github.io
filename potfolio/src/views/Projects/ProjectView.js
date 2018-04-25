import React, { Component } from 'react'
import Context from '../../Context'
import ButtonWrapper from '../../utilityComponents/ButtonWrapper'
import CenterView from '../../utilityComponents/CenterViewWrapper'
import ImagesWrapper from '../../utilityComponents/ImagesWrapper'
import { imageImport } from '../../utilityFunctions/ImageImport'
import './projects.css'

class ProjectView extends Component  {
  images = imageImport(require.context('../../images', false, /\.(png|jpe?g|svg)$/))
  projectDisplayInfo = this.props.projectDisplayInfo
  image = this.props.image

  handleOpenWebLink = (link) => (e) => (window.open(link))
  
  render() {
    const { projectDescription, projectImage, projectTitle } = styles

    return (
      <Context.Consumer>
      { value => 
        <div className='ProjectViewContainer' style={{ WebkitFilter: (value.showContactComponent) && 'blur(8px)' }}>
          <CenterView>
            <ImagesWrapper styles={projectImage} image={this.images[this.image]}/>
          </CenterView>
          <CenterView>
            <section className='ProjectDescriptionWrapper'>
              <div className='ProjectDescriptionContainer'>
                <p className='Text' style={projectTitle}>{this.projectDisplayInfo.projectName}</p>
                <p className='Text' style={projectDescription}>{this.projectDisplayInfo.description}</p>
              </div>
              <div className='ProjectButtonsContainer'>
                <ButtonWrapper 
                  buttonClassName='ProjectButtons'
                  onClick={this.handleOpenWebLink(this.projectDisplayInfo.projectLink1)}
                >
                  <p className='Text'>{this.projectDisplayInfo.contentText1}</p>
                </ButtonWrapper>
                <ButtonWrapper 
                  buttonClassName='ProjectButtons'
                  onClick={this.handleOpenWebLink(this.projectDisplayInfo.projectLink2)}
                >
                  <p className='Text'>{this.projectDisplayInfo.contentText2}</p>
                </ButtonWrapper>
              </div>
            </section>
          </CenterView>
        </div>
      }
      </Context.Consumer>
    )
  }
}

const styles = {
  projectDescription: {
    width: '70%'
  },
  projectImage: {
    height: '90%',
    width: '50%',
  },
  projectTitle: {
    marginBottom: 20,
  },
}

export default ProjectView