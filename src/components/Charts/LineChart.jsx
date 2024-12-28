import React from 'react'
import { ChartComponent,LineSeries,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'
import { useGlobalContext } from '../../contexts/ContextProvider'
const LineChart = () => {
  const {currentMode}=useGlobalContext()
  return (
    <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    Tooltip={{enable:true}}
    background={currentMode==="Dark"?'#33373E':'fff'}
    >
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]}/>
       <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item,index)=><SeriesDirective key={index}{...item}/> )
        }
       </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart