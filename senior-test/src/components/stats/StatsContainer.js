import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './stats.css'

export default function StatsContainer() {
  return (
    <div className=' vh-100 d-flex justify-content-center align-items-center primary-font text-primary-light p-base-medium'>
        <div className='stats-container primary-bg-color padding-16 radius-8'>
           <div className='stats-box-header d-flex align-items-center'>
               <div className='icon-container secondary-bg-color radius-8 d-flex align-items-center justify-content-center box-shadow m-r-8' >
                   <PersonOutlineOutlinedIcon style={{ color: "blue" }}/>
               </div>
               <div className='big-number-container d-flex flex-column'>
                   <p>Adverse effect & contraindications</p>
                   <div className='big-number-chart  d-flex'>
                      <p className='heading-3  text-primary-dark m-r-8'>562</p>
                      <div>
                          chart
                      </div>
                   </div>
        
               </div>
           </div>

           <div className='chart-container secondary-bg-color d-flex align-items-center flex-wrap  radius-8 box-shadow justify-content-between m-t-24'>
               <div>
                   chart
               </div>
               <div>
                   <p>Similarity Measures</p>
                   <p>between molecules</p>
                   <div className=' d-flex align-items-center'>
                      <p className='heading-3  text-primary-dark m-r-8'>125%</p>
                      <div>
                          <p className='text-info-color'><ArrowDropUpIcon  style={{ marginBotom: "-7px", marginRight: "-5px" }}/>  10%</p>
                      </div>
                   </div>
               </div>

           </div>
        </div>
    </div>
  )
}
