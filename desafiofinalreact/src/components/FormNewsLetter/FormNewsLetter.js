import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";

const FormNewsLetter = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },    
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}             
            />
          )}
          name="name"
          control={control}
        />
        <Box pt={2}>
          <Button type="submit">Enviar</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewsLetter;
