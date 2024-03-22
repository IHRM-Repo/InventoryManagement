import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({chartItems}) => {
  const colors = []
  const generateColors = () => {
    for(let i=0;i<Object.keys(chartItems).length;i++)
    {
      colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
  }
generateColors()

console.log(Object.keys(chartItems).length)
    const data = {
        labels: Object.keys(chartItems),
        datasets: [{
          label: 'No. of Items',
          data: Object.values(chartItems),
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