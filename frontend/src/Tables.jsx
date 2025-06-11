import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar' 
import Tables1 from './Tables1'

const Tables = () => {
  return (
    <div className='mtab'>
      <div className='mytitle' style={{marginLeft:30}}>
    <Box m='10px'  sx={{background:'#EDF2F7', marginRight:-27.5,marginLeft:15, marginTop:-2}}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Navbar title = "Pages / Table" subtitle='Tables'/>
      </Box>
    </Box> 
    </div>
    <Tables1/>
    
    </div>
  )
}
 
export default Tables
