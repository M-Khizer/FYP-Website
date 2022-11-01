
import React, { useState } from 'react'

export default function Dashboard({startScan,setStartScan}) {

console.log(startScan)
  return (
    <div className='main'>
        <div className='sub-main'>

            <h1 className='heading dashboard-heading'>Dashboard</h1>
            
            <div className='boxes'>
                
                <button className='box-container'>
                    <div className='dashboard-sub-head' 
                        onClick={()=>{setStartScan(!startScan)}}>Create new attendance</div>
                    <div className='dashboard-btn'>></div>
                </button>

                <button className='box-container'>
                    <div className='dashboard-sub-head'>View previous attendance</div>
                    <div className='dashboard-btn'>></div>
                </button>

            </div>
            

        </div>
    </div>
  )
}
