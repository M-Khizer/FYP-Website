
import React, { useState } from 'react'

export default function Dashboard({startScan,setStartScan,nav}) {

console.log(startScan)
const handleWebcam=()=>{
    setStartScan(true);
    nav('/webcam');
}
  return (
    <div className='main'>
        <div className='sub-main'>

            <h1 className='heading dashboard-heading'>Dashboard</h1>
            
            <div className='boxes'>
                
                <button className='box-container'>
                    <div className='dashboard-sub-head' 
                        onClick={handleWebcam}
                       
                        >Create new attendance</div>
                    <div className='dashboard-btn'>Create</div>
                </button>

                <button className='box-container'>
                    <div className='dashboard-sub-head'>View previous attendance</div>
                    <div className='dashboard-btn'>View</div>
                </button>

            </div>
            

        </div>
    </div>
  )
}
