import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'



export default function ImageAboutUs(){
    return(
      <Card sx={ {maxWidth:500, alignItems:'end'}}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="200"
          image ="E:\Project\computershopproject\src\Cards\images\aboutus.png"
         />

          <CardContent>
          <Typography variant="body1" >
      Established in 2008, SM Computer Solutions has strives to be one of the leading retailers for branded & customization computers and related products in today’s market. Our many years of experience has provided us with the expertise to cater you; our valued customers with the latest technology, while providing an excellent service that would culminate in providing you the best available products. SM Computer Solutions has always been the stable backdrop for many PC enthusiasts in the face of rising enthusiasm for high-end computer gaming and custom-built PCs. Thus, enabling the dreams of making one's own computer that would fit all of one's needs come true.
  
  We believe in your passion, as fellow PC enthusiasts, we would be more than glad to provide you with any assistance when you're looking for branded computer solutions. If you visit our store, it would be possible for you to see for yourself the latest products that we have in our showroom, sourced from the international market. We specialize in making available the latest technology as soon as it is released worldwide. In fact, you would be able to observe that most products on our shelves are less than 30 days old! It is this quality and the service that has earned SM Computer Solutions the untarnished reputation that it has had throughout the years.
      </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
