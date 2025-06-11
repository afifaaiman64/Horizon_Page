import React, {useEffect} from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Topbar from './Topbar';

const Sidebar = () => {
  return (
    <div> 
      <Topbar/>
    <menu>
       <h1>HORIZON <span>FREE</span></h1> 
       <nav>
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/" style={{textDecoration:'none'}}><li><HomeIcon/><h2> Dashboard</h2></li></NavLink>  
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/nftmarketplace" style={{textDecoration:'none'}}><li><ShoppingCartOutlinedIcon/><h2>NFT Marketplace</h2></li></NavLink>  
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/tables" style={{textDecoration:'none'}}><li><BarChartOutlinedIcon/><h2>Tables</h2></li></NavLink>  
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/kanban" style={{textDecoration:'none'}}><li><DashboardOutlinedIcon/><h2>Kanban</h2></li></NavLink>  
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/profile" style={{textDecoration:'none'}}><li><PersonOutlineOutlinedIcon/><h2>Profile</h2></li></NavLink>  
       <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/signin" style={{textDecoration:'none'}}><li><LockIcon/><h2>Sign In</h2></li></NavLink>  
       </nav>
       <img src='src\images\sidebarimg.png' alt='sideimg'></img>
    </menu>
    </div>
  ) }

export default Sidebar
