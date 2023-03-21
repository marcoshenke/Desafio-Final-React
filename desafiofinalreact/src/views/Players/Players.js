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
  const [status, setStatus] = useState("");
  const { register, handleSubmit } = useForm();

  const getPlayer = async (playerName) => {
    setStatus("Carregando...");
    const players = await api.get("/players", {
      params: { search: playerName },
    });
    setPlayersInfos(players.data.data);
    setStatus("");
  };

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
        <p>{status}</p>
        {playersInfos?.map((playerInfo) => (
          <p>
            {playerInfo?.first_name} {playerInfo?.last_name}
          </p>
        ))}
      </Box>

      <FooterPag />
    </Box>
  );
};

export default Players;
