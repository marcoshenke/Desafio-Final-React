import React, { useEffect, useState } from 'react';
import {NavBar, FooterPag} from 'components'
import {Box} from '@mui/material'

const Teams = () => {
    const [inputTeam, setInputTeam] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`teams${inputValue}`);
        const data = await response.json();
        setApiData(data);
      };
      


    
    
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