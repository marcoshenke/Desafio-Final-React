import React from 'react';

import {AppBar, Container, Box  } from '@mui/material';


import {theme} from '../../theme'
import NbaLogo  from '../NbaLogo'



function NavBar() {
 
  return (
    <AppBar position="static" theme={theme} color='secondary'>
      <Container maxWidth="xlg"
      sx={{display: "flex", flexDirection: "row-reverse"}}
      >
        <Box disableGutters>
          <NbaLogo />          
        </Box>
        <Box>
          <h3>Entre em contato conosco: nbanews@nbanews.com</h3>
        </Box>
        
      </Container>
    </AppBar>
  );
}
export default NavBar;
