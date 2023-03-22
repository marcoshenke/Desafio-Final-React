import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Box, FormLabel, Select, FormControlLabel } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import { useState } from "react";
import { RadioGroup, Radio } from "@material-ui/core";


const FormNewsLetter = () => {
  const [infos, setInfos] = useState({ name: "", team: "", email: ""});

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
    },
  });

  const onSubmit = (data) => {
    setInfos(data);
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
            <RadioGroup name="theGoat" {...field}>
              <FormControlLabel
                value="Michael Jordan"
                control={<Radio />}
                label="Michael Jordan"
              />
              <FormControlLabel 
              value="Lebron James" 
              control={<Radio />} 
              label="Lebron James" />
            </RadioGroup>
          )}
          name="RadioGroup"
          control={control}
        />
        <Box pt={2}>
          <Button type="submit">Cadastre-se</Button>
        </Box>
      </form>
      <Box>
        <h1>{infos.name}</h1>
        <h1>{infos.team}</h1>
        <h1>{infos.email}</h1>       
      </Box>
    </Box>
  );
};

export default FormNewsLetter;
