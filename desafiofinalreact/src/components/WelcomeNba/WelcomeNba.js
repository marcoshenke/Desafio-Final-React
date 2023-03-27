import * as React from "react";
import { Box, Alert, IconButton, Collapse, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import basketball from "../../images/basketball.png";

const WelcomeNba = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "40%" },
        position: "absolute",
        right: { xs: "0%", lg: "25%" },
        top: "38%",
      }}
    >
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
          sx={{ mb: 2, backgroundColor: "#0E499D", color: "white" }}
        >
          <Typography variant="h5">
            Bem vindo ao NBA Stats, o melhor site (segundo eu mesmo) para entender tudo sobre NBA!
          </Typography>
        </Alert>
      </Collapse>
      <Box
        sx={{
          width: "10rem",
          cursor: "pointer",
          transition: "ease-in-out 0.5s",
          "&:hover": {
            width: "14rem",
          },
        }}
      >
        <img
          style={{ width: "100%" }}
          onClick={() => {
            setOpen(true);
          }}
          alt="basketball"
          src={basketball}
        />
      </Box>
    </Box>
  );
};

export default WelcomeNba;
