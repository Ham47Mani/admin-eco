import React, { Fragment } from 'react';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper';
import { colors, data } from '../constants';
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox';
import Box from '../components/box/Box';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, 
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import OverallList from '../components/ovrall-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';

ChartJs.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  return (
    <DashboardWrapper>
      {/* ------------- Start Main Dashboard Wrapper ------------- */}
      <DashboardWrapperMain>
        <div className='row'>
          {/* -------- Summary Boxs -------- */}
          <div className='col-8 col-md-12'>
            <div className='row'>
              {
                data.summary.map((item, i) => (
                  <div className='col-6 col-md-6 col-sm-12 mb' key={`summary-${i}`}>
                    <SummaryBox item={item}/>
                  </div>
                ))
              }
            </div>
          </div>
          {/* -------- Revenu -------- */}
          <div className='col-4 col-hide-md'>
            <SummaryBoxSpecial item={data.revenueSummary}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Box>
              <RevenueByMonthsChart/>
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      {/* ------------- End Main Dashboard Wrapper ------------- */}
      {/* ------------- Start Right Dashboard Wrapper ------------- */}
      <DashboardWrapperRight>
        <h4 className='title mb'>Overall</h4>
        <div className='mb'>
          <OverallList/>
        </div>
        <h5 className='title mb'>Revenue by channel</h5>
        <div className='mb'>
          <RevenueList />
        </div>
      </DashboardWrapperRight>
      {/* ------------- End Right Dashboard Wrapper ------------- */}
    </DashboardWrapper>
  );
}

export default Dashboard;

// ================== Start Revenue By Months Chars ==================
const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        grid: { display: false, drowBorder: false }
      },
      yAxis: {
        grid: { display: false, drowBorder: false }
      },
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data
      }
    ]
  }

  return (
    <Fragment>
      <h2 className='title mb'>Revenue By Months</h2>
      <div>
        <Bar options={chartOptions} data={chartData} height={`150px`}/>
      </div>
    </Fragment>
  )
}
// ================== End Revenue By Months Chars ==================
