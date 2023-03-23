import React from "react"
import {Box} from '@mui/material'

import {NavBar, FooterPag} from 'components'
import nba from "../../images/nba.jpg"



const Home = () => {
    return (
        <Box 
        sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            
        }}
        >
            <NavBar />
            <Box
            sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: "center"
            }}
            >
               <h1>Bem-vindo a sua página sobre NBA!</h1>
               <img alt="nba" src={nba} width="70%" height="70%"></img>
            </Box>
            <FooterPag />
        </Box>            
        
    )
}

export default Home