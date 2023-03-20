import React, { useState, useEffect } from "react";
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
  const [playersInfos, setPlayersInfos] = useState([]);

  
  const getPlayer = async (playerName) => {
    const players = await api.get("/players", {
      params: { search: playerName },
    });

    console.log(players.data.data);
    setPlayersInfos(players.data.data);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    getPlayer(data.playerName);
    console.log(data);
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
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Digite o nome de um jogador para encontrar seus dados</label>
          <input {...register("playerName")} type="text" />
          <input type="submit" value="Procurar" />
        </form>
      </Box>
      <Box>
        {playersInfos?.map((playerInfo) => (
          <p>{playerInfo?.first_name} {playerInfo?.last_name}</p>
        ))}
      </Box>

      <FooterPag />
    </Box>
  );
};

export default Players;
