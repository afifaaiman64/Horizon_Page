import React from 'react'
import Footerall from './Footerall'
import Dash from './Dash';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { LineChart } from '@mui/x-charts/LineChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import { red, yellow } from '@mui/material/colors';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import FormControl from '@mui/material/FormControl';
import { BarChart } from '@mui/x-charts/BarChart';
import Piedash from './Piedash'; 
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

function createData(name, title2, title3, title4, title5) {
    return { name, title2, title3, title4, title5 };
}
function createData3(name11, title12, title13, title14, title15) {
    return { name11, title12, title13, title14, title15 };
}

const rows = [
    createData('Marketplace', '17.5%', 2.456, '24.Jan.2021'),
    createData('Venus PRO', '17.5%', 2.456, '24.Jan.2021'),
    createData('Uranus Kit', '17.5%', 2.456, '24.Jan.2021'),
    createData('Venus DS', '31.5%', 858, '7.Jun.20121'),
    createData('Venus 3d Asset', '12.2%', 258, '17.Dec.20121'),
    createData('Venus 3d Asset', '12.2%', 258, '17.Dec.20121'),
    createData('Venus 3d Asset', '12.2%', 258, '17.Dec.20121'),
    createData('Venus 3d Asset', '12.2%', 258, '17.Dec.20121'),
];
const rows3 = [
    createData3('Marketplace', <h4><CheckCircleIcon color="success" />Approved</h4>, '24.Jan.2021', <BorderLinearProgress variant='determinate' value={80} />),
    createData3('Venus PRO', <h4><CancelIcon sx={{ color: red[500] }} />Disable</h4>, '24.Jan.2021', <BorderLinearProgress variant='determinate' value={30} />),
    createData3('Uranus Kit', <h4><ErrorIcon sx={{ color: yellow[500] }} />Error</h4>, '24.Jan.2021', <BorderLinearProgress variant='determinate' value={80} />),
    createData3('Venus DS', <h4><CheckCircleIcon color="success" />Approved</h4>, '7.Jun.20121', <BorderLinearProgress variant='determinate' value={50} />),
];

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 250,
    height: 60,
    marginLeft: 12,
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
}));

