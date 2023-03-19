import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";

export default function CrudTopBar() {
    return (
      <Box sx={{ backgroundColor:"#000066"  }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor:"#000033" , borderRadius :"10"}} >

          <Stack spacing={3} direction="row" flexGrow = {1} alignItems="center" justifyContent="flex-start">
          <a href ="/add" ><Button variant='contained' size="large" sx={{ width: '100%',backgroundColor:"#000066" }}>ADD</Button></a>
          <a href ="/update" ><Button variant='contained' size="large" sx={{ width: '100%',backgroundColor:"#000066"}}>UPDATE</Button></a>              
          <a href ="/delete" ><Button variant='contained' size="large" sx={{ width: '100%',backgroundColor:"#000066"}}>DELETE</Button></a>              
                        
         </Stack>
             
          </Toolbar>
        </AppBar>
      </Box>
    );
  }