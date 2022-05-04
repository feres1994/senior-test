import React from 'react'
import getPercentage from '../../services/getPercentage'

export default function Chart({chart}) {
  return (
    <div>

        <div className='chart-element-container d-flex'>
          {
              chart.map(el => <div className='chart-element m-r-8'>
              <div className='radius-8 element secondary-chart-color' style={{height: `${getPercentage(el.y,10)}%`}}></div>
              <div className='radius-8 element primary-chart-color' style={{height: `${getPercentage(el.x,10)}%`}}></div>
          </div>)
          }
        </div>
    </div>
  )
}
