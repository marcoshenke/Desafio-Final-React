import * as React from "react";
import { Box, Alert, IconButton, Collapse, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import basketball from "../../images/basketball.png";


const WelcomeNba = () => {
  const [open, setOpen] = React.useState(true);
  
  return (
    <Box sx={{ width: {xs: '100%', lg:"60%"}, position: 'absolute', right: {xs: '0%',lg: '5%'}, top: '38%',  }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="white"
              size="large"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, backgroundColor: "darkblue", color: "white" }}
        >
          <Typography variant="h5">Bem vindo ao melhor site para entender tudo sobre NBA!</Typography>
          
        </Alert>
      </Collapse>

      <img
        onClick={() => {
          setOpen(true);
        }}
        style={{ width: "10rem", cursor: 'pointer'}}
        alt="basketball"
        src={basketball}
      />
    </Box>
  );
};

export default WelcomeNba;
