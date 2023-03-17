import React from "react"
import {NavBar, FooterPag} from 'components'
import { Box } from "@mui/material"

const Players = () => {
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
            <FooterPag />
        </Box>
    )
}

export default Players