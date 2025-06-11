import React from 'react'
import './Nftcards.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Typography } from '@mui/material';
import Footerall from './Footerall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 
const Nftcards = (props) => {
  return (
    <div style={{ background: '#EDF2F7', marginTop: 40, marginLeft: -6, fontFamily:'lato' }}>
      <div className='mynftcard'>
        <div className='firstcard'>
          <h2 style={{padding:30}}>{props.title}</h2>
          <p>{props.description}</p>
          <button className='butt1'>{props.but1}</button>
          <button className='butt2'>{props.but2}</button>
          <h1>Trending NFTs <button className='trenbut'>Art</button>
            <button className='trenbut1'>Music</button><button className='trenbut1'>Collectibles</button>
            <button className='trenbut1'>Sports</button></h1>
        </div>
        <div className='myrig-top'>
          <div className='nftop'>
            <h1>Top Creators <button className='topbut'>see all</button></h1>
            <div className='nftoplist'>
              <List dense sx={{ maxWidth: 340, marginLeft: 40, background: 'white' , borderRadius:5}}>
                <ListItem disablePadding><ListItemButton>
                  <ListItemText primary="Name" sx={{ marginLeft: 1 ,color: '#A0AEC0'}} />
                  <ListItemText primary="Artworks" sx={{ marginLeft: 12,color: '#A0AEC0' }} />
                  <ListItemText primary="Rating" sx={{ marginLeft: 1,color: '#A0AEC0' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@maddison_c21" />
                  <ListItemText primary="9821" sx={{ marginLeft: -3 }} /> <progress value={0.9} style={{ width: 70 }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding> <ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@karl.eill02" />
                  <ListItemText primary="7032" /><progress value={0.8} style={{ width: 70 }} /></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@andrea.1z" />
                  <ListItemText primary="5204" /><progress value={0.7} style={{ width: 70 }} /> </ListItemButton></ListItem>
                <ListItem disablePadding> <ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@abraham47.y" />
                  <ListItemText primary="4309" sx={{ marginLeft: -2 }} /><progress value={0.6} style={{ width: 70 }} /></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@venus.sys" />
                  <ListItemText primary="9821" /> <progress value={0.5} style={{ width: 70 }} /></ListItemButton></ListItem>
                <ListItem disablePadding> <ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@simmmple.web" />
                  <ListItemText primary="3153" sx={{ marginLeft: -3 }} /> <progress value={0.4} style={{ width: 70 }} /></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@ape.vpp8" />
                  <ListItemText primary="4309" /><progress value={0.3} style={{ width: 70 }} /> </ListItemButton></ListItem>
                <ListItem disablePadding> <ListItemButton>
                  <ListItemAvatar><Avatar src={`/static/images/avatar.jpg`} /> </ListItemAvatar>
                  <ListItemText primary="@leon_pwrr" />
                  <ListItemText primary="2309" /> <progress value={0.2} style={{ width: 70 }} /></ListItemButton></ListItem>
              </List>
            </div></div>
        </div>

        <div className='trcont'>
          <div className='trtiltle' style={{ width: 280, height: 320}}>
            <img src='src\images\bg1.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
            <AvatarGroup max={5} total={10} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg"/>
              <Avatar src="src/images/bg6.jpg"/>
              <Avatar src="src/images/bg6.jpg"/>
            </AvatarGroup>
            <h3>{props.subhead}</h3>
            <p>{props.des}</p>
            <h4>{props.val}
              <button className='tbut1'>{props.butt01}</button></h4>
          </div>
          <div className='trtiltle2' style={{ width: 280, height: 320, marginLeft:-40 }}>
            <img src='src\images\bg2.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
            <AvatarGroup max={3} total={10} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg"/>
            </AvatarGroup>
            <h3>{props.subhead2}</h3>
            <p>{props.des2}</p>
            <h4>{props.val}
              <button className='tbut1'>{props.butt012}</button></h4>
          </div>
          <div className='trtiltle3' style={{ width: 280, height: 320, marginLeft:-40 }}>
            <img src='src\images\bg3.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
            <AvatarGroup max={3} total={2} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg"/>
            </AvatarGroup>
            <h3>{props.subhead3}</h3>
            <p>{props.des3}</p>
            <h4>{props.val3}
              <button className='tbut1'>{props.butt015}</button></h4>
            <h1 style={{marginLeft:-570, fontWeight:700}}>Recently Added</h1>
          </div>
        </div>

        <div className='myrig-bot'>
          <div className='nfbot'>
            <h1>History <button className='topbut2'>see all</button></h1>
            <div className='nfbotlist'>
              <List dense sx={{ maxWidth: 380, marginLeft: 40, background: 'white' }}>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg1.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="Colorful Heaven" secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Mark Benjamin</Typography>} />
                  <ListItemText primary="1.30ETH" sx={{ padding: 2 }} />
                  <ListItemText primary="30s ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg2.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="Abstract Colors" secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Jackson</Typography>} />
                  <ListItemText primary="0.91ETH" sx={{ padding: 2 }} />
                  <ListItemText primary="58s ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg3.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="ETH AI Brai " secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Nick Willson</Typography>} />
                  <ListItemText primary="2.82ETH" sx={{ padding: 2, marginLeft: 2 }} />
                  <ListItemText primary="1m ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg4.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="Swip eCircles" secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Peter</Typography>} />
                  <ListItemText primary="1.30ETH" sx={{ padding: 2, marginLeft: 2 }} />
                  <ListItemText primary="30s ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg5.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="3D Cube Arts" secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Mark Benjamin</Typography>} />
                  <ListItemText primary="1.30ETH" sx={{ padding: 2 }} />
                  <ListItemText primary="30s ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>
                <ListItem disablePadding><ListItemButton>
                  <ListItemAvatar><Avatar src={`src/images/bg6.jpg`} style={{ borderRadius: 10 }} /> </ListItemAvatar>
                  <ListItemText primary="Colorful Heaven" secondary={<Typography component='span' sx={{ color: 'gray', display: 'inline', fontSize: 10 }}>
                    By Mark Benjamin</Typography>} />
                  <ListItemText primary="1.30ETH" sx={{ padding: 2 }} />
                  <ListItemText primary="30s ago" sx={{ color: 'gray' }} />
                </ListItemButton> </ListItem>

              </List>
            </div>
          </div>
        </div>
        <div className='trcont2' style={{marginTop:-240}}>
          <div className='trtiltle' style={{ width: 280, height: 320 }}>
            <img src='src\images\bg4.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
            <AvatarGroup max={2} total={10} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg"  />
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg" />
            </AvatarGroup>
            <h3>{props.subhead4}</h3>
            <p>{props.des4}</p>
            <h4>{props.val4}
              <button className='tbut1'>{props.butt04}</button></h4>
          </div>
          <div className='trtiltle2' style={{ width: 280, height: 320,marginLeft:-40 }}>
            <img src='src\images\bg5.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
            <AvatarGroup max={2} total={10} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg"  />
              <Avatar src="src/images/bg6.jpg"  />
            </AvatarGroup>
            <h3>{props.subhead5}</h3>
            <p>{props.des5}</p>
            <h4>{props.val5}
              <button className='tbut1'>{props.butt015}</button></h4>
          </div>
          <div className='trtiltle3' style={{ width: 280, height: 320,marginLeft:-40 }}>
            <img src='src\images\bg6.jpg' alt=''/><FavoriteBorderIcon className='icon'/>
             <AvatarGroup max={5} total={10} spacing={14} sx={{marginRight:2}} className="avatar-group">
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg" />
              <Avatar src="src/images/bg6.jpg" />
            </AvatarGroup>
            <h3>{props.subhead6}</h3>
            <p>{props.des6}</p>
            <h4>{props.val6}
              <button className='tbut1'>{props.butt015}</button></h4>
          </div>
        </div> </div>
      <Footerall />
    </div>
  )
}

export default Nftcards
