import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
import interpolateColors from '@/utils/ColorGeneration';
import { Doughnut } from 'react-chartjs-2';
import * as d3 from 'd3';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale , LineElement, PointElement);


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
    labels: chartItems.map(c => c.category_name),
    datasets: [{
      label: 'No. of Items',
      data: chartItems.map(c => c.quantity),
      backgroundColor: colors,
      hoverOffset: 4
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: {title},
      },
    },
  }; 
  
  return(
    <div className='bg-white rounded-md p-8 m-2 md:w-1/2'>
      <h3 className='text-center p-4'>{title}</h3>
      {
        chartType === 'Doughnut' ?
          <Doughnut data={data} options={options} /> :
          'No data to display'
      }
    </div>
  )
}

export default Chart;