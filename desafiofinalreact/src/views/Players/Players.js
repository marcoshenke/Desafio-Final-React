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
  Typography,
  FormLabel,
  Grid,
} from "@mui/material";
import api from "../../service/api";
import { useForm } from "react-hook-form";
import helpers from "helpers";

const Players = () => {
  const [playersInfos, setPlayersInfos] = useState([]);
  const [status, setStatus] = useState("");
  const { register, handleSubmit } = useForm();

  const getPlayer = async (playerName) => {
    setStatus(
      <Typography variant="h4" color="secondary">
        "Carregando..."
      </Typography>
    );
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
      <Box sx={{ alignSelf: "center" }} my="2rem">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FormLabel>
            <Typography variant="h5" fontWeight="bold">
              Digite o nome de um jogador para encontrar os dados dele
            </Typography>
          </FormLabel>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <TextField
              {...register("playerName")}
              type="text"
              sx={{ width: "60%" }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "40%", fontSize: "1.5rem" }}
            >
              Procurar
            </Button>
          </Box>
        </form>
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ alignSelf: "center" }} my="1rem">
          <p>{status}</p>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Nome
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Posição
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Altura(metros)
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Peso(kilogramas)
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Ultimo time em que jogou / Atualmente joga
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                    Editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playersInfos?.map((playerInfo) => (
                  <TableRow>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      {playerInfo?.first_name} {playerInfo?.last_name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      {helpers.positionConverter(playerInfo?.position)}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      {helpers.feetConverter(
                        `${playerInfo?.height_feet}.${playerInfo?.height_inches}`
                      )}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      {helpers.poundsConverter(playerInfo?.weight_pounds)}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      {playerInfo?.team.full_name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.3rem" }} align="center">
                      <Button variant="outlined" sx={{ fontSize: "1.3rem" }}>
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <FooterPag />
    </Box>
  );
};

export default Players;
