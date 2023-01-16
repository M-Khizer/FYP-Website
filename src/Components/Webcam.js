import React from 'react'
import { useState,useRef } from "react";
import {QrReader} from "react-qr-reader";
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Distance from './distance';
import axios from 'axios';

// import { json } from 'react-router-dom';

export default function Webcam({startScan}) {
    const [loadingScan, setLoadingScan] = useState(false);
    // const [data, setData] = useState([]);
    let [lat1,setLat1]=useState(0);
    let [lon1,setLon1]=useState(0);
    const [radius,setRadius]=useState(0);
    // const[studentFullName,setStudentFullName]=useState('');
    const [studentName,setStudentName]=useState([]);
    const ref= useRef(null)

    
    // const [lat2, setLat2] = useState(
    //   localStorage.getItem("latit2")
    //     ? JSON.parse(localStorage.getItem("latit2"))
    //     : null
    // );
    
    const [lat2, setLat2] = useState(0)
    
    // const [lon2, setLon2] = useState(
    //   localStorage.getItem("longi2")
    //     ? JSON.parse(localStorage.getItem("longi2"))
    //     : null
    // );
    
    const [lon2, setLon2] = useState(0)
    
    // const [qrClassSection, setQrClassSection] = useState(
      
    //   localStorage.getItem("qrClassSection")
    //     ? JSON.parse(localStorage.getItem("qrClassSection"))
    //     : null
    // );
    
    const [qrClassSection, setQrClassSection] = useState('')
    
    // const [qrCourseId, setQrCourseId] = useState(
    //   localStorage.getItem("qrCourseId")
    //     ? JSON.parse(localStorage.getItem("qrCourseId"))
    //     : null
    // );
    
    const [qrCourseId, setQrCourseId] = useState('')
    
    // const [qrCourseName, setQrCourseName] = useState(
    //   localStorage.getItem("qrCourseName")
    //     ? JSON.parse(localStorage.getItem("qrCourseName"))
    //     : null
    // );
    
    const [qrCourseName, setQrCourseName] = useState('')
    
    // const [qrFirstName, setQrFirstName] = useState(
    //   localStorage.getItem("qrFirstName")
    //     ? JSON.parse(localStorage.getItem("qrFirstName"))
    //     : null
    // );
    
    const [qrFirstName, setQrFirstName] = useState('')
    
    // const [qrLastName, setQrLastName] = useState(
    //   localStorage.getItem("qrLastName")
    //     ? JSON.parse(localStorage.getItem("qrLastName"))
    //     : null
    // );
    
    // const [qrStudentId, setQrStudentId] = useState(
    //   localStorage.getItem("qrStudentId")
    //     ? JSON.parse(localStorage.getItem("qrStudentId"))
    //     : null
    // );
    
    const [qrLastName, setQrLastName] = useState('');
    
    const [qrStudentId, setQrStudentId] = useState('');
    
    // const [qrAltitude, setQrAltitude] = useState(
    //   localStorage.getItem("qrAltitude")
    //     ? JSON.parse(localStorage.getItem("qrAltitude"))
    //     : null
    // );  
    
    const [qrAltitude, setQrAltitude] = useState(0);

    // const [qrTimeIn, setQrTimeIn] = useState(
    //   localStorage.getItem("qrTimeIn")
    //     ? JSON.parse(localStorage.getItem("qrTimeIn"))
    //     : null
    // );
    
    const [qrTimeIn, setQrTimeIn] = useState('')
   
    useEffect(() => {
      //   location();
      navigator.geolocation.getCurrentPosition(pos=>{
          console.log("lat1",lat1);
          console.log("lon1",lon1);
          // console.log("lat2:",lat2);
          // console.log("lon2:",lon2);
          
          setLat1(pos.coords.latitude);
          setLon1(pos.coords.longitude);
  
          distance(lat1,lat2,lon1,lon2);

          handleAttendance();

          const items = JSON.parse(localStorage.getItem('dist'));
        if(items){
          setRadius(items);
          // console.log(radius)
        }
      })
      }, [lat1,lat2,qrStudentId]);
      // console.log(qrAltitude)
      function distance(lat1,
          lat2, lon1, lon2)
  {
  
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 =  lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;
  
  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2),2);
    
  let c = 2 * Math.asin(Math.sqrt(a));
  
  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;
  // console.log("Distance",c);
  // calculate the result
  // setRadius(c*r);
  // console.log(c*r);
  const rad=c*r;
  // console.log(lat1,lon1,lat2,lon2);
  localStorage.setItem('dist',JSON.stringify(rad));
  // setRadius(r1);
  // return(c*r);
  }
    // console.log("Lat1",lat1);
    // console.log("Lon1",lon1);
    // console.log('distance',radius);
    // console.log("Lat2",lat2);
    // console.log("Long2",lon2);
    // console.log("Section",qrClassSection);
    // console.log("stid",qrStudentId);
    // console.log("coursre id",qrCourseId);
    // console.log("firstname",qrFirstName);
    // console.log("lastname",qrLastName);
    // console.log("timein",qrTimeIn);
    // console.log("coursename",qrCourseName);
    // console.log("altiitude",qrAltitude);

    //   const attendance = {
    //     "classSection": "14A",
    //     "courseId": "EE100",
    //     "courseName": "Cryptography 1",
    //     "firstName": "Syed",
    //     "lastName": "Ahmed Kamal",
    //     "studentId": "54358",
    //     "timeIn": "Sun Jan 14:02:01 GMT+05:00 2023"
    // }

    const attendance = {
      "classSection": qrClassSection,
      "courseId": qrCourseId,
      "courseName": qrCourseName,
      "firstName": qrFirstName,
      "lastName": qrLastName,
      "studentId": qrStudentId,
      "timeIn": qrTimeIn
  }
  // console.log(attendance);
  // const xyz=()=>{
  //   console.log("Lat1",lat1);
  //   console.log("Lon1",lon1);
  //   console.log('distance',radius);
  //   console.log("Lat2",lat2);
  //   console.log("Long2",lon2);
  //   console.log("Section",qrClassSection);
  //   console.log("stid",qrStudentId);
  //   console.log("coursre id",qrCourseId);
  //   console.log("firstname",qrFirstName);
  //   console.log("lastname",qrLastName);
  //   console.log("timein",qrTimeIn);
  //   console.log("coursename",qrCourseName);
  //   console.log("altiitude",qrAltitude);

  //   // window.location.reload();
  // }
    
  const handleAttendance= async()=>{

      
     if (qrStudentId){
        console.log("Post request hit");
        const res = await axios.post('https://sdok7nl5h2.execute-api.ap-northeast-1.amazonaws.com/prod/attendance',
        attendance).then((data)=>{
        }).then(()=>{
          // setStudentFullName(qrFirstName.concat(" ",qrLastName))
          console.log(attendance)
          showSuccessMessage();
          setStudentName(prev=>[...prev,qrFirstName])
        }).catch(e=>{
          showErrorMessage();
        })
      }
      else{
        console.log('qr filled null');
      }
      }
      
      const showSuccessMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const showErrorMessage = (error) => {
      toast.error("Invalid username or password", {
          position: toast.POSITION.BOTTOM_LEFT
      });
    };
  return (
    
    <div className='main'>  
        <div className='sub-main web'>
        {/* {console.log(startScan)} */}
        <div className='cam-display-container'>
        {startScan && (
            <QrReader
                
                onResult={(result, error) => {
                if (result) {
                // console.log(result)
                // setData(prev=>[...prev,result?.text])
                const parseData1 = JSON.parse(result)
               setQrAltitude(parseData1?.altitude);
               setQrClassSection(parseData1?.classSection);
               setQrCourseId(parseData1?.courseId);
               setQrCourseName(parseData1?.courseName);
               setQrFirstName(parseData1?.firstName);
               setQrLastName(parseData1?.lastName);
               setQrStudentId(parseData1?.studentId);
               setQrTimeIn(parseData1?.timeIn);
               setLat2(parseData1?.latitude);
               setLon2(parseData1?.longitude);
                // console.log(parseData1)
                // console.log(parseData1?.latitude,parseData1?.longitude);
                // localStorage.setItem('latit2',JSON.stringify(parseData1?.latitude));
                // localStorage.setItem('longi2',JSON.stringify(parseData1?.longitude));
                // localStorage.setItem('qrClassSection',JSON.stringify(parseData1?.classSection));
                // localStorage.setItem('qrCourseId',JSON.stringify(parseData1?.courseId));
                // localStorage.setItem('qrCourseName',JSON.stringify(parseData1?.courseName));
                // localStorage.setItem('qrFirstName',JSON.stringify(parseData1?.firstName));
                // localStorage.setItem('qrLastName',JSON.stringify(parseData1?.lastName));
                // localStorage.setItem('qrStudentId',JSON.stringify(parseData1?.studentId));
                // localStorage.setItem('qrTimeIn',JSON.stringify(parseData1?.timeIn));
                // localStorage.setItem('qrAltitude',JSON.stringify(parseData1?.altitude));
                console.log('qr was scanned');
                
                // setTimeout(() => {handleAttendance();}, 5000)


                // localStorage.setItem('firstName',JSON.stringify(parseData1.firstName));

                // setQrCourseName(parseData1.courseName);
              // {console.log(qrCourseName)}
              }

        // if (error) {
        //   console.info(error);
        // }
      }}
        // style={{ border:'1px solid orange' }}
        // ref={ref}
        className='cam-display'
    />
      )}           

        <div className='student-list'>
            <h3 className='student'>{studentName.map(name=>(<div>{name}</div>))}</h3>
        </div>

    </div>
    <ToastContainer/>
{/*         
        <div>
            <button className='btn'>Back</button>
            <button className='btn'>Submit</button>
        </div> */}
    </div>
        
    {/* <button
      onClick={() => {
        setStartScan(!startScan);
      }}
    >
      {startScan ? "Stop Scan" : "Start Scan"}
    </button> */}   
    {/* {console.log(startScan)} */}
        {loadingScan && <p>Loading</p>}
    {/* {data !== "" && <p>{data.map(res=>{
      <li>{res}</li>
    })}</p>} */}
    
    {/* <Distance lat2={lat2} lon2={lon2} qrAltitude={qrAltitude} 
      qrClassSection={qrClassSection} qrCourseId={qrCourseId} 
      qrCourseName={qrCourseName} qrFirstName={qrFirstName} qrLastName={qrLastName} 
      qrStudentId={qrStudentId} qrTimeIn={qrTimeIn} /> */}

   </div>

  )
}

