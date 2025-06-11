import React, { useState } from 'react';
import "./Signin.css"
import {OutlinedInput,InputAdornment, IconButton,} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer'

const SignIn = () => {
    const navigate = useNavigate(); // <-- hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const handleGoogleLogin = () => {
      // Redirect to your backend Google authentication endpoint
      window.location.href = 'http://localhost:5000/auth/google';
    }
     
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Login successful
        navigate('/'); // 🔁 redirect to dashboard
      } else {
        alert(data.message); // Show error
      }
    } catch (err) {
      console.error('Login failed:', err);
      alert('Server error');
    }

    if (rememberMe) {
      localStorage.setItem('authToken', data.token);
    } else {
      sessionStorage.setItem('authToken', data.token);
    }
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className='mypage'>
    <div className='mycontainer'>
      <div className='login-container'>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
      <ArrowBackIosIcon style={{color:'rgb(168, 184, 222)', marginTop:30, width:15}}/>
      <h5>Back to dashboard</h5></NavLink>  
      <h2 className='signup'>Sign In</h2>
        <p className='signupp'>Enter your email and password to sign in!</p>
        <div className='glogin'>
      <button className="gbutton" onClick={handleGoogleLogin}><img  className='gicon'src='src\images\gicon.webp'/>Sign in with Google</button>
    </div>
   <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
  <hr style={{ flex: 1, border: 'none', borderTop: '1px solid rgb(168, 184, 222)'}} />
  <span style={{ margin: '0 1rem', whiteSpace: 'nowrap', color: 'rgb(112, 140, 203)'}}>or</span>
  <hr style={{ flex: 1, border: 'none', borderTop: '1px solid rgb(168, 184, 222)' }} /></div>
      <form onSubmit={handleSubmit} action='#' className='loginform'>
      <div className='input-wrapper'>
            <label>Email <span style={{color:' rgb(34, 34, 230)'}}>*</span></label>
            <OutlinedInput placeholder='mail@simmmple.com' className='inputfield'  value={email}
          onChange={(e) => setEmail(e.target.value)} required
        style={{borderColor:'rgb(238, 244, 251)', borderRadius:10, fontSize:15, color:' rgb(127, 157, 228)', fontWeight:500, padding:20}}/>  
          </div>
          <div className='input-wrapper'>
      <label>Password <span style={{color:' rgb(34, 34, 230)'}}>*</span></label>
      <OutlinedInput placeholder='Min. 8 characters' className='inputfield' value={password}
  onChange={(e) => setPassword(e.target.value)} required 
        type={showPassword ? 'text' : 'password'}
         style={{borderColor:'rgb(238, 244, 251)', borderRadius:10, fontSize:15, color:' rgb(127, 157, 228)', fontWeight:500, padding:20}}
        endAdornment={<InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="small">
              {showPassword ? (
                <VisibilityOffOutlinedIcon fontSize="inherit" style={{color:'rgb(180, 188, 197)'}} /> ) : (<VisibilityOutlinedIcon style={{color:'rgb(127, 157, 228)'}} fontSize="inherit" />)}
            </IconButton> </InputAdornment>} />  </div>

      <input type="checkbox" checked={rememberMe} style={{marginTop:20, accentColor: 'rgb(64, 64, 234)', marginRight:15}} onChange={() => setRememberMe(!rememberMe)}/>
<label style={{fontFamily:'lato', fontSize:13}}>Keep me logged in</label>
 <a href='#' className='forgotpass'>Forget password?</a>
 <button type="submit" className='signin'>Sign In</button>
      </form>
    
      <p className='signuptext'>Not registered yet? <a href='#'>Create an Account</a></p>
      </div>
      <div className='logocontainer'>
        <img src='src\images\hf1.png' alt='logo' style={{width:670, height:620}}/>
        <button className='sign-button' style={{marginTop:-30}}><p>Learn more about Horizon UI on</p><h3>horizon-ui.com</h3></button>
        <img src='src\images\logo1.png' alt='moon' className='moonlogo'></img>
      
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SignIn;
