import { Add, AutoStories, Backup, Bookmark, Build, DarkMode, Groups, Home, Inbox, MoodRounded, Person, Settings } from '@mui/icons-material'
import { Box, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({ setMode,mode }) => {
  return (
    <Box flex={2} sx={{ display:{xs:"none",sm:"flex"},pl:"30px"}}>
      <Box position="fixed" height="90vmin">
      <List>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Home /> 
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Build /> 
              </ListItemIcon>
              <ListItemText primary="Tools" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <AutoStories /> 
              </ListItemIcon>
              <ListItemText primary="Stories" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Groups /> 
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Settings /> 
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Bookmark /> 
              </ListItemIcon>
              <ListItemText primary="Bookmark" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <Backup /> 
              </ListItemIcon>
              <ListItemText primary="Backup" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
            <Switch onClick={() => setMode(mode === "light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      <Fab sx={{ position:"absolute", left:"0px",bottom:"10px", bgcolor:"primary.dark", "&:hover":{bgcolor:"primary.light"}}}>
        <Add />
      </Fab>
      </Box>
    </Box>
  )
}

export default Sidebar