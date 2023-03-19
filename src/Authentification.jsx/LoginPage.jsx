import { AppBar, Box, Button, CssBaseline, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Toolbar } from "@mui/material";
import { CenterHeaderCard } from "../Cards/CenterHeaderCard";
import ClippedDrawer from "../Cards/ClippedDrawer";
import Topbar from "../Cards/Topbar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Navigate } from "react-router-dom";
import React ,{useState ,useEffect} from "react";
import axios from 'axios';


export default function LoginPage () {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 
  
  const [UserName, setusername] = useState("");
	const [UserPassword, setuserpassword] = useState("");	
	const [loggedIn, setLoggedIn] = useState(false);

	async function checkLogin(e){
		e.preventDefault();
		const newUser = {
			UserName,
			UserPassword
		}

		
try {
	const result = await axios.post("http://localhost:4000/AddUser/login",newUser);
	alert("success");
	setLoggedIn(true);
} catch (error) {
	alert("invalid!");
}
		


	}	

	
	if (loggedIn) return <Navigate to="/add" ></Navigate>;


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
            <CenterHeaderCard title={"Login"} >
            
            <AccountCircleIcon  sx={{ fontSize: 150 }}/>
                <Stack spacing={2} sx={{ width: '100%' }}>
                <TextField id="outlined-basic" label="Username" variant="outlined"  onChange={(event) => setusername(event.target.value)} />
                

                
                  <FormControl sx={{ m: 1, width: '100%'  }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                      label="Password"
                      onChange={(event) => setuserpassword(event.target.value)}
                    />
                  </FormControl>


                    <a href="/changepassword" >Forgot Password</a>

                    <Stack spacing={2} direction="row">
                    <a  onClick={checkLogin}><Button variant='contained' sx={{ width:'100%' ,alignItems:"end"  }} >Log In</Button></a>
                        
                    </Stack>
                </Stack>
               
        </CenterHeaderCard> 
         
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }
