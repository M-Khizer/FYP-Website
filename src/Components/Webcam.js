import React from 'react'
import { useState,useRef } from "react";
import {QrReader} from "react-qr-reader";
import Distance from './distance';

// import { json } from 'react-router-dom';

export default function Webcam({startScan}) {
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState([]);
    const ref= useRef(null)

    // const lo2 =  JSON.parse(localStorage.getItem('longi2'));
    // const la2 = JSON.parse(localStorage.getItem('latit2'));
    // console.log(lo2,la2);
    
    const [lat2, setLat2] = useState(
      localStorage.getItem("latit2")
        ? JSON.parse(localStorage.getItem("latit2"))
        : null
    );
    const [lon2, setLon2] = useState(
      localStorage.getItem("longi2")
        ? JSON.parse(localStorage.getItem("longi2"))
        : null
    );

    console.log("Lat2",lat2);
    console.log("Long2",lon2);
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
                console.log(parseData1.latitude,parseData1.longitude);
                localStorage.setItem('latit2',JSON.stringify(parseData1.latitude));
                localStorage.setItem('longi2',JSON.stringify(parseData1.longitude));
                
              
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
            <h3 className='student'>{data}</h3>
        </div>

    </div>
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
    
    <Distance lat2={lat2} lon2={lon2}/>

   </div>

  )
}

