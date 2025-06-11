import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piedash = () => {
const [pieData, setPieData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/storage')
      .then(res =>{
        const {system, user, free } = res.data;
      
        const data = {
          labels:[],
          datasets: [
            {
              data: [ system, user, free],
              backgroundColor: ['blue','teal','rgba(249, 242, 242, 0.932'],
              borderWidth: 1,
            }
          ] };
          setPieData(data);
  })
  .catch(err => {
    console.error('Error fetching data:', err);
   }); }, []);

   if (!pieData || !pieData.labels || !pieData.datasets) {
    return <div>Loading pie data...</div>;
  }

  return (
     <div style={{width:300, height:120, marginLeft:20}}>
        <Pie data={pieData} />
      </div>
  )
}

export default Piedash
