
import { Card, CardActionArea, CardContent, CardMedia, CssBaseline, Divider, Drawer,  List, ListItem, ListItemButton, ListItemIcon, ListItemText,  Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import KeyboardIcon from '@mui/icons-material/Keyboard';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import MouseIcon from '@mui/icons-material/Mouse';
import React from 'react'


const drawerWidth = 240;

export default function Sidedrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto'}}>
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
            alt="green iguana"
          />
          <Divider />
          <List>
            {['Laptops', 'Mouses', 'Keyboards'].map((text, index ) => (
              <ListItem key={text} disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                    
                    {index === 0 ? < LaptopWindowsIcon/> : (
                      index === 1 ? <MouseIcon /> : (
                        index === 2 ? <KeyboardIcon/> : <></>
                      )
                    )}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
        <Toolbar />
            

        <Card sx={ {maxWidth:1600, alignItems:'center', maxHeight:1000}}>
        <CardActionArea>
            <CardContent>
            <Typography variant="h2"  sx={{ textAlign:'center'}} color="#000066" gutterBottom >
    About SM Computers
    </Typography>

    <Typography variant="h3" gutterBottom>
    Discover Our Story...
    </Typography>
            </CardContent>
          <CardMedia
          component="img"
          height="400"
          image ="E:\Project\computershopproject\src\Cards\images\aboutus.png"
         />

          <CardContent>
         
          <Typography sx={{ fontSize: 15}} >
      Established in 2008, SM Computer Solutions has strives to be one of the leading retailers for branded & customization computers
       and related products in today’s market. Our many years of experience has provided us with the expertise to cater you; our valued customers 
       with the latest technology, while providing an excellent service that would culminate in providing you the best available products.
        SM Computer Solutions has always been the stable backdrop for many PC enthusiasts in the face of rising enthusiasm for high-end computer 
     gaming and custom-built PCs.
       Thus, enabling the dreams of making one's own computer that would fit all of one's needs come true.
      </Typography>
      <Typography sx={{ fontSize: 15}}  >
      We believe in your passion, as fellow PC enthusiasts, we would be more than glad to provide you with any assistance when you're looking for branded computer solutions. If you visit our store, it would be possible for you to see for yourself the latest products that we have in our showroom, sourced from the international market. We specialize in making available the latest technology as soon as it is released worldwide. In fact, you would be able to observe that most products on our shelves are less than 30 days old! It is this quality and the service that has earned SM Computer Solutions the untarnished reputation that it has had throughout the years.
      </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Box>
    </Box>
  );
}