import React, { useState } from "react"
import {NavBar, FooterPag} from 'components'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import api from '../../service/api'
import { useForm } from "react-hook-form";


  
   

const Players = () => {
    const [players, setPlayers] = useState()

    const getPlayer = async (nomeDoJogador) => {
        const response = await api.get(`/players?search=${nomeDoJogador}`)

        setPlayers(response?.data)        
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
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
                <label>Digite o nome de um jogador para encontrar seus dados</label>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <input type="submit"  onClick={getPlayer}/>
                </form>                         
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Sobronome</TableCell>
                            <TableCell>Altura</TableCell>
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <FooterPag />
        </Box>
    )
}

export default Players