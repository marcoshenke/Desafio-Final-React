import React from "react"
import {Box, Typography} from '@mui/material'

import {NavBar, FooterPag} from 'components'
import nba from "../../images/nba.jpg"



const Home = () => {
    return (
        <Box 
        sx={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundImage: `url(${nba})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: {sm: '100%', md: '100%', lg:'100%'},
            backgroundPosition: {xs: '-50rem', sm: '0rem'}
        }}
        >
            <NavBar />
            <Box
            sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            mb: "20rem"
            }}
            >
               <Typography 
               variant= "h2" 
               fontWeight= "bold"
              color="secondary"
              sx={{
                backgroundColor: "darkblue",
                opacity: '80%'
              }}          
               >Bem-vindo a sua página sobre NBA!</Typography>
            </Box>
            <FooterPag />
        </Box>            
        
    )
}

export default Home