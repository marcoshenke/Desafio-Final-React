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
            backgroundPositionX: "-8rem",
            backgroundRepeat: "no-repeat"
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
              color="midnightblue"          
               >Bem-vindo a sua página sobre NBA!</Typography>
            </Box>
            <FooterPag />
        </Box>            
        
    )
}

export default Home