import React from 'react';
import picture from './images/main.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={
      { backgroundImage:`url(${picture})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
      }>
    </div>
  );
}

export default App;
