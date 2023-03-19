import { AppBar, Box, Button, CssBaseline, Stack, TextField, Toolbar } from "@mui/material";
import { CenterHeaderCard } from "./CenterHeaderCard";
import CrudTopBar from "./CrudTopBar";
import axios from 'axios';
import React, { useState } from 'react';


export default function DeletePage() {
  // const [ItemCode, setItemCode] = useState("");

  // const [itemname, getItemName] = useState("");

  // const handleSearch = () => {
  //   axios
  //     .get(`http://localhost:4000/AddItem/get/${ItemCode}`)
  //     .then((response) => {
  //       getItemName(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       getItemName("");
  //     });
  // };

  const [ItemCode, setItemCode] = useState('');
  // const [itemName, setItemName] = useState('');
  
  // function searchItem(e) {
  //     e.preventDefault();
  //     axios.get(`http://localhost:4000/AddItem/get/${ItemCode}`)
  //         .then(response => {
  //             setItemName(response.data.ItemName);
  //         })
  //         .catch(err => {
  //             console.log(err);
  //         });
  // }




  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/AddItem/deleteitem/${ItemCode}`)
      .then(() => {
        setItemCode("");
    
        alert('Item is Deleted successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

    
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
        <CenterHeaderCard title={"DELETE ITEM"} >
         <Toolbar />
              <Stack spacing={2} sx={{ width: '100%' }}>


              {/* <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={170} sx={{ height:100}}> */}
              <TextField id="item-code" label="Item Code" variant="outlined" value={ItemCode} onChange={(e) => setItemCode(e.target.value)} width={'100%'}/>
                  {/* <Button variant="contained" sx={{ width: '10%' }} onClick={handleSearch}>Search</Button> */}
                
              {/* </Stack> */}
              
              
           
              {/* <TextField id="outlined-basic" label="Item Name" variant="outlined" value={itemname} onChange={(e) => getItemName(e.target.value)} width={'100%'} /> */}
              
                  <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ height:100}}></Stack>

                  <Stack spacing={2} direction="row">
                      <a href ="/delete" ><Button variant='outlined' sx={{ width: '100%' }} onClick={handleDelete}>Delete Item</Button></a>
                      
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




