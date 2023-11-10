import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, IconButton, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react';
import lizard from "../lizard.jpg";
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import images from "./images";

const Content = () => {
    return (
        <Box flex={4} >
            <Container>
                <ImageList cols={1} sx={{ display:"flex",justifyContent:"center"}}>
                    <ImageListItem>
                { images.map((img,ind) => {
                return (
                    <Card sx={{ marginBlock:"10px"}} key={ind}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error"/>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        </CardActions>
        </Card>)})}
        </ImageListItem>
                    </ImageList>
                    </Container>
        </Box>
    )
}

export default Content;