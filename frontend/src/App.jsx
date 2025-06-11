import React from 'react'
import { ColorModeContext, useMode } from './themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import SignIn from './SignIn'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Tables from './Tables'
import Marketplace from './Marketplace'
import Sidebar from './Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Kanban from './Kanban'


function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element:<><Sidebar/><Dashboard/></>
    },
    {
      path: "/nftmarketplace",
      element:<><Sidebar/><Marketplace/></>
    },
    {
      path: "/tables",
      element:<><Sidebar/><Tables/></>
    },
    {
      path: "/kanban",
      element:<><Sidebar/><Kanban/></>
    },
    {
      path: "/profile",
      element:<><Sidebar/><Profile/></>
    },
    {
      path: "/signin",
      element:<><SignIn/></>
    },
  ])
  
  const [theme, colorMode]  = useMode();

  return (
    <>
    
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
  
    </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
