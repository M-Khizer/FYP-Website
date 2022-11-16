import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function SignIn() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  // cosnt [username,setUser]

  // useEffect(() => {
    
  // }, [third])
  
  const handleSignIn= async (e)=>{
    e.preventDefault();
    const res = await axios.post('https://sdok7nl5h2.execute-api.ap-northeast-1.amazonaws.com/prod/login',{
      username,
      password
    }).then();
    console.log(res.data);
    setUsername('');
    setPassword('');
    
  }
  // console.log(username,password)
  return (
    <div className='main'>
      <div className='sub-main'>
        <h1 className='heading'>Sign In</h1>
        <form className='signin-form' onSubmit={handleSignIn}>

          <div className='email-container'>
            <input type="email" placeholder='Username or email' 
              onChange={(e=>{setUsername(e.target.value)})}
              value={username} />
          </div>

          <div className='password-container'>
            <input type="password" placeholder='Password' 
             onChange={(e=>{setPassword(e.target.value)})}
             value={password} />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <label>Keep me signed in</label>
          </div>
          <button className='sign-in-btn btn'>Sign In</button>
        </form>
        
      </div>
    </div>
  
  )
}
