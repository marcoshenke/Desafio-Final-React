import React from 'react';

import {AppBar, Container, Box, Typography  } from '@mui/material';


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
        <Box
       
        >
          <Typography variant='h6'>Entre em contato: nbanews@nbanews.com</Typography>
        </Box>
        
      </Container>
    </AppBar>
  );
}
export default NavBar;
