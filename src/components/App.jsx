import { Box, Stack,ThemeProvider,createTheme} from '@mui/material';
import React from 'react';
import "../styles/App.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Content from './Content';
import { useState } from 'react';

const App = () => {
  const [mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Stack bgcolor="background.default" color="text.primary">
      <Navbar mode={mode}/>
      <Stack direction="row">
      <Sidebar setMode={setMode} mode={mode}/>
      <Content />
      <Rightbar />
      </Stack>
    </Stack>
    </ThemeProvider>
  )
}

export default App;