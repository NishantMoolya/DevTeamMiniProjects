import styled from '@emotion/styled'
import { Home, Mail, Notifications, Person, Search, SearchRounded } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Divider, IconButton, InputBase, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react';
import pic3 from "../pic3.jpg";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"5px"
});


const Navbar = ({ mode }) => {
    const Searchbar = styled("div")(({ theme }) => ({
        height:"35px",
        backgroundColor:mode === "light"?"#ffff":"rgb(95,95,95)",
        display:"none",
        alignItems:"center",
        paddingInline:"10px",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
        },
        borderRadius:theme.shape.borderRadius
    }));
  return (
    <AppBar position="sticky" bgcolor="primary.light">
        <StyledToolbar>
        <Typography variant="h6">Navbar</Typography>
        <Searchbar>
        <InputBase placeholder='search...' sx={{ width:"100%"}}/>
        <Badge color="error">
        <SearchRounded color="action"/>
        </Badge>
        </Searchbar>
        <Stack direction="row" spacing={3} alignItems="center" justifyContent='center'>
            <Stack  direction="row" spacing={2} alignItems="center" sx={{ display:{ xs:"none",sm:"flex"}}}>
        <Badge color="error" badgeContent={4}>
            <Notifications />
        </Badge>
        <Badge color="error" badgeContent={4}>
            <Mail /> 
        </Badge>
            </Stack>
            <Divider orientation='vertical' color="black"/>
        <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar alt="some" bgcolor="success.light" src={pic3}/>
        <Typography variant='body2' sx={{ display:{ xs:"block",sm:"none"}, textAlign:"center"}}>Nishant</Typography>
        </Stack>
        </Stack>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar