
import {Stack } from '@mui/system';
import React, { useState } from 'react';
import { CenterHeaderCard } from './CenterHeaderCard';

import { AppBar, Box, Button, CssBaseline, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Toolbar } from '@mui/material';
import CrudTopBar from './CrudTopBar';
import axios from 'axios';

export default function UpdatePage() {
  const [ItemCode, setItemCode] = useState('');
  // const [itemType, setItemType] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [availability, setAvailability] = useState('');

  // const handleSearchClick = () => {
  //   axios.get(`http://localhost:4000/AddItem/get/${ItemCode}`).then((res) => {
  //     // setItemType(res.data.ItemType);
  //     setItemName(res.data.ItemName);
  //     setItemPrice(res.data.ItemPrice);
  //     // setAvailability(res.data.Availability);
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
  // }

  const handleUpdateClick = () => {
    axios.put(`http://localhost:4000/AddItem/updateitem/${ItemCode}`, {
      // ItemType: itemType,
      ItemName: itemName,
      ItemPrice: itemPrice,
      Availability: availability
    }).then(() => {
      alert('Item is updated successfully!');
    })
    .catch((err) => {
      alert(err.message);
    });
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
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
            <Toolbar />
            <CenterHeaderCard title={"UPDATE ITEM"} >
           
                <Stack spacing={2} sx={{ width: '100%' }}>

                {/* <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={170} sx={{ height:100}}> */}
                <TextField id="item-code-input" label="Item Code" variant="outlined" value={ItemCode} onChange={(e) => setItemCode(e.target.value)} width={'100%'}/>
                {/* <Button variant="contained" onClick={handleSearchClick} sx={{ width: '10%' }}>Search</Button> */}
                {/* </Stack> */}
                
                {/* <TextField id="item-type-input" label="Item Type" variant="outlined" value={itemType} onChange={(e) => setItemType(e.target.value)} /> */}
                <TextField id="item-name-input" label="Item Name" variant="outlined" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                <TextField id="item-price-input" label="Item Price" variant="outlined" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Availability</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                    >
                        <FormControlLabel value="InStock" control={<Radio/>} label="In Stock" />
                        <FormControlLabel value="OutofStock" control={<Radio />} label="Out of Stock" />
                     
                    </RadioGroup>
                    </FormControl>
                    <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ height:100}}></Stack>

                    <Stack spacing={2} direction="row">
                        <a href ="/update" ><Button type="submit" onClick={handleUpdateClick} variant='outlined' sx={{ width: '100%' }}>Update Item</Button></a>
                        
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



