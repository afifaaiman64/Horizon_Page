import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from './themes';

const Navbar = ({title, subtitle}) => {
    const  theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <div className='mytitle' style={{background:'#EDF2F7', marginTop:25}}>
  
    <Box mb='30px' >
      
        <Typography variant='h6' fontFamily='lato' color='rgb(127, 137, 173)' fontWeight={700} fontSize={12}>
            {title}
        </Typography>
        <Typography variant='h3' color='#11047A' fontWeight='bold' sx={{mb: '5px'}}>
            {subtitle}
        </Typography>
        
    </Box>
    </div>
  )
}

export default Navbar

 