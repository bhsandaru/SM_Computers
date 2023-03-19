import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';

import KeyboardIcon from '@mui/icons-material/Keyboard';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import MouseIcon from '@mui/icons-material/Mouse';
import { Button } from '@mui/material';


const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      
      
      <Drawer
        variant="permanent"
       
        sx={{
          backgroundColor:"#064c8f" ,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Divider />
          <List>
          <ListItem  >
            <a href ="/laptops" ><Button variant='contained' sx={{ width:220 ,alignItems:"end",backgroundColor:"#000066" }}><ListItemIcon><LaptopWindowsIcon color="primary" /></ListItemIcon>Laptops</Button></a>
            </ListItem>
            <ListItem>
            <a href ="/keyboards" ><Button variant='contained' sx={{ width:220 ,alignItems:"end" ,backgroundColor:"#000066"}}><ListItemIcon><KeyboardIcon color="primary" /></ListItemIcon>Keyboards</Button></a>
            </ListItem>
            <ListItem>
            <a href ="/mouses" ><Button variant='contained' sx={{ width:220,alignItems:"end" ,backgroundColor:"#000066"}}><ListItemIcon><MouseIcon color="primary"/></ListItemIcon>Mouses</Button></a>
            </ListItem>


            {/* {['Laptops', 'Mouses', 'Keyboards'].map((text, index ) => (
              <ListItem key={text} disablePadding>
                <a href ="/laptops" ><ListItemButton>
                  <ListItemIcon>
                  
                    {index === 0 ? <LaptopWindowsIcon /> : null}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton></a>

                <a href ="/mouses" ><ListItemButton>
                  <ListItemIcon>
                  
                    {index === 1 ? <MouseIcon /> : null}
                    
                  </ListItemIcon>
                  
                </ListItemButton></a>
                <a href ="/keboards" ><ListItemButton>
                  <ListItemIcon>
                  
                    {index === 2 ? <KeyboardIcon /> : null}
                    
                  </ListItemIcon>
                  
                </ListItemButton></a>

                
              </ListItem>
            ))} */}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
