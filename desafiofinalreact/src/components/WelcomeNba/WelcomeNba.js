import * as React from "react";
import { Box, Alert, IconButton, Collapse, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import basketball from "../../images/basketball.png";

const WelcomeNba = () => {
  const [open, setOpen] = React.useState(true);
  const [hoverImage, setHoverImage] = React.useState(false);

  return (
    <Box sx={{ width: "60%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="white"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, backgroundColor: "darkblue", color: "white" }}
        >
          Bem vindo ao melhor site para entender tudo sobre NBA!
        </Alert>
      </Collapse>

      <img
        onClick={() => {
          setOpen(true);
        }}
        onMouseEnter={() => setHoverImage(true)}
        onMouseLeave={() => setHoverImage(false)}
        style={{ width: "7rem" }}
        alt="basktball"
        src={basketball}
      />
    </Box>
  );
};

export default WelcomeNba;
