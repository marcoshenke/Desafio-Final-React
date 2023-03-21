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
    <Box mt={2}  >
      <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}} >
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              sx={{width: '50%'}}    
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
              sx={{width: '50%'}}              
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
              sx={{width: '50%'}}              
            />                 
          )}
          name="email"
          control={control}
        />
        
          
        <Box pt={2}>
          <Button type="submit">Cadastre-se</Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormNewsLetter;
