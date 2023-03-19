import { AppBar, Box, Button, CssBaseline, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Toolbar } from "@mui/material";
import { CenterHeaderCard } from "../Cards/CenterHeaderCard";
import ClippedDrawer from "../Cards/ClippedDrawer";
import Topbar from "../Cards/Topbar";
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React ,{useState } from "react";
import axios from 'axios';

export default function PasswordChange () {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

     const [UserName ,setUserName] = useState('');
     const [userPassword ,setUserPassword] = useState('');

     const [password, getPassword] = useState('');

     const handleUpdateClick = () => {
        if (userPassword === password ) {
            axios.put(`http://localhost:4000/AddUser/updateuser/${UserName}`, {
          
            UserPassword: userPassword
           
          })
            // Go to the next page
            alert('Password is Successfully Changed ');
          } else {
            // Show error message
            alert('Re-Check the Passwords');
          }
        }
       

   


    return (
      
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Topbar/>      
        </AppBar>
        <ClippedDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
            <Toolbar />
            <CenterHeaderCard title={"Change Password"} >
            
            <ManageAccountsRoundedIcon sx={{ fontSize: 150 }}/>
                <Stack spacing={2} sx={{ width: '100%' }}>
                <TextField id="outlined-basic" label="Username" variant="outlined" value={UserName} onChange={(e) => setUserName(e.target.value)} width={'100%'}/>

                {/* <TextField id="outlined-basic" label="Password" variant="outlined" />
                 */}
                  <FormControl sx={{ m: 1, width: '100%'  }} variant="outlined" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}>
                    <InputLabel htmlFor="outlined-adornment-password"  width={'100%'}>Enter New Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label=" New Password"
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, width: '100%'  }} variant="outlined"  value={password} onChange={(event) => getPassword(event.target.value)}>
                    <InputLabel htmlFor="outlined-adornment-password" >Enter New Password Again</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="New Password Again"
                    />
                  </FormControl>


               

                    <Stack spacing={2} direction="row">
                    <a href ="/changepassword" ><Button variant='contained' onClick={handleUpdateClick} sx={{ width:'100%' ,alignItems:"end" }}>Save</Button></a>
                    <a href ="/login" ><Button variant='contained' sx={{ width:'100%' ,alignItems:"end" }}>Back</Button></a>    
                    </Stack>
                </Stack>
                <Stack direction = {'row'} height={100}></Stack> 
        </CenterHeaderCard> 
         
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }