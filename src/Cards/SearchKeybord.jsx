import { AppBar, Box, Button, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import ClippedDrawer from "./ClippedDrawer";
import Topbar from "./Topbar";
import React ,{useState ,useEffect} from "react";
import axios from "axios";

export default function SearchKeyboard () {

    const [itemtype, setItemType] = useState([]);
    const [keyboards, setKeyboards] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:4000/AddItem/search").then((res) => {
          setItemType(res.data.ItemType)

          setKeyboards(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    });
    
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
          <Typography variant="h4" color="#FFFFFF"  sx={{ textAlign:'center'}} gutterBottom >LAPTOP AND ACCESSORIES</Typography>
            <Toolbar />
            
            <Grid container spacing={3}>
                {keyboards.map(item => (
                    <Grid item xs={12} sm={4} md={3} key={item.itemId}>
                    <Card >
                        <CardMedia component="img" image={item.ItemImage} alt="KeyboardImage" />
                        <CardContent>
                          <Button  variant="contained"  sx={{ width: '100%', backgroundColor:"#04315c"}}>{item.ItemName}</Button>
                          <Button  variant="contained"  sx={{ width: '100%', backgroundColor:"#064c8f"}}>Rs:{item.ItemPrice}.00/=</Button>   
                          <Button  variant="outlined"  sx={{ width: '100%'}}>{item.Availability}</Button>
                        </CardContent>
                    </Card>
                    </Grid>
                  ))}
            </Grid>
           
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }

  