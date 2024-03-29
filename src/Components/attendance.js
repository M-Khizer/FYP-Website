import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Attendance({userData,selectCourse}) {
    console.log('attendance component ')

    let [attendanceData,setAttendanceData] = useState([]);
    console.log(userData)
    const handleGetAttendance= async()=>{
        const res = await axios.post('https://sdok7nl5h2.execute-api.ap-northeast-1.amazonaws.com/prod/getattendance',{
          studentId:null
        })
        const data = await res.data;
        setAttendanceData(data.attendances)
        console.log(attendanceData)

    }

    useEffect(() => {
      handleGetAttendance();
    }, [])
     
  return (
<div className='main'>
        <div className='sub-main'>

            <h2 className='heading student-name'>{userData?.user.name}</h2>
            
            <div className='student-metadata'>
                
                <span>ID: {userData?.instructor.id}</span>
                <span>{selectCourse}</span>
            </div>

            
            <div className='boxes'> 
                
            {
           
                (
                <>
                {/* <h1>Attendance</h1> */}
                {attendanceData.length>0 ?
                (
                  <>
  <table className='table-container'>
  
  <thead>
    <tr>
      <th>Course ID</th>
      <th>Course Name</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Student ID</th>
      <th>Time In</th>

    </tr>
  </thead>
  <tbody>
    {attendanceData.filter(data=>data.courseName === selectCourse).map(item => {
      return (
        <tr key={item.courseId}>
          <td>{ item.courseId }</td>
          <td>{ item.courseName }</td>
          <td>{ item.firstName }</td>
          <td>{ item.lastName }</td>
          <td>{ item.studentId }</td>
          <td>{ item.timeIn }</td>

        </tr>
      );
    })}
  </tbody>
</table>
                    {/* {attendanceData.fil(data=>(<div>{data.timeIn}</div>))} */}
                  
                  {/* {attendanceData.filter(data=>data.courseName === selectCourse).map(
                    filteredData=>(<div>{filteredData.courseName}</div>)
                  )} */}
                  
                  </>
                  
                ) : (<div>data not found</div>) }
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
