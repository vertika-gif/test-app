import React from 'react';
import Vartika from './Vartika'
import Garima from './Garima'
import Chirag from './Chirag'
import MyResume from './MyResume'

// import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div>
    {/* <div className="app">
    <div className="myrow">
     <h1>abc</h1>
     <h2>efg</h2>
     </div>
    </div> */}
    <MyResume/>
    <Vartika/>
    <Garima/>
    <Chirag/>
    </div>
  );
}

export default App;
