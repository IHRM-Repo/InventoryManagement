import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as d3 from 'd3';
import interpolateColors from '@/utils/ColorGeneration';

ChartJS.register(ArcElement, Tooltip );


const Chart = ({chartItems , title, chartType}) => {
  const colorScale = d3.interpolateRainbow;
  const colorRangeInfo = {
    colorStart: 0,
    colorEnd: 1,
    useEndAsStart: false,
  }; 
  const dataLength = Object.keys(chartItems).length;

  const colors = interpolateColors(dataLength, colorScale, colorRangeInfo);

  
  
  const data = {
    labels: chartItems.map(c => c.type),
    datasets: [{
      label: 'No. of Items',
      data: chartItems.map(c => c.total),
      backgroundColor: colors,
      hoverOffset: 4
    }],
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'right',
          align: 'start'
        }
      }
    }
  };

  
  return(
    <div className='bg-white rounded-md p-8 m-2 md:w-1/2'>
      <h3 className='text-center p-4'>{title}</h3>
      {
        chartType === 'Doughnut' ?
          <Doughnut data={data} /> :
          'No data to display'
      }
    </div>
  )
}

export default Chart;