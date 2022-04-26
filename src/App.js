import React from 'react';
import picture from './images/main.jpeg'
import logos from './images/logos.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    {/* IDEA FOR FULL PAGE PICTURE */}

    {/* <div className="App" style={
      { backgroundImage:`url(${picture})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
      }>
        <div style={{color: "white"}}>
          <p>hello</p>
        </div>
    </div> */}

    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
      </header>
    </div>


    </>
  );
}

export default App;
