import React from "react";
import { NavBar, FooterPag, FormNewsLetter } from "components";
import {
  Box
  
} from "@mui/material";

const Newsletter = () => {
  

  return (
    <Box
      sx={{
        minWidth: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        
      }}
    >
      <NavBar />
     
      <FormNewsLetter/>

      <FooterPag />
    </Box>
  );
};

export default Newsletter;
