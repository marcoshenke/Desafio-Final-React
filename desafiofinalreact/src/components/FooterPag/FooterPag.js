import React from 'react';

import {AppBar, Toolbar,  Container,  } from '@mui/material';


import {theme} from '../../theme'
import NbaLogo  from '../NbaLogo'



function NavBar() {
 
  return (
    <AppBar position="static" theme={theme} color='secondary'>
      <Container maxWidth="xlg" >
        <Toolbar disableGutters>
          <NbaLogo />          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
