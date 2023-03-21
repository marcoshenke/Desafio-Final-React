import React, { useEffect, useState } from "react";
import { NavBar, FooterPag } from "components";
import {
  Box,
  FormLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import api from "../../service/api";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teams = await api.get("/teams", { params: { per_page: 30 } });
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
      <Box>
        Esse são todos os times da NBA:
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Cidade</TableCell>
                <TableCell align="right">Conferência</TableCell>
                <TableCell align="right">Abreviação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams?.map((team) => (
                <TableRow>
                  <TableCell>{teams?.full_name}</TableCell>
                  <TableCell>{teams?.city}</TableCell>
                  <TableCell>{teams?.conference}</TableCell>
                  <TableCell>{teams?.abbreviation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FooterPag />
    </Box>
  );
};

export default Teams;
