import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function TeacherDashboard({userData,setUserData,nav,setStartScan,
    setStudentCourses,studentCourses,lon2,lat2,setLon2,setLat2
}) {
    const [courseName,setCourseName] = useState(false);

    console.log(lat2,lon2);
    useEffect(() => {
     handleStudentCourses();   
    }, [userData])
    
    const handleStudentCourses=()=>{
        setStudentCourses(userData?.instructor.teaching);
    }
    console.log(courseName);
    // console.log(userData?.enrolledIn.courseName)
    
    const handleWebcam=()=>{
        setStartScan(true);
        console.log('webcam function clicked');
        nav('/webcam');
    }

  return (
<div className='main'>
        <div className='sub-main'>

            <h2 className='heading student-name'>{userData?.user.name}</h2>
            
            <div className='student-metadata'>
                
                <span>ID: {userData?.instructor.id}</span>
                {/* <span>{userData?.student.program}</span> */}
            </div>

            
            <div className='boxes'>
            
                
            {
            courseName ? studentCourses.map(course=>(
                    <>                    
                    <div  className='box-container course 
                        dashboard-sub-head'> ({course.courseId}) {course.courseName} 
                        <div className='dashboard-btn'>View</div>
                    </div>

                    {/* <hr></hr> */}
                    {/* <div>{course.courseId}</div> */}
                    </>
                    
                ))
                :
                (
                <>
                <button className='box-container'  onClick={e=>{handleWebcam()}}>
                    <div className='dashboard-sub-head' 
                       
                    >Create new attendance</div>

                    <div className='dashboard-btn'>Create</div>
                </button>

                    <button className='box-container' onClick={()=>{setCourseName(true)}}>
                    <div className='dashboard-sub-head'>View previous attendance</div>
                    <div className='dashboard-btn'>View</div>
                    </button>
                </>
                
                )
                }
                

                <div>

                
                </div>

            </div>
            

        </div>
    </div>  
    
    )
}
