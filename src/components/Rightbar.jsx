import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react';
import images from "./images";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import pic5 from "../img/pic5.jpg";

const Rightbar = () => {
  return (
    <Box  flex={3}  sx={{ display:{xs:"none",sm:"flex"}}}>
      <Box position="fixed" height="90vmin">
       <Typography variant="h6">Online friends</Typography>
       <AvatarGroup max={7}>
        {
          images.map((img,ind) => {
            return(<Avatar src={img}key={ind}/>)
          })
        }
       </AvatarGroup>
       <Typography variant="h6">Photos</Typography>
       <ImageList rowHeight={120} gap={5} cols={3}>
        { [0,1,3].map((image,ind) => {
          return(
          <ImageListItem key={ind}>
           <img src="https://picsum.photos/100"/>
          </ImageListItem>)})}
       </ImageList>
       <Typography variant="h6">Latest conversations</Typography>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={pic3} sx={{ bgcolor: "red" }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={pic4} sx={{ bgcolor: "red" }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={pic5} sx={{ bgcolor: "red" }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>
      </Box>
      </Box>
  )
}

export default Rightbar