import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Topbar() {
  return (
    <Box sx={{ backgroundColor:"#000066"  }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor:"#000033" , borderRadius :"10"}} >
          <Stack
            direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start"
          >
            
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
                    >
                      <DevicesSharpIcon/>
                    </IconButton>
                    <Button
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2    }}
                    >
                      <Typography>SM Computers</Typography>
                      
                    </Button>

                    <a href ="/" ><Button
                      size="large"
                      variant="contained"
                      sx={{ mr: 2 , backgroundColor:"#000066" }}
                    >
                      About Us
                    </Button></a>

                    <a href ="/contact" ><Button
                      size="large"
                      variant="contained"
                      sx={{ mr: 2 , backgroundColor:"#000066" }}
                    >
                      Contact
                    </Button></a>

                    <a href ="/service" ><Button
                      size="large"
                      variant="contained"
                      sx={{ mr: 2 , backgroundColor:"#000066" }}
                    >
                      Service
                    </Button></a>
             </Stack>
            
             <Stack direction="row" spacing={1}>
                <Search flexGrow = {10}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

                <a href ="/login" ><Button
                      size="large"
                      variant="contained"
                      sx={{ mr: 2 , backgroundColor:"#000066" }}
                    >
                      Login
                </Button></a>
             </Stack> 
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
