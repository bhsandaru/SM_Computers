import { AppBar, Box, CardContent, CardMedia, CssBaseline, Toolbar, Typography } from "@mui/material";
import { CenterHeaderCard } from "./CenterHeaderCard";
import ClippedDrawer from "./ClippedDrawer";
import Topbar from "./Topbar";

export default function AboutUs () {
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

            <CenterHeaderCard title={"About SM Computers"}  sx={{ textAlign:'center'}} color="#000066" gutterBottom>
            <Typography variant="h5" gutterBottom>
                        Discover Our Story...
                        </Typography>
                        
                
                        <CardMedia
                        component="img"
                        height="400"
                        image ="https://www.superiorcomputers.ca/wp-content/uploads/2020/03/the-top-5-computer-stores-in-london-ontario.jpg"
                        />

                    <CardContent>
                        <Typography  sx={{ fontSize: 15}} >
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
                    </CenterHeaderCard>


            {/* <Card sx={ {maxWidth:1600, alignItems:'center', maxHeight:1000}}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4"  sx={{ textAlign:'center'}} color="#000066" gutterBottom >
                         About SM Computers
                        </Typography>

                        <Typography variant="h5" gutterBottom>
                        Discover Our Story...
                        </Typography>
                     </CardContent>
                    <CardMedia
                        component="img"
                        height="400"
                        image ="https://www.superiorcomputers.ca/wp-content/uploads/2020/03/the-top-5-computer-stores-in-london-ontario.jpg"
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
            </Card>  */}
            </Box>
        </Box>
        </Box>
      </Box>
    );
  }