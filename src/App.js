import SignIn from './Components/signIn';
import './App.css';
import Dashboard from './Components/dashboard';
import Webcam from './Components/Webcam';
import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import TeacherDashboard from './Components/teacher-dashboard';
import { useNavigate } from 'react-router-dom';

import Navbar from './Components/navbar';
import Loading from './Components/loading';


function App() {

const [startScan, setStartScan] = useState(false);
const [username,setUsername]=useState('adeelanmed123@gmail.com');
const [password,setPassword]=useState('adeel123');
const [userData,setUserData]=useState({})
const [studentCourses,setStudentCourses]=useState([]);
// const [lat2,setLat2] =useState();
// const [lon2,setLon2] =useState();
// console.log(lat2,lon2);
const nav = useNavigate();

// console.log(userData);
 
console.log(startScan);

  return (
    <div className="App">
      {/* <Navbar userData={userData} /> */}
      {/* <Loading/> */}


      <Routes>
        {/* <Route path='/loading' element={<Loading/>} /> */}
        
        <Route path='/teacherDashboard' 
          element={<TeacherDashboard userData={userData}
          setUserData={setUserData}
          setStartScan={setStartScan} nav={nav} studentCourses = {studentCourses}
          setStudentCourses={setStudentCourses}
          />} ></Route>


        <Route path='/' element={<SignIn username={username} password={password}
          nav={nav} setPassword={setPassword} setUsername={setUsername} 
          userData={userData} setUserData={setUserData} studentCourses = {studentCourses}
          setStudentCourses={setStudentCourses}
          /> } />
        
        <Route path='/dashboard' element={<Dashboard startScan ={startScan} 
        setStartScan={setStartScan} nav={nav} userData={userData}/>}></Route>
        
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
