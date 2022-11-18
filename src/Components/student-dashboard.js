import React from 'react'

export default function StudentDashboard({userData,setUserData}) {
    console.log(userData?.user.name)
    
  return (
<div className='main'>
        <div className='sub-main'>

            <h2 className='heading student-name'>{userData?.user.name}</h2>
            
            <div className='student-metadata'>
                <span>{userData?.user.studentId}</span>
                <span>{userData?.student.program}</span>
            </div>
            
            <div className='boxes'>

                <button className='box-container'>
                    <div className='dashboard-sub-head'>View previous attendance</div>
                    <div className='dashboard-btn'>></div>
                </button>

            </div>
            

        </div>
    </div>  
    
    )
}
