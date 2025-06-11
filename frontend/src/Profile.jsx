import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import Pcards from './Pcards'

const Profile = () => {
  return (
  <div>
    <div className='mytitle' style={{marginLeft:30}}>
    <Box m='10px' sx={{background:'#EDF2F7', marginRight:-27.5,marginLeft:15, marginTop:-2}}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Navbar title = "Pages/Profile" subtitle='Profile'/>
      </Box>
    </Box>  
    </div>
    <Pcards/>
    </div>
)
}

export default Profile  