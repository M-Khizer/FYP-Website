import React from 'react'

export default function SignIn() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <h1 className='signin-heading'>Sign In</h1>
        <form className='signin-form'>

          <div className='email-container'>
            <input type="email" placeholder='Username or email' />
          </div>

          <div className='password-container'>
            <input type="password" placeholder='Password' />
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
