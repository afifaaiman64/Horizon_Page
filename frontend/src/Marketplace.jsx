import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import Nftcards from './Nftcards' 

const Marketplace = (props) => {
  return (
    <div className='mynft'>
    <div className='mytitle' style={{marginLeft:30}}>
    <Box m='10px' sx={{background:'#EDF2F7', marginRight:-27.5,marginLeft:15, marginTop:-2}}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Navbar title = "Pages/NFT Marketplace" subtitle='NFT Marketplace'/>
      </Box>
    </Box> 
    </div>
    
      <div className='firstcards'>
        <Nftcards title="Discover, collect, and sell extraordinary NFTs" description="Enter in this creative world. Discover now the latest NFTs or start creating your own!" 
        but1="Discover now" but2="Watch video" subhead="Abstract Colors" des="By Esthera Jackson" 
        val="Current Bid:0.91ETH" butt01="Place Bid" subhead2="ETH AI Brain" des2="By Nick Wilson" 
        val2="Current Bid:2.82ETH" butt012="Place Bid" subhead3="Mesh Gradients" des3="By Will smith" 
        val3="Current Bid:0.56ETH" butt013="Place Bid" subhead4="Swipe Circles" des4="By Peter Will" 
        val4="Current Bid:2.30ETH" butt04="Place Bid" subhead5="Colorful Heaven" des5="By Mark Benjamin" 
        val5="Current Bid:1.30ETH" butt015="Place Bid" subhead6="3D Cubes Art" des6="By Manny Gates" 
        val6="Current Bid:6.58ETH" butt016="Place Bid"/>
    </div> 
    </div>

)
}

export default Marketplace