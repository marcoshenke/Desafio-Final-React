import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import { useState } from "react";

const FormNewsLetter = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
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
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              sx={{ width: "40%" }}
              {...register("Name")}
              name="Name"
            />
          )}
          name="Name"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Qual time torce?"
              sx={{ width: "40%" }}
              {...register("Team")}
              name="Team"
            />
          )}
          name="Team"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="E-mail"
              error={!!errors?.email}
              helperText={errors?.email?.message}
              sx={{ width: "40%" }}
              {...register("E-mail")}
              name="E-mail"
            />
          )}
          name="E-mail"
          control={control}
        />
        <Box>
          <FormLabel id="theGOAT">
            Para você quem é o melhor de todos os tempos?
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="theGOAT" {...field}>
                <FormControlLabel
                  value="michaeljordan"
                  control={<Radio />}
                  label="Michael Jordan"
                />
                <FormControlLabel
                  value="lebronjames"
                  control={<Radio />}
                  label="Lebron James"
                />
              </RadioGroup>
            )}
            name="RadioGroup"
            control={control}
          />
        </Box>

        <Box pt={2}>
          <Button type="submit">Cadastre-se</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewsLetter;
