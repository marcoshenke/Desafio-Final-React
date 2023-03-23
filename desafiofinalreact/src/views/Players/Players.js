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
  TextField,
  Button,
} from "@mui/material";
import api from "../../service/api";
import { useForm, Controller } from "react-hook-form";

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

  useEffect(() => {
    getPlayer();
  }, []);

  const onSubmit = (data) => {
    getPlayer(data.playerName);
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
      <Box
      sx={{alignSelf: "center"}}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Digite o nome de um jogador para encontrar seus dados</label>
          <Box>
            <TextField {...register("playerName")} type="text" />
            <Button type="submit">Procurar</Button>
          </Box>
        </form>
      </Box>
      <Box
       sx={{alignSelf: "center"}}
      >
        <p>{status}</p>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                  <TableCell>
                      Nome
                  </TableCell>
                  <TableCell>
                    Posição
                  </TableCell>
                  <TableCell>
                    Altura
                  </TableCell>
                  <TableCell>
                    Peso
                  </TableCell>
                  <TableCell>
                    Ultimo time em que jogou
                  </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <TableBody>
          
        {playersInfos?.map((playerInfo) => (
          <TableRow>
            <TableCell>
            {playerInfo?.first_name} {playerInfo?.last_name}
            </TableCell>
            <TableCell>
            {playerInfo?.position}
            </TableCell>
            <TableCell>
              {playerInfo?.height_feet},{playerInfo?.height_inches}              
            </TableCell>
            <TableCell>
              {playerInfo?.weight_pounds}
            </TableCell>
            <TableCell>
              {playerInfo?.team.full_name}
            </TableCell>
          </TableRow>
            
          
        ))}
        </TableBody>
        
      </Box>

      <FooterPag />
    </Box>
  );
};

export default Players;
