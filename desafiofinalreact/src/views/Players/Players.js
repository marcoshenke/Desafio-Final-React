import React, { useEffect, useState } from "react";
import { NavBar, FooterPag } from "components";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import api from "../../service/api";
import { useForm } from "react-hook-form";


const Players = () => {
  const [playerName, setPlayerName] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getPlayer = async (playerName) => {
    
    const players = await api.get('/players', {params: {search: playerName }} )
    
    console.log(players.data.data)
    setPlayerName(players.data.data)  
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true)
    getPlayer(data.playerName)
    setIsLoading(false)
  }  


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
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Digite o nome de um jogador para encontrar seus dados</label>
          <input {...register("playerName")} type="text" onChange={(event) => {setPlayerName(event.target.value)}} />
          <input type="submit" value="Procurar" />
        </form>
      </Box>
       <Box>
        {isLoading? <h1>estamos buscando a informação</h1>:<h1>Carregou</h1>}       
       </Box>
       
     
      
      <FooterPag />
    </Box>
  );
};

export default Players;
