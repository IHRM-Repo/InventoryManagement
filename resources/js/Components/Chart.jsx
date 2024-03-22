import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as d3 from 'd3';
import interpolateColors from '@/utils/ColorGeneration';

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({chartItems}) => {
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
    }]
  };
    
  return(
    <div className='m-2 w-full'>
      <Doughnut data={data} />
    </div>
  )
}

export default Chart;