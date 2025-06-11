import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import Kanbancards from './Kanbancards'

const Kanban = (props) => {
  return (
    <div className='mykan'>
    <div className='mytitle' style={{marginLeft:30}}>
    <Box m='10px' sx={{background:'#EDF2F7', marginRight:-27.5,marginLeft:15, marginTop:-2}}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Navbar title = "Pages/Kanban" subtitle='Kanban'/>
      </Box>
    </Box>
    </div>
    
      <div className='firstkancards'> 
        <Kanbancards  title="Backlog" b1="+" head="Option to 'use local/server version' feature" b2="pen" 
        para="it usually diaplays the message when you close an unsaved page when you do it on purpose, and it is getting frustrated to see this every time" 
        b3="UPDATES" head02="Add/modify your own CSS-Selectors" 
        para02="Website design the ability to add/modify your own CSS-Selectors like its done in venus" 
        b02="PENDING" head03="Shortcode for templates to display correctly"
        para03="When you save some sections as a template and then paste a shortcode to a new page the layout is broken"
        b03="ERRORS" title2="In progress" head2="General ideas to improve 'Edit' workflow"
        title3="Done" head4="Copy/Paste elements between pages"
        head04="Remove Extra DIV for each container added"
        head05="Add Figma for the library degign blocks" b4="DONE"
       />
    </div> 
    </div>

  )
}

export default Kanban