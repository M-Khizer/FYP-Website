  import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function Distance({lat2,lon2,qrAltitude,qrClassSection,qrCourseId,
  qrCourseName,qrFirstName,qrLastName,qrStudentId,qrTimeIn}) {

    let [lat1,setLat1]=useState();
    let [lon1,setLon1]=useState();
    const [radius,setRadius]=useState();

    console.log("lat2:",lat2);
    console.log("lon2:",lon2); console.log("Lat2",lat2);
    console.log("Long2",lon2);
    console.log("Section",qrClassSection);
    console.log("stid",qrStudentId);
    console.log("coursre id",qrCourseId);
    console.log("firstname",qrFirstName);
    console.log("lastname",qrLastName);
    console.log("timein",qrTimeIn);
    console.log("coursename",qrCourseName);
    console.log("altiitude",qrAltitude);

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
        
        const items = JSON.parse(localStorage.getItem('dist'));
      if(items){
        setRadius(items);
      }
    })
    }, [lat1]);
    
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
console.log(rad);
localStorage.setItem('dist',JSON.stringify(rad));
// setRadius(r1);
// return(c*r);
}
// setRadius(distance(lat1,lat2, lon1, lon2))
console.log(radius)
// console.log(distance(lat1,lat2, lon1, lon2))
// localStorage.getItem()
// console.log("radius",radius)

    // const location = ()=>{
    // }
  return (
    <div>
        {/* <div>{lat1}</div> */}
        {/* <div>{lon1}</div> */}
    </div>
  )
}
