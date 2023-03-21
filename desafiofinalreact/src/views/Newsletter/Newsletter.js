import React from "react"

import {  Box } from '@mui/material'

import {FooterPag, NavBar, FormNewsLetter} from 'components'

const Newsletter = () => {
    return (
        <Box
        sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
            <NavBar />

            <FormNewsLetter/>


            <FooterPag/>
        </Box>
    )
}

export default Newsletter