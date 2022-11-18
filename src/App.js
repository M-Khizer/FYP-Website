import SignIn from './Components/signIn';
import './App.css';
import Dashboard from './Components/dashboard';
import Webcam from './Components/Webcam';
import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import StudentDashboard from './Components/student-dashboard';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/navbar';
import Loading from './Components/loading';


function App() {

const [startScan, setStartScan] = useState(false);
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [userData,setUserData]=useState([])
const nav = useNavigate();
 
console.log(startScan);

  return (
    <div className="App">
      {/* <Navbar userData={userData} /> */}
      {/* <Loading/> */}


      <Routes>
        {/* <Route path='/loading' element={<Loading/>} /> */}
        
        <Route path='/studentDashboard' 
          element={<StudentDashboard userData={userData}
          setUserData={setUserData}/>} ></Route>


        <Route path='/' element={<SignIn username={username} password={password}
          nav={nav} setPassword={setPassword} setUsername={setUsername} 
          userData={userData} setUserData={setUserData}
          /> } />
        
        <Route path='/dashboard' element={<Dashboard startScan ={startScan} setStartScan={setStartScan} />}></Route>
        
        <Route path='/webcam' element={<Webcam startScan ={startScan} 
          nav={nav}/>}></Route>

        {/* <Route path='/studentDashboard' element={<StudentDashboard userData={userData}
          setUserData={setUserData}
          />} ></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
