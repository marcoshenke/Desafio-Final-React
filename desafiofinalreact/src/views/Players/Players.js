import React, { useState } from "react";
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
  const [namePlayer, setnamePlayer] = useState();
  const [responseData, setResponseData] = useState(null);

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const Submit = async (event) => {
    event.preventDefault();

  try {
       const response = await api.get(`/players?search=${nomeDoJogador}`)
       setResponseData(response?.data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }    
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  getPlayer = (event) => {
    setInputValue(event.target.value);
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
        <form onSubmit={handleSubmit}>
          <label>Digite o nome de um jogador para encontrar seus dados</label>
          <input type="text" value={namePlayer} onChange={inputChange} />
          <input type="submit" />
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
  );
};

export default Players;
