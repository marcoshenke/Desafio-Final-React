import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  FormLabel,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import { RadioGroup, Radio } from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import helpers from "helpers";

import api from "../../service/api";

const FormNewsLetter = () => {
  const [infos, setInfos] = useState({
    name: "",
    team: "",
    email: "",
    theGoat: "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      team: "",
      email: "",
      theGoat: "",
    },
  });

  const onSubmit = (data) => {
    setInfos(data);
    console.log(data)
    reset();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const teams = await api.get("/teams", { params: { per_page: 30 } });
      setAllTeams(teams.data.data);
    };

    getTeams();
  }, []);



  return (
    <Box my={2} ml={"0.8rem"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <FormLabel>
          <Typography variant="h6">
            Se Cadastre em nossa newsletter sobre NBA
          </Typography>
        </FormLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Seu nome"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        
       <Controller 
       control={control}
       name="team"
       default=""
       render={({field}) => (
        <Select {...field} sx={{width: '14.5rem'}}>
          {allTeams?.map((team) => (
             <MenuItem value={`${team.full_name}`} >{team.full_name}</MenuItem>
          ))}         
        </Select>
       )}
       />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Seu e-mail"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <FormLabel sx={{ fontWeight: "bold" }}>
          Quem para você é o melhor jogador?
        </FormLabel>
        <Controller
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value="Michael Jordan"
                control={<Radio />}
                label="Michael Jordan"
              />
              <FormControlLabel
                value="Lebron James"
                control={<Radio />}
                label="Lebron James"
              />
            </RadioGroup>
          )}
          name="theGoat"
          control={control}
        />
        <Box pt={"0.2rem"}>
          <Button variant="outlined" onClick={handleClickOpen} type="submit">
            Cadastrar
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Cadastrado com sucesso!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Box>
                  {helpers.upperCase(infos.name)}, torcedor do{" "}
                  {helpers.upperCase(infos.team)}, fique de olho no seu e-mail{" "}
                  {helpers.upperCase(infos.email)}, lá enviaremos notícias sobre
                  a NBA e talvez sobre o seu GOAT escolhido, que foi o{" "}
                  {helpers.upperCase(infos.theGoat)}!                  
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fechar</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewsLetter;
