import React from 'react';
import Box from '../box/Box';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { colors } from '../../constants';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import "./summary-box.scss";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SummaryBox = ({item}) => {

  return (
    <Box>
      <div className='summary-box'>
        <div className='summary-box__info'>
          <div className='summary-box__info__title'>
            <p>{item.title}</p>
            <span>{item.subtitle}</span>
          </div>
          <div className='summary-box__info__value'>
            {item.value}
          </div>
        </div>
        <div className='summary-box__chart'>
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: 'trensparent',
              strokeLinecap: 'round'
            })}
          >
            <div className='summary-box__chart__value'>
              {item.percent}%
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </Box>
  );
}

export default SummaryBox;

// =========== Start Summary Box Special ===========
export const SummaryBoxSpecial = ({item}) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: { display: false },
      x: { display: false },
      yAxis: { display: false },
      y: { display: false }
    },
    plugins: {
      legend: { display: false }
    },
    elements: {
      point: { radius: 0 }
    }
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: 'Revenue',
        data: item.chartData.data,
        borderColor: '#FFF',
        tension: 0.5
      }
    ]
  };

  return (
    <Box purple fullHight>
      <div className='summary-box-special'>
        <h5 className='summary-box-special__title'> {item.title} </h5>
        <p className='summary-box-special__value'> {item.value} </p>
        <div className='summary-box-special__chart'>
          <Line options={chartOptions} data={chartData} width={"250px"}/>
        </div>
      </div>
    </Box>
  )
}

// =========== End Summary Box Special ===========
