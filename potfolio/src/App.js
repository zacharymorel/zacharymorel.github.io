import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Main from './views/Main';
import Projects from './views/Projects/index'
import Header from './views/Header'

const App = () => {
  const { app, routerContainer } = styles 
  return (
    <Router>
      <div className="App" style={app}>
        <Header />
        <section style={routerContainer}>
          <Route exact path='/' component={Main}/>
          <Route path='/projects' component={Projects}/>
        </section>
      </div>
    </Router>
  );
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

export default App;
