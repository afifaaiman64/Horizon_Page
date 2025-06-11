import * as React from 'react';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import { red, yellow } from '@mui/material/colors';
import AppleIcon from '@mui/icons-material/Apple';
import AdbSharpIcon from '@mui/icons-material/AdbSharp';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './Tables.css'
import Footerall from './Footerall';


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
function createData2(name6, title7, title8, title9, title10) {
    return { name6, title7, title8, title9, title10 };
  }
  function createData3(name11, title12, title13, title14, title15) {
    return { name11, title12, title13, title14, title15 };
  }
  function createData4(name16, title17, title18, title19, title20) {
    return { name16, title17, title18, title19, title20 };
  }
const rows = [
  createData('Marketplace', '17.5%', 2.456, '24.Jan.2021'),
  createData('Venus PRO', '17.5%', 2.456, '24.Jan.2021'),
  createData('Uranus Kit', '17.5%', 2.456, '24.Jan.2021'),
  createData('Venus DS','31.5%',858,'7.Jun.20121'),
  createData('Venus 3d Asset','12.2%',258,'17.Dec.20121'),
  createData('Venus 3d Asset','12.2%',258,'17.Dec.20121'),
  createData('Venus 3d Asset','12.2%',258,'17.Dec.20121'),
  createData('Venus 3d Asset','12.2%',258,'17.Dec.20121'),
];
const rows2 = [
  createData2('Marketplace', '17.5%', 2.456, '24.Jan.2021'),
  createData2('Venus PRO', '17.5%', 2.456, '24.Jan.2021'),
  createData2('Uranus Kit', '17.5%', 2.456, '24.Jan.2021'),
  createData2('Venus DS','31.5%',858,'7.Jun.20121'),
  createData2('Venus 3d Asset','12.2%',258,'17.Dec.20121'),
];
const rows3 = [
  createData3('Marketplace',<h4><CheckCircleIcon color="success"/>Approved</h4>,'24.Jan.2021',<BorderLinearProgress variant='determinate' value={80}/>),
  createData3('Venus PRO', <h4><CancelIcon sx={{color:red[500]}}/>Disable</h4>,'24.Jan.2021',<BorderLinearProgress variant='determinate' value={30}/>),
  createData3('Uranus Kit',<h4><ErrorIcon sx={{color:yellow[500]}}/>Error</h4> ,'24.Jan.2021',<BorderLinearProgress variant='determinate' value={80}/>),
  createData3('Venus DS',<h4><CheckCircleIcon color="success"/>Approved</h4>,'7.Jun.20121',<BorderLinearProgress variant='determinate' value={50}/>),
];
const rows4 = [
    createData4('Marketplace',<h4><AppleIcon color="disabled"/><AdbSharpIcon color="disabled" /><WindowSharpIcon color="disabled"/></h4>,'24.Jan.2021',<h4>75.5%<BorderLinearProgress variant='determinate' value={76} style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus PRO',<h4><AppleIcon color="disabled"/></h4> ,'24.Jan.2021',<h4>35.4%<BorderLinearProgress variant='determinate' value={36}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Uranus Kit',<h4><AppleIcon color="disabled"/><AdbSharpIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'24.Jan.2021',<h4>25%<BorderLinearProgress variant='determinate' value={25}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus DS',<h4><AppleIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'7.Jun.2021',<h4>100%<BorderLinearProgress variant='determinate' value={100}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus 3d Asset',<h4><AdbSharpIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'7.Jun.2021',<h4>12.2%<BorderLinearProgress variant='determinate' value={13}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus 3d Asset',<h4><AdbSharpIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'7.Jun.2021',<h4>12.2%<BorderLinearProgress variant='determinate' value={13}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus 3d Asset',<h4><AdbSharpIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'7.Jun.2021',<h4>12.2%<BorderLinearProgress variant='determinate' value={13}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
    createData4('Venus 3d Asset',<h4><AdbSharpIcon color="disabled"/><WindowSharpIcon color="disabled"/></h4>,'7.Jun.2021',<h4>12.2%<BorderLinearProgress variant='determinate' value={13}style={{width:90, marginLeft:40, marginTop:-5}}/></h4>),
  ];

export default function AccessibleTable() {
  return (
    <div className='mytable' style={{ background: '#EDF2F7', marginTop: -10, marginLeft: -6, fontFamily:'lato'}}>
        <div className='mytab4'>
   <TableContainer component={Paper} sx={{marginLeft:35, height:400, scrollbarWidth:'none', borderRadius:5}}>
      <Table aria-label="user table" size='small'  sx={{
          '& .MuiTableCell-root': {
            padding: '.01px 25px',
            fontSize: '0.75rem',
            lineHeight: 0.01,
            borderBottomColor:'white'
          },
          '& .MuiTableRow-root': {
            height: 24,
          },
        }}>
        <TableHead>
        <h2 style={{marginLeft:20}}>DevelopmentTable</h2>
          <TableRow>
            <TableCell align="left" sx={{width:120, color:' #A0AEC0'}}>Title
            <IconButton size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody  sx={{'& .MuiTableRow-root': { height: 20},
    '& .MuiTableCell-root': { padding: '0.01px 15px' }}}>
          {rows4.map((row4) => (
            <TableRow key={row4.name16} sx={{height:10}}>
              <TableCell>{row4.name16}</TableCell>
              <TableCell align="left">{row4.title17}</TableCell>
              <TableCell align="left">{row4.title18}</TableCell>
              <TableCell align="left">{row4.title19}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
   <div className='mytab2'>
   <TableContainer component={Paper} sx={{marginLeft:35, marginTop:-60, borderRadius:5}}>
      <Table size='small'sx={{
          '& .MuiTableCell-root': {
            padding: '13px 25px',
            fontSize: '0.75rem',
            lineHeight: 0.01,
            borderBottomColor:'white'
          },
          '& .MuiTableRow-root': {
            height: 24,
          },
        }}>
        <TableHead>
        <h2 style={{marginLeft:20}}>4-Column Table</h2>
          <TableRow>
            <TableCell align="left" sx={{width:130,color:' #A0AEC0'}}>Title
            <IconButton size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row2) => (
            <TableRow key={row2.name6} >
              <TableCell>{row2.name6}
              </TableCell>
              <TableCell align="left">{row2.title7}</TableCell>
              <TableCell align="left">{row2.title8}</TableCell>
              <TableCell align="left">{row2.title9}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
     <div className='mytab1'>
    <TableContainer component={Paper} sx={{marginLeft:110, marginTop:-90, height:400, scrollbarWidth:'none', borderRadius:5}}>
      <Table size='small'sx={{
          '& .MuiTableCell-root': {
            padding: '.01px 25px',
            fontSize: '0.75rem',
            lineHeight: 0.01,
            borderBottomColor:'white'
          },
          '& .MuiTableRow-root': {
            height: 24,
          },
        }}>
        <TableHead>
        <h2 style={{marginLeft:20}}>Check Table</h2>
          <TableRow>
            <TableCell align="left" sx={{width:176,color:' #A0AEC0'}}>Title
            <IconButton size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell><Checkbox/>{row.name}
              </TableCell>
              <TableCell align="left">{row.title2}</TableCell>
              <TableCell align="left">{row.title3}</TableCell>
              <TableCell align="left">{row.title4}</TableCell>
              <TableCell align="left">{row.title5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  
   <div className='mytab3'>
   <TableContainer component={Paper} sx={{marginLeft:110, marginTop:15, height:225, scrollbarWidth:'none', borderRadius:5}}>
      <Table size='small'sx={{
          '& .MuiTableCell-root': {
            padding: '.01px 25px',
            fontSize: '0.75rem',
            lineHeight: 0.01,
            borderBottomColor:'white'
          },
          '& .MuiTableRow-root': {
            height: 24,
          },
        }}>
        <TableHead>
        <h2 style={{marginLeft:20}}>Complex Table</h2>
          <TableRow>
            <TableCell align="left" sx={{width:120,color:' #A0AEC0'}}>Title
            <IconButton size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
            <TableCell align="left"sx={{color:' #A0AEC0'}}>Title
            <IconButton aria-label="expand row" size="small">
            <KeyboardArrowDownIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map((row3) => (
            <TableRow key={row3.name11} >
              <TableCell>{row3.name11}
              </TableCell>
              <TableCell align="left">{row3.title12}</TableCell>
              <TableCell align="left">{row3.title13}</TableCell>
              <TableCell align="left">{row3.title14}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
   <Footerall/>
    </div>
   
  );
}
