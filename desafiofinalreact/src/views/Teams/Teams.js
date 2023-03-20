import React, { useEffect, useState } from 'react';
import {NavBar, FooterPag} from 'components'
import {Box, FormLabel, Button} from '@mui/material'
import api from '../../service/api'

const Teams = () => {
    const [teams, setTeams] = useState([])
     
    useEffect(() => {
        const getTeams = async () => {
            const teams = await api.get('/teams', {params: {per_page: 30}})
            console.log(teams)
            setTeams(teams?.data)
        }

        getTeams()
    }, [])
      


    
    
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
            <FooterPag />
        </Box>
    )
}

export default Teams