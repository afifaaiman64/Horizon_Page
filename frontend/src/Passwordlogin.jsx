import * as React from 'react';
import "./Signin.css"
import {OutlinedInput,InputAdornment, IconButton,} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Passwordlogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
const [password, setPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <div className='input-wrapper'>
      <label>Password*</label>
      <OutlinedInput placeholder='Min. 8 characters' className='inputfield' value={password}
  onChange={(e) => setPassword(e.target.value)} required 
        type={showPassword ? 'text' : 'password'}
        style={{border:'1px solid gray', borderRadius:10, placeholder: 'rgb(153, 153, 192)', fontSize:20}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />  </div>

  );
}
export default Passwordlogin


