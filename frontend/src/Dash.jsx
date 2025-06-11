import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dash = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/weekly-revenue')
      .then(res => res.json())
      .then(data => {
        const labels = data.map(item => `Week ${item._id.week}`);
        const values = data.map(item => item.totalRevenue);
  
        setChartData({
          labels,
          datasets: [
            {
              label: 'Weekly Revenue',
              data: values,
              backgroundColor: 'red'
            }
          ]
        });
      });
  }, []);
  

  return (
    <div style={{width:500, height:200, marginLeft:40}}>
    <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: true }}}} />
  </div>
  );
};

export default Dash

