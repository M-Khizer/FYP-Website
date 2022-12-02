import React from 'react'

export default function StudentDashboard({userData,setUserData,nav,setStartScan}) {
    console.log(userData?.student.enrolledIn[0].courseName);
    // console.log(userData?.enrolledIn.courseName)
    
    // const handleWebcam=()=>{
    //     setStartScan(true);
    //     console.log('webcam function clicked');
    //     nav('/webcam');
    // }

  return (
<div className='main'>
        <div className='sub-main'>

            <h2 className='heading student-name'>{userData?.user.name}</h2>
            
            <div className='student-metadata'>
                <span>{userData?.student.enrolledIn[0].courseName}</span>
                <span>{userData?.user.studentId}</span>
                <span>{userData?.student.program}</span>
            </div>

            
            <div className='boxes'>
            
                {/* <button className='box-container'  onClick={e=>{handleWebcam()}}>
                    <div className='dashboard-sub-head' 
                       
                    >Create new attendance</div>

                    <div className='dashboard-btn'>Create</div>
                </button> */}

                <button className='box-container'>
                    <div className='dashboard-sub-head'>View previous attendance</div>
                    <div className='dashboard-btn'>View</div>
                </button>

            </div>
            

        </div>
    </div>  
    
    )
}
