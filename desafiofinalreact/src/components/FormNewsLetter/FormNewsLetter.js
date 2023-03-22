import { useState } from "react";
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
} from "@mui/material";
import * as React from "react";
import { RadioGroup, Radio } from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

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
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <FormLabel>Se Cadastre em nossa newsletter sobre NBA</FormLabel>
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
          name="team"
          control={control}
          render={({ field }) => <TextField {...field} label="Seu time" />}
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
        <FormLabel>Quem para você é o melhor jogador?</FormLabel>
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
        <Box pt={2}>
          <Button variant="outlined" onClick={handleClickOpen} type="submit">
            Open alert dialog
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
               {infos.name}, torcedor do {infos.team}, verique seu e-mail {infos.email},  lá enviaremos notícias sobre a NBA e talvez sobre o seu GOAT escolhido, que foi o {infos.theGoat}!
               </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fechar</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </form>
      <Box></Box>
    </Box>
  );
};

export default FormNewsLetter;
