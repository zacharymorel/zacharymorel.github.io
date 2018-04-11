import React from 'react';

// Components
import Main from './views/Main';

const App = () => {
  const { app } = styles 
  return (
    <div className="App" style={app}>
      <Main />
    </div>
  );
}

// TODO: Move this somewhere else
const styles = {
  app: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'row',
    width: '100vw'
  }
}

export default App;
