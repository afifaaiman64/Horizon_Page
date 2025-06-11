import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-part'>
        <h2 className='footer-title' style={{marginLeft:-90, marginTop:-10, color:'rgb(168, 184, 222)', fontWeight:600}}>@ 2022 Horizon UI All Rights Reserved Made with love by Simmmple!</h2>
        <li style={{marginLeft:340, marginTop:-10}}>
        <a href='#' style={{color:'white'}}>Marketplace</a>
        <a href='#' style={{color:'white'}}>Licence</a>
        <a href='#' style={{color:'white'}}>Terms of use</a>
        <a href='#' style={{color:'white'}}>Blog</a></li>
    </div>
  )
}

export default Footer
