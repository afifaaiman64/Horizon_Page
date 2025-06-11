import React from 'react'
import { Box } from '@mui/material'
import './Dashboard.css'
import Navbar from './Navbar'
import Dcards from './Dcards'


const Dashboard = () => {
  return (
    <div>
    <div className='mytitle' style={{marginLeft:30}}>
    <Box m='10px' sx={{background:'#EDF2F7', marginRight:-27.5,marginLeft:15, marginTop:-2}}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Navbar title = "Pages/Dashboard" subtitle='Main Dashboard'/>
      </Box>
    </Box> 
    </div>
    <Dcards/>
    </div>
)
}

export default Dashboard