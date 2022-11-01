import React from 'react'
import { useState,useRef } from "react";
import {QrReader} from "react-qr-reader";

export default function Webcam({startScan}) {
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState('');
    const ref= useRef(null)
  return (
    
    <div className='main'>
        <div className='sub-main'>
        {/* {console.log(startScan)} */}
        <div className='cam-display-container'>
        {!startScan && (
            <QrReader
                onResult={(result, error) => {
                if (result) {
                console.log(result)
                setData(result?.text);
        }
        if (error) {
          console.info(error);
        }
      }}
        style={{ border:'1px solid orange' }}
        ref={ref}
        className='cam-display'
    />
      )}           

        <div className='student-list'>
        </div>
            <h1>{data}</h1>
        </div>
        
        <div>
            <button className='btn'>Back</button>
            <button className='btn'>Submit</button>
        </div>
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
    <h1>{data}</h1>
    

   </div>

  )
}

