import React from "react"
import {Box} from '@mui/material'

import {NavBar, FooterPag} from 'components'



const Home = () => {
    return (
        <Box 
        sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' 
        }}
        >
            <NavBar />
            <Box>
               Bem-vindo a sua página de estatistica da NBA
            </Box>
            <FooterPag />
        </Box>            
        
    )
}

export default Home