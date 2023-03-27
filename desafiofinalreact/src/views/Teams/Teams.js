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
  Grid,
  Typography,
} from "@mui/material";
import api from "../../service/api";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const getTeams = async () => {
      setLoading("Carregando...");
      const teams = await api.get("/teams", { params: { per_page: 30 } });
      setLoading("");
      console.log(teams.data.data);
      setTeams(teams.data.data);
    };

    getTeams();
  }, []);

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
      <Grid
        container
        direction={{ xm: "none", lg: "column" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Esse são os times da NBA:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Nome
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Cidade
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Conferência
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                    Abreviação
                  </TableCell>
                </TableRow>
              </TableHead>
              <h1> {loading} </h1>
              <TableBody>
                {teams?.map((team) => (
                  <TableRow>
                    <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      {team?.full_name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      {team?.city}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      {team?.conference}
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.5rem" }} align="center">
                      {team?.abbreviation}
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

export default Teams;
