import SignIn from './Components/signIn';
import './App.css';
import Dashboard from './Components/dashboard';
import Webcam from './Components/Webcam';
import React, { useState } from 'react'


function App() {
const [startScan, setStartScan] = useState(true);
console.log(startScan);

  return (
    <div className="App">
      <SignIn/>
      <Dashboard startScan ={startScan} setStartScan={setStartScan} />
      <Webcam startScan ={startScan}/>
    </div>
  );
}

export default App;