const Dcards = (props) => {
    const [country, setCountry] = React.useState('');
    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    
const [month, setMonth] = React.useState('');

const handleChange2 = (event) => {
    setMonth(event.target.value);
};
    return (
        <div className='mydcont' style={{ background: '#EDF2F7', marginTop: -10, marginLeft: -30, fontFamily:'lato' }}>
            <div className='dcont'>
                <div className='title' style={{ marginLeft: 40}}>
                    <BarChartOutlinedIcon style={{ color: 'blue', marginTop: 15, borderRadius: 40, background: '#EDF2F7', marginLeft: 10, width: 40, height: 40, padding:6}} />
                    <h4 style={{ marginLeft: 70, marginTop: -45, color:'#A0AEC0', fontWeight:500 }}>Earnings</h4>
                    <h2 style={{ marginLeft: 70, marginTop: -15 }}>$350.4</h2>
                </div>

                <div className='title2' style={{ marginLeft: 10}}>
                    <AttachMoneyIcon style={{ color: 'blue', marginTop: 15, borderRadius: 50, background: '#EDF2F7', marginLeft: 10, width: 50, height: 40, padding:6 }} />
                    <h4 style={{ marginLeft: 80, marginTop: -45, color: '#A0AEC0', fontWeight:500}}>Spend this month</h4>
                    <h2 style={{ marginLeft: 80, marginTop: -15 }}>$642.39</h2>
                </div>

                <div className='title3' style={{ marginLeft: 10 }}>
                    <h4 style={{ marginLeft: 20, marginTop: 10, color:'#A0AEC0', fontWeight:500 }}>Sales</h4>
                    <h1 style={{ marginLeft: 20, marginTop: -20, fontSize: 19 }}>$574.39</h1>
                    <h1 style={{ marginLeft: 20, marginTop: -15, color: 'green', fontSize: 11 }}>+23% <span style={{ color: '#A0AEC0', padding:4}}>Since last month</span></h1>
                </div>

                <div className='title4' style={{ marginLeft: 10}}>
                    <h4 style={{ marginLeft: 20, marginTop: 15, color:'#A0AEC0', fontWeight:500 }}>Your balance</h4>
                    <h2 style={{ marginLeft: 20, marginTop: -15 }}>$1,000
                    <FormControl sx={{ m: 1, minWidth: 40, marginLeft:12, marginTop:-8}}>
                        <Select value={country} onChange={handleChange}>
                        <MenuItem value={10}><img src='src\images\bg1.jpg' style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -10 }} /></MenuItem>
                            <MenuItem value={20}><img src='src\images\bg2.jpg' style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -10 }} /></MenuItem>
                            <MenuItem value={30}><img src='src\images\bg3.jpg' style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -10 }} /></MenuItem> </Select> </FormControl></h2>
                   
                </div>

                <div className='title5' style={{ marginLeft: 10 }}>
                    <AddTaskIcon style={{ color: 'white', marginTop: 10, borderRadius: 40,  background:'linear-gradient(to right,  rgb(21, 130, 198), rgb(59, 75, 245))', marginLeft: 10, width: 50, height: 50, padding:10}} />
                    <h4 style={{ marginLeft: 70, marginTop: -55, color:'#A0AEC0', fontWeight:500 }}>New Tasks</h4>
                    <h2 style={{ marginLeft: 70, marginTop: -15 }}>154</h2>
                </div>
                <div className='title6' style={{ marginLeft: 10, marginBottom: 10 }}>
                    <FileCopyIcon style={{ color: 'blue', marginTop: 10, borderRadius: 40, background: '#EDF2F7', marginLeft: 10, width: 50, height: 50,padding:10 }} />
                    <h4 style={{ marginLeft: 80, marginTop: -55, color:'#A0AEC0', fontWeight:500}}>Total Projects</h4>
                    <h2 style={{ marginLeft: 80, marginTop: -15 }}>2935</h2>
                </div>
            </div>
            <div className='dcont2'>
                <div className='title7' style={{marginTop: 20}}>
                    <button style={{ marginLeft: 20, marginTop: 10, background: '#EDF2F7', border: 'none', padding: 15, color: '#A0AEC0', borderRadius:10, width: 120, height: 40}}>
                        <CalendarTodayIcon sx={{marginTop:-10}}/> This month </button>
                   <BarChartOutlinedIcon style={{ color: 'blue',borderRadius: 40, background: '#EDF2F7', marginLeft: 390, width: 35, height: 35, padding:8,marginTop:8}} />

                    <LineChart sx={{ marginLeft: 10, marginTop: 1 }}
                        xAxis={[{ scaleType: 'point', data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
                        series={[
                            {
                                type: 'line',
                                data: [70, 43, 85, 55, 45, 94, 81, 98],
                                showMark: ({ index }) => index % 2 === 0,
                            },
                            {
                                type: 'line',
                                data: [55, 27, 39, 49, 29, 69, 46, 82],
                                showMark: ({ index }) => index % 2 === 0,
                            },
                        ]} width={400} height={200} />
                    <h1 style={{ marginLeft: 20, marginTop: -170 }}>$37.5k</h1>
                    <h5 style={{ marginLeft: 20, color:'#A0AEC0', marginTop: -20 }}>Total spent <span style={{ color: 'green', marginLeft: 10 }}>+2.46%</span></h5>

                    <h3 style={{ marginLeft: 20, color: 'green' }}><CheckCircleIcon style={{ color: 'green'}} /> On track</h3>
                </div>
                <div className='title8' style={{ marginLeft: 10, marginTop:20 }}>
                    <h1 style={{ fontSize: 20, marginTop:-10, marginLeft: 18 }}>Weekly Revenue 
                    <BarChartOutlinedIcon style={{ color: 'blue',borderRadius: 40, background: '#EDF2F7', marginLeft: 360, width: 35, height: 35, padding:8,marginTop:15}} /></h1>
                    <Dash/>
                </div>
            </div>
            <div className='dcont3'>
                <div className='title9' style={{marginTop: 25}}>
                    <TableContainer component={Paper} sx={{height: 260, scrollbarWidth: 'none',borderRadius:4 }}>
                        <Table size='small'sx={{ '& .MuiTableCell-root': {padding: '.01px 25px',fontSize: '0.75rem', lineHeight: 0.01,borderBottomColor:'white'},
          '& .MuiTableRow-root': {height: 24,},}}>
                            <TableHead>
                                <h2 style={{ marginLeft: 20 }}>Check Table</h2>
                                <TableRow>
                                    <TableCell align="left" sx={{ width: 175 }}>Title
                                        <IconButton size="small">
                                            <KeyboardArrowDownIcon /></IconButton> </TableCell>
                                    <TableCell align="left">Title
                                        <IconButton aria-label="expand row" size="small">
                                            <KeyboardArrowDownIcon /> </IconButton> </TableCell>
                                    <TableCell align="left">Title
                                        <IconButton aria-label="expand row" size="small">
                                            <KeyboardArrowDownIcon /> </IconButton></TableCell>
                                    <TableCell align="left">Title
                                        <IconButton aria-label="expand row" size="small">
                                            <KeyboardArrowDownIcon /></IconButton></TableCell>   </TableRow></TableHead> <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} >
                                        <TableCell><Checkbox />{row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.title2}</TableCell>
                                        <TableCell align="left">{row.title3}</TableCell>
                                        <TableCell align="left">{row.title4}</TableCell>
                                        <TableCell align="left">{row.title5}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody> </Table> </TableContainer> </div>
                <div className='title10' style={{ marginLeft: 10, marginTop:25}}>
                    <p style={{marginLeft:10, color:'#A0AEC0'}}>Daily Traffic <span style={{color:'green',marginLeft:160, fontSize:12}}>+2.45%</span></p>
                    <h2 style={{marginLeft:10, fontSize:25,marginTop:-10}}>2.579 <span style={{fontSize:12, color:'#A0AEC0'}}>Visitors</span></h2>
                <BarChart sx={{marginLeft:-5, marginTop:-2}} series={[ 
        { data: [15, 10, 15, 18, 14, 10, 15, 7], stack: 'A', color:'blue'}, ]} 
        width={320} height={190}/>
                </div>
                <div className='title11' style={{ marginLeft: 10, marginTop:25 }}>
                    <h2 style={{ fontSize: 15, marginLeft: 15, marginTop:15 }}>Your Pie chart
                    <FormControl sx={{ m: 1, minWidth: 85,marginLeft:10, marginTop:-1}}>
                        <InputLabel>Monthly</InputLabel>
                        <Select value={month} onChange={handleChange2}>
                            <MenuItem value={1}>Monthly</MenuItem>
                            <MenuItem value={2}>Weekly</MenuItem>
                            <MenuItem value={3}>Daily</MenuItem> </Select> </FormControl></h2>
               <Piedash/>
                    <h5 style={{marginLeft:50, color:'blue', fontSize:15,marginTop:5}}>Your files <span style={{marginLeft:40, color:'teal'}}>System</span></h5>
                    <h4 style={{marginLeft:60,marginTop:-20, fontSize:15, fontWeight:'bold'}}>30% <span style={{marginLeft:75}}>50%</span></h4>
                    
                </div></div>

            <div className='dcont4'>
                <div className='title12' style={{ marginTop:25}}>
                    <TableContainer component={Paper} sx={{height: 280, scrollbarWidth: 'none',borderRadius:4  }}>
                        <Table size='small'sx={{'& .MuiTableCell-root': {padding: '.01px 25px',fontSize: '0.75rem',lineHeight: 0.1,borderBottomColor:'white'},
          '& .MuiTableRow-root': {height: 24,},}}>
                            <TableHead>
                                <h2 style={{ marginLeft: 20, width: 150 }}>Complex Table</h2>
                                <TableRow>  <TableCell align="left" sx={{ width: 120 }}>Title
                                    <IconButton size="small"><KeyboardArrowDownIcon /></IconButton></TableCell>
                                    <TableCell align="left">Title<IconButton aria-label="expand row" size="small">
                                        <KeyboardArrowDownIcon /></IconButton></TableCell>
                                    <TableCell align="left">Title <IconButton aria-label="expand row" size="small">
                                        <KeyboardArrowDownIcon /></IconButton></TableCell>
                                    <TableCell align="left">Title <IconButton aria-label="expand row" size="small">
                                        <KeyboardArrowDownIcon /></IconButton> </TableCell></TableRow> </TableHead> <TableBody>
                                {rows3.map((row3) => (
                                    <TableRow key={row3.name11} ><TableCell>{row3.name11} </TableCell>
                                        <TableCell align="left">{row3.title12}</TableCell>
                                        <TableCell align="left">{row3.title13}</TableCell>
                                        <TableCell align="left">{row3.title14}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody> </Table> </TableContainer>
                </div>
                <div className='title13' style={{ marginLeft: 10, marginTop:25}}>
                    <h1 style={{ marginLeft: 10, fontSize: 20 }}><Checkbox defaultChecked style={{ color: 'blue' }} />Tasks<button className='dotbut'><MoreHorizIcon/></button></h1>
                    <FormGroup sx={{ marginLeft: 3}}>
                        <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'blue' }} />} label="Item update notification" />
                        <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'blue' }} />} label="Item comment notification" />
                        <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'blue' }} />} label="Buyer review notification" />
                        <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'blue' }} />} label="Rating reminders notification" />
                        <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'blue' }} />} label="Meetups near you notification" />
                    </FormGroup>
                </div>
                <div className='title14' style={{ marginLeft: 10, marginTop:25}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar sx={{ color: 'blue',height:280,width:280 }} />
                    </LocalizationProvider>
                </div></div>

            <div className='dcont5'>
                <div className='title15' style={{marginTop:25}}>
                    <Avatar src={`src/images/bg6.jpg`} style={{ borderRadius: 10, marginLeft: 15, marginTop: 15 }} />
                    <p style={{ marginLeft: 70, marginTop: -40, color: '#A0AEC0' }}> Business Design</p>
                    <h3 style={{ marginTop: -10, fontSize: 13, marginLeft: 70 }}>New lesson is available</h3>
                    <h1 style={{ fontSize: 15, marginLeft: 20, marginTop: 20 }}>What do you need to know to create better products?</h1>
                    <p style={{ fontSize: 12, fontWeight: 'bold'}}><TimerOutlinedIcon style={{ color: 'green', marginLeft: 20, marginTop: 10 }} />
                        85mins <SlowMotionVideoOutlinedIcon style={{ color: 'red', marginLeft: 30 }} />Video format </p>
                         <AvatarGroup max={5} total={10} spacing={14} sx={{marginRight:25,marginTop:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg"/>
              <Avatar src="src/images/bg6.jpg"/>
              <Avatar src="src/images/bg6.jpg"/>
            </AvatarGroup>
                    <button style={{ width: 120, height: 40, background: 'blue', color: 'white', border: 'none', borderRadius: 15, marginLeft: 150, marginTop: -10 }}>
                        Get Started</button>
                </div>
                <div className='title16' style={{ marginLeft: 10, marginTop:25}}>
                    <h1 style={{ marginLeft: 10, fontSize: 20 }}>Team Members <AddCircleIcon style={{ color: 'blue', marginLeft: 70 }} /></h1>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg1.jpg`} style={{ borderRadius: 50 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13, marginLeft: -30 }}>Adela Parkson</h3>
                        <p style={{ marginLeft: 50, marginTop: -12, color: '#A0AEC0'}}> Creative Director
                            <MoreVertIcon style={{ width: 30, marginLeft: 40, marginTop: -10 }} /></p>    </DemoPaper>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg2.jpg`} style={{ borderRadius: 50 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13, marginLeft: -30 }}>Christian MAd</h3>
                        <p style={{ marginLeft: 54, marginTop: -12, color: '#A0AEC0' }}> Product Designer
                            <MoreVertIcon style={{ width: 30, marginLeft: 40, marginTop: -10 }} /></p>    </DemoPaper>
                    <DemoPaper square={false}>
                        <Avatar src={`src/images/bg3.jpg`} style={{ borderRadius: 50 }} />
                        <h3 style={{ marginTop: -40, fontSize: 13, marginLeft: -30 }}>Jason Statham</h3>
                        <p style={{ marginLeft: 50, marginTop: -12, color: '#A0AEC0' }}> Junoir Graphic Designer
                            <MoreVertIcon style={{ width: 30, marginLeft: 1, marginTop: -10 }} /></p>    </DemoPaper>
                </div>
                <div className='title17' style={{ marginLeft: 10, marginTop:25 }}>
                    <FingerprintIcon style={{ color: 'blue', marginLeft: 20, marginTop: 20, fontSize: 80 }} />
                    <h1 style={{ marginLeft: 15, fontSize: 20, marginTop: 5 }}>Control card security in-app with a tap</h1>
                    <p style={{ marginLeft: 15, color:'#A0AEC0' }}>Discover our cards benefits with one tap</p>
                    <button style={{ width: 240, marginLeft: 15, height: 35, background: 'blue', color: 'white', border: 'none', borderRadius: 10 }}> Cards</button>
                </div>
                <div className='title18' style={{ marginLeft: 10, marginTop:25}}>
                   <img src='src\images\bg4.jpg' alt='' width={280} height={150}/><AccessTimeIcon className='icon'/>
                    <Avatar src="src\images\bg3.jpg" style={{ marginLeft: 10, marginTop: -30, border: '3px solid white', width: 50, height: 50 }} />
                    <h2 style={{ marginLeft: 20, marginTop: 10 }}>Star</h2>
                    <p style={{ marginLeft: 20, marginTop: -15, color: '#A0AEC0' }}>10% cashback and off</p>
                </div>
            </div>
            <Footerall /></div>
    )
}

export default Dcards
