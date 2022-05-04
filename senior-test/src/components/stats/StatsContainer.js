import React,{useState, useEffect} from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Chart from './Chart'
import './stats.css'
import getPercentage from '../../services/getPercentage';

export default function StatsContainer() {

    const [chart,setChart] = useState([{
        x: 5,
        y:5
    },
{
    x: 5,
    y:5
},
{
    x: 3,
    y:7
}
,
{
    x: 8,
    y:1
},
{
    x: 9,
    y:1
},
{
    x: 6,
    y:4
},
{
    x: 3,
    y:7
}
])

const [totals, setTotals] = useState({})

useEffect(() => {
    
   

  return () => {
    const xSum =  Math.trunc(getPercentage(chart.reduce((a,b) => a + b.x, 0), chart.length * 10))
    const ySum = Math.trunc(getPercentage(chart.reduce((a,b) => a + b.y, 0), chart.length * 10))

    setTotals({
        xSum, ySum
    })
  }
}, [chart])

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
                      <div className='total-chart d-flex'>
                         <div className='m-r-4 radius-8 neutral-bg-color total-chart-element'>
                             <div className='primary-chart-color radius-8'
                             style={{width: `${totals && totals.xSum}%`}}
                             ></div>
                           

                         </div>
                         <div className='m-r-4 radius-8 neutral-bg-color total-chart-element'>
                         <div className='secondary-chart-color radius-8'
                         style={{width: `${totals && totals.ySum}%`}}
                         ></div>
                         </div>
                      </div>
                   </div>
        
               </div>
           </div>

           <div className='chart-container secondary-bg-color d-flex align-items-center flex-wrap  radius-8 box-shadow justify-content-between m-t-24'>
               <div>
                   <Chart chart={chart} />
               </div>
               <div>
                   <p>Similarity Measures</p>
                   <p>between molecules</p>
                   <div className=' d-flex align-items-center'>
                      <p className='heading-3  text-primary-dark m-r-8'>125%</p>
                      <div>
                          <p className='text-info-color'><ArrowDropUpIcon  style={{ marginBottom: "-7px", marginRight: "-5px" }}/>  10%</p>
                      </div>
                   </div>
               </div>

           </div>
        </div>
    </div>
  )
}
