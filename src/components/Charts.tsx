import React from 'react'
import WorldDataChart from './WorldDataCharts'
import CountryDataChart from './CountryDataChart'
import HistoricalDataChart from './DateWiseData'

const Charts = () => {
  return (
    <div className='w-[85%]'>
        <WorldDataChart />
        <CountryDataChart country='India' />
        <HistoricalDataChart />
    </div>
  )
}

export default Charts