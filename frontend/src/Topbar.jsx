import React from 'react'
import './Topbar.css'
import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from 'react'
import { ColorModeContext, tokens } from './themes'
import InputBase from '@mui/material/InputBase'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
      
            <div className='topmenu'>
                <Box display='flex' justifyContent="space-between" p={2}>
                    <div className='searchmenu' bgcolor={colors.primary[400]}>
                        <IconButton type='button' sx={{ p: 1 }}> <SearchIcon style={{color:'black'}} /> </IconButton>
                        <InputBase sx={{fontFamily:'lato', fontSize:15, fontWeight:700}} placeholder="Search" color='rgb(127, 137, 173)'  />    
                    </div>
                    {/*for icons */}
                    <Box display='flex'>
                        <IconButton>
                            <NotificationsOutlinedIcon style={{color:'rgb(127, 137, 173)'}}/>
                        </IconButton>
                        <IconButton onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (
                                <DarkModeIcon style={{color:'rgb(127, 137, 173)'}}/>
                            ) : (

                                <DarkModeIcon style={{color:'rgb(127, 137, 173)'}}/>)}
                        </IconButton>

                        <IconButton>
                            <InfoOutlinedIcon style={{color:'rgb(127, 137, 173)'}} />
                        </IconButton>
                        <IconButton>
                             <Avatar src="src/images/bg1.jpg" sx={{ width: 30, height: 30 }} />
                        </IconButton>
                    </Box>

                </Box>    </div>
    )
}

export default Topbar