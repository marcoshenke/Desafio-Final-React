import { Container, ThemeProvider } from '@mui/system'
import React from 'react'
import LogoNba from '../../images/logo-nba.png'
import {theme} from '../../theme'



const NbaLogo = () => {
    return (
       <ThemeProvider theme={theme}>
            <Container sx={{maxWidth: 1}}>
            <img alt='nba-logo' src={LogoNba}  ></img>
            </Container>            
       </ThemeProvider>
       
        
    )
}

export default NbaLogo