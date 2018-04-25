import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import AppProvider from './AppProvider'
import Greeting from './views/Greetings';
import Projects from './views/Projects/index'
import Header from './views/Header'
import InitialAnimation from './views/InitialAnimation'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      timer: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.timer, 1000)
  }

  componentWillMount() {
    this.clearTimer()
  }

  timer = () => ( this.setState({ timer: this.state.timer + 1 }) )

  clearTimer = () => ( (this.timer) ? clearInterval(this.timer) : null )

  render() {
    const { app, routerContainer } = styles 

    if (this.state.timer < 2)
      return (
        <InitialAnimation />
      ) 
    else {
      this.clearTimer()
      return (
        <Router>
          <AppProvider>
            <div className="App" style={app}>
              <Header />
              <section style={routerContainer}>
                <Route exact path='/' component={Greeting}/>
                <Route path='/projects' component={Projects}/>
              </section>
            </div>
          </AppProvider>
        </Router>
      )
    }
  }
}


const styles = {
  app: {
    height: '100vh',
    width: '100vw'
  },
  routerContainer: {
    height: '95%', 
    width: '100%'
  }
}

export default App
