import { AppBar, Button, CssBaseline, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Toolbar } from "@mui/material";
import { CenterHeaderCard } from "./CenterHeaderCard";
import React, { useState } from 'react';
import { Box } from "@mui/system";
import CrudTopBar from "./CrudTopBar";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';


export default function AddPage() {

    const [ItemCode ,setItemCode] = useState('');
    const [ItemType ,setItemType] = useState('');
    const [ItemName ,setItemName] = useState('');
    const [ItemPrice,setItemPrice] = useState('');
    const [Availability ,setAvailability] = useState('');
    const [ItemImage ,setItemImage] = useState('');

    function sendData(e) {
        e.preventDefault();
        const newItem = {
            ItemCode,
            ItemType,
            ItemName,
            ItemPrice,
            Availability,
            ItemImage
        }
        axios.post("http://localhost:4000/AddItem/additem", newItem).then(()=> {
            alert("New Item is added")
            
        }).catch((err)=>{
            alert(err)
        })
    
    }    
   

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CrudTopBar/>      
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
          <CssBaseline/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
            <Toolbar />
            <CenterHeaderCard title={"ADD ITEM"} sx={{ textAlign:'center', fontsize : 30}} >
            <Stack spacing={2} sx={{ width: '100%' }}>
                
                <TextField id="outlined-basic" label="Item Code" variant="outlined" onChange={(e)=> {setItemCode(e.target.value);}}/>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Item Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ItemType}
                        label="Item Type"
                        onChange={(e)=> {setItemType(e.target.value);}}
                    >
                        <MenuItem value={"Laptop"}>Laptops</MenuItem>
                        <MenuItem value={"Keyboard"}>Keyboards</MenuItem>
                        <MenuItem value={"Mouse"}>Mouse</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Item Name" variant="outlined" onChange={(e)=> {setItemName(e.target.value);}} />
                <TextField id="outlined-basic" label="Item Price" variant="outlined" onChange={(e)=> {setItemPrice(e.target.value);}} />
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Availability</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=> {setAvailability(e.target.value);}}
                    >
                        <FormControlLabel value="InStock" control={<Radio/>} label="In Stock" />
                        <FormControlLabel value="OutofStock" control={<Radio />} label="Out of Stock" />
                     
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" label="Link of the Item Image" variant="outlined" startIcon={<PhotoCamera />} onChange={(e)=> {setItemImage(e.target.value);}} />


                {/* <Button variant="contained" component="label" startIcon={<PhotoCamera />} >
                    Upload Image of The Item
                    <input hidden accept="image/*" multiple type="file" onChange={(e)=> {setItemImage(e.target.value);}} />
                </Button> */}

                





                <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ height:5}}></Stack>

                <Stack spacing={2} direction="row">
                <a href ="/add" ><Button type="submit" onClick={sendData} variant='outlined'  sx={{ width: '100%' }}>ADD</Button></a>
                
                <a href ="/login" ><Button variant='contained' sx={{ width: '100%' }}>Logout</Button></a>        
                        
                </Stack>
                    
                </Stack>
           
            
                
        </CenterHeaderCard>
           
          </Box>
        </Box>
        </Box>
      </Box>
        
    );
}

