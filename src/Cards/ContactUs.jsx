import { AppBar, Box, Card, CardActionArea, CardContent, CssBaseline, Divider, Stack, Toolbar, Typography } from "@mui/material";
import ClippedDrawer from "./ClippedDrawer";
import Topbar from "./Topbar";
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { CenterHeaderCard } from "./CenterHeaderCard";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function ContactUs() {
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
            <Card sx={ {maxWidth:1600, alignItems:'center', maxHeight:1000}}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h3"  sx={{ textAlign:'center'}} color="#000066" gutterBottom >
                         Contact Us
                        </Typography>
                     </CardContent>
                    
                    <CardContent>
                        <Typography sx={{ fontSize: 30, textAlign:'center'}} >
                        Our fast support is always ready for you.
                        We strive to respond to every request within 24 hours - 7 days a week.
                         To keep our response times as efficient and fast as possible, we do not offer phone support.
                        </Typography>
          
                    </CardContent>
                    {/* <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ height:100}}></Stack> */}
                   
                    <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={15} sx={{ bgcolor:""}}>
                <Typography width={'50%'}>

                    <CenterHeaderCard  sx={{ textAlign:'center', fontSize: 15}}  color="#000066" gutterBottom>
                          <Typography variant="h5">
                               WARRANTY ASSURED
                                  </Typography>
                        <SafetyCheckIcon sx={{ fontSize: 100 }}/>
                        <CardContent >
                            <Typography>
                            In case of faulty products, we have an upstanding warranty and claim procedures to make sure that your requirements are
                            met in minimum time loss as possible.
                            </Typography>
                        </CardContent>  
                    </CenterHeaderCard>
                </Typography>

                <Typography width={'50%'}>
                    <CenterHeaderCard sx={{ textAlign:'center', fontSize: 15}} color="#000066" gutterBottom>
                    <Typography variant="h5">
                    HOME DELIVERY
                                  </Typography>
                    <LocalShippingIcon sx={{ fontSize: 100 }}/>
                        <CardContent>
                            <Typography>
                            To further facilitate your access to your needs, we offer to deliver to meet your requirements straight to where you 
                            live within Sri Lankan borders.
                            </Typography>
                        </CardContent>  
                    </CenterHeaderCard>
                </Typography>
                </Stack>
                 </CardActionArea>
            </Card> 
                
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }