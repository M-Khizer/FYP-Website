import React from 'react'
import { useState,useRef } from "react";
import {QrReader} from "react-qr-reader";

export default function Webcam({startScan}) {
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState([]);
    const ref= useRef(null)
  return (
    
    <div className='main'>
        <div className='sub-main web'>
        {/* {console.log(startScan)} */}
        <div className='cam-display-container'>
        {!startScan && (
            <QrReader
                onResult={(result, error) => {
                if (result) {
                // console.log(result)
                // setData(prev=>[...prev,result?.text])
                setData(result?.text);
        }
        // if (error) {
        //   console.info(error);
        // }
      }}
        // style={{ border:'1px solid orange' }}
        ref={ref}
        className='cam-display'
    />
      )}           

        <div className='student-list'>
            <h3 className='student'>{data}</h3>
            {/* {data && data.map(result=><h3>{result?.text}</h3>)} */}
            {/* {console.log(data)} */}
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
    

   </div>

  )
}

