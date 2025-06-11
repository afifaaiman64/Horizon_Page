import React from 'react'
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import './Profile.css'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import UploadIcon from '@mui/icons-material/Upload';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Footerall from './Footerall'
import Grid from '@mui/material/Grid';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'left',
}));

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 340,
    height: 60,
    marginLeft: 12,
    marginTop: 10,
    border: '2px solid whitesmoke',
    borderRadius:10,
    boxShadow: '1px 8px rgb(247, 248, 250)',
    textAlign: 'center',
    padding: 10,
}));

const Pcards = (props) => {
    return (
        <div className='prcont'>
            <div className='trcont' style={{marginTop:-10}}>
                <div className='title' style={{ marginLeft: 10, marginBottom: 10, marginTop:10}}>
                    <img src='src\images\bg6.jpg' alt='bg6' style={{width:380, height:120,padding:10}}/>
                    <Avatar src="src\images\bg3.jpg" style={{ marginLeft: 160, marginTop: -40, border: '3px solid white', width: 50, height: 50 }} />
                    <h1 style={{ marginLeft: 120, marginTop: 10,fontFamily:'lato', fontWeight:700, color:'#4A5568' }}>Adela Parkson</h1>
                    <p style={{ marginLeft: 130, marginTop: -15, color: 'rgb(168, 184, 222)', fontFamily:'lato', fontSize:13 }}>Product Designer</p>
                    <h2 style={{ marginLeft: 70, marginTop: 15, fontSize:20, color:'#4A5568' }}>17 <span style={{ padding: 60 }}>9.7k</span> 247</h2>
                    <h3 style={{ marginLeft: 70, marginTop: -15, color: 'rgb(168, 184, 222)', fontFamily:'lato', fontSize:13, fontWeight:400 }}>Posts <span style={{ padding: 50 }}>Followers</span>Following</h3>
                </div>

                <div className='title2' style={{ marginLeft: -35, marginBottom: 10 , marginTop:10}}>
                    <button className='dotbut'><MoreHorizIcon/></button>
                   <h3 style={{background:'#F7FAFC', borderRadius:50, width:100, height:100, marginLeft:120, marginTop:-3}}>
                    <CloudDoneOutlinedIcon sx={{ color: 'blue', fontSize: 60, marginLeft: 2.5, marginTop: 2 }} /></h3>
                    <h2>Your Storage</h2>
                    <p>Surpervise your device space</p>
                    <p style={{ marginLeft: 130, marginTop:-10 }}>in the easy way</p>
                    <p style={{ marginLeft: 20, marginRight: 20 }}>25.6GB<span style={{ marginLeft: 210 }}>50GB</span><BorderLinearProgress variant="determinate" value={70} /></p>
                </div>

                <div className='title3' style={{ marginLeft: -35, marginBottom: 10, width:440, marginTop:10 }}>
                     <button className='f1but' style={{ marginTop: 40, background: '#F7FAFC', marginLeft: 15, width: 170,height: 240, border: 'none' }}>
                        <UploadIcon sx={{ color: 'blue', fontSize: 70 }} />
                        <h2 style={{ color: 'blue', fontFamily:'lato', fontSize:15 }}> Upload Files</h2>
                        <p style={{ color: 'rgb(168, 184, 222)', fontFamily:'lato', fontSize:10 }}>PNG, JPG and GIF files are allowed</p>  </button>
                    <h1 style={{ marginLeft: 200, marginTop: -220 ,fontWeight: 'bold' }}>Complete your profile</h1>
                    <p style={{ marginLeft: 200, fontWeight: 100, color: 'rgb(168, 184, 222)' }}>Stay on the pulse of distributed projects</p>
                    <button className='pub' style={{ marginLeft: 200, marginTop: 50, background: 'blue', width: 120, height: 40, color: 'white', borderRadius: 15, border: 'none' }}>Publish now</button>
                   
                </div>
            </div>

            <div className='trcont2' style={{marginTop:-140, fontFamily:'lato'}}>
                <div className='title4' style={{ marginLeft: 10, marginBottom: 10 }}>
                    <h1 style={{ marginLeft: 20, fontSize: 20, color:'#4A5568' }}>All Projects</h1>
                    <p style={{ marginLeft: 20, fontSize: 12, color: 'rgb(168, 184, 222)'}}>here you can find more details about your project. Keep you user engaged by providing meaningful information</p>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg1.jpg`} style={{ borderRadius: 10 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13 , color:'#4A5568'}}>Technology behind the Blockchain</h3>
                        <p style={{ marginLeft: 45, marginTop: -12, color: '#A0AEC0', fontSize: 12 }}> Project #1 <a href='#' style={{ padding: 20 }}>See project details</a>
                            <CreateRoundedIcon style={{ width: 30, marginLeft: 10, marginTop: -10 , color: '#A0AEC0'}} /></p>    </DemoPaper>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg2.jpg`} style={{ borderRadius: 10 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13, color:'#4A5568' }}>Greatest way to a good Economy</h3>
                        <p style={{ marginLeft: 45, marginTop: -12, color: '#A0AEC0', fontSize: 12 }}> Project #2 <a href='#' style={{ padding: 20 }}>See project details</a>
                            <CreateRoundedIcon style={{ width: 30, marginLeft: 10, marginTop: -10 , color: '#A0AEC0'}} /></p>    </DemoPaper>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg3.jpg`} style={{ borderRadius: 10 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13, color:'#4A5568' }}>Most essential tips for Burnout</h3>
                        <p style={{ marginLeft: 45, marginTop: -12 , color: '#A0AEC0', fontSize: 12}}> Project #3 <a href='#' style={{ padding: 20 }}>See project details</a>
                            <CreateRoundedIcon style={{ width: 30, marginLeft: 10, marginTop: -10 , color: '#A0AEC0'}} /></p>    </DemoPaper>
                </div>

                <div className='title5' style={{ marginLeft: -35, marginBottom: 10 , fontFamily:'lato'}}>
                <h1 style={{ marginLeft: 20, fontSize: 20, color:'#4A5568' }}>General Information</h1>
                <p style={{ marginLeft: 20, fontSize: 12, color:'rgb(168, 184, 222)'}}> As we live our you can find more details about your project.here you can find more details about your project. Keep you user engaged by providing meaningful information Keep you user engaged by providing meaningful information </p>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} sx={{marginLeft:2, marginRight:2}} >
                        <Grid size={6}><Item><h6 style={{ fontSize: 12, color: 'rgb(168, 184, 222)', marginTop: -10 }}>Education</h6><h5 style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color:'#4A5568' }}>Standford University</h5></Item> </Grid>
                        <Grid size={6}><Item><h6 style={{ fontSize: 12, color: 'rgb(168, 184, 222)', marginTop: -10 }}>Languages</h6><h5 style={{ marginTop: -20, fontSize: 12, marginBottom: 5 , color:'#4A5568'}}>English, Spanish, Italian</h5></Item> </Grid>
                        <Grid size={6}><Item><h6 style={{ fontSize: 12, color: 'rgb(168, 184, 222)', marginTop: -10 }}>Department</h6><h5 style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color:'#4A5568' }}>Product Design</h5></Item> </Grid>
                        <Grid size={6}><Item><h6 style={{ fontSize: 12, color: 'rgb(168, 184, 222)', marginTop: -10 }}>Work History</h6><h5 style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color:'#4A5568' }}>Google, Facebook</h5></Item> </Grid>
                        <Grid size={6}><Item><h6 style={{fontSize:12, color:'rgb(168, 184, 222)', marginTop:-10}}>Organization</h6><h5 style={{marginTop:-20, fontSize:12, marginBottom:5, color:'#4A5568'}}>Simmple Web LLC</h5></Item> </Grid>
                        <Grid size={6}><Item><h6 style={{fontSize:12, color:'rgb(168, 184, 222)', marginTop:-10}}>Birthday</h6><h5 style={{marginTop:-20, fontSize:12, marginBottom:5, color:'#4A5568'}}>20 July 1986</h5></Item> </Grid></Grid>
                </div>
                <div className='title6' style={{ marginLeft: -35, marginBottom: 10 }}>
                <h1 style={{ marginLeft: 20, fontSize: 20 }}>Notifications<button className='butdot'><MoreHorizIcon/></button></h1> 
                <FormGroup className="custom">
                 <FormControlLabel  control={<Switch defaultChecked size='small'/>} label="Item update notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Item comment notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Buyer review notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Rating reminders notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Meetups near you notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Company news notification" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="New Launches and projects" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Monthly product chsanges" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Subscribe to newsletter" />
                 <FormControlLabel control={<Switch defaultChecked size='small' />} label="Email me when someone follows me" />
                </FormGroup>
                </div>  </div>
            <Footerall /></div>
    )
}

export default Pcards