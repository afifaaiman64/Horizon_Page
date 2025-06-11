import React from 'react'
import './Kanbancards.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Footerall from './Footerall';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
 
const Kanbancards = (props) => {
    return (
        <div style={{ background: '#EDF2F7', marginTop: -35, marginLeft: -15 }}>
            <div className='trcont'>
                <div className='trtiltle' style={{ marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
                    <h1 style={{ marginLeft: 20, marginTop: 20, fontWeight: 600, color: '#11047A' }}>{props.title}
                        <button className='addbut'>{props.b1}</button></h1>
                    <div className='c1'>
                        <h2 style={{ fontWeight: 600}}>{props.head}
                            <button className='writebut'><CreateRoundedIcon/></button></h2>
                        <p>{props.para}</p>
                        <AvatarGroup spacing={14} total={2} sx={{marginRight:40, marginTop:2}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut'>{props.b3}</button>
                    </div>

                    <div className='c2'>
                        <h2>{props.head02}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <img src='src\images\card1.png' />
                        <p>{props.para02}</p>
                        <AvatarGroup spacing={14} total={3} sx={{marginRight:39, marginTop:-1}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                             <Avatar src="src/images/bg4.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut2'>{props.b02}</button>
                    </div>

                    <div className='c3'>
                        <h2>{props.head03}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para03}</p>
                         <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20, marginLeft:2 }} />
                        <button className='updbut3'>{props.b03}</button>
                    </div>
                </div>

                <div className='trtiltle2' style={{ marginLeft: -40, marginBottom: 10, marginTop: 10 }}>
                   <h1 style={{ marginLeft: 20, marginTop: 20, fontWeight: 600, color: '#11047A' }}>{props.title2}
                            <button className='addbut'>{props.b1}</button></h1>
                    <div className='c1'>
                        <h2>{props.head2}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para}</p>
                        <AvatarGroup spacing={14} total={3} sx={{marginRight:39, marginTop:2}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                             <Avatar src="src/images/bg4.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut2'>{props.b02}</button>
                    </div>
                    <div className='c3'>
                        <h2>{props.head03}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para03}</p>
                          <Avatar src="src/images/bg5.jpg" sx={{ width: 20, height: 20,marginLeft:2 }} />
                        <button className='updbut'>{props.b3}</button>
                    </div>
                    <div className='c2'>
                        <h2>{props.head02}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <img src='src\images\card2.png' />
                        <p>{props.para02}</p>
                        <AvatarGroup spacing={14} total={2} sx={{marginRight:41, marginTop:-1}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut3'>{props.b03}</button>
                    </div>
                </div>
                <div className='trtiltle3' style={{ marginLeft: -40, marginBottom: 10, marginTop: 10 }}>
                    <h1 style={{ marginLeft: 20, marginTop: 20, fontWeight: 600, color: '#11047A' }}>{props.title3}
                            <button className='addbut'>{props.b1}</button></h1>
                    <div className='c1'>
                        <h2>{props.head4}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para}</p>
                        <Avatar src="src/images/bg5.jpg" sx={{ width: 20, height: 20,marginLeft:2 }} />
                        <button className='updbut4'>{props.b4}</button>
                    </div>
                    <div className='c3'>
                        <h2>{props.head04}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para03}</p>
                        <AvatarGroup spacing={14} total={2} sx={{marginRight:41, marginTop:-1}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut4'>{props.b4}</button>
                    </div>
                    <div className='c3'>
                        <h2>{props.head05}
                            <button className='writebut'><CreateRoundedIcon /></button></h2>
                        <p>{props.para03}</p>
                        <AvatarGroup spacing={14} total={2} sx={{marginRight:41, marginTop:-1}}>
                            <Avatar src="src/images/bg2.jpg" sx={{ width: 20, height: 20 }} />
                            <Avatar src="src/images/bg3.jpg" sx={{ width: 20, height: 20 }} />
                        </AvatarGroup>
                        <button className='updbut4'>{props.b4}</button>
                    </div>
                </div>
            </div>
            <Footerall /></div>
    )
}

export default Kanbancards


