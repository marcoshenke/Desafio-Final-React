import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
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

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            />
          )}
          name="name"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Qual time torce?"
              sx={{ width: "40%" }}
              {...register("Team")}
            />
          )}
          name="team"
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
            />
          )}
          name="email"
          control={control}
        />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Quem para você é o maior de todos os tempos?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="michaelJordan"
              control={<Radio />}
              label="Michael Jordan"
            />
            <FormControlLabel value="lebronJames" control={<Radio />} label="Lebron James" />
          </RadioGroup>
        </FormControl>

        <Box pt={2}>
          <Button type="submit">Cadastre-se</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewsLetter;
