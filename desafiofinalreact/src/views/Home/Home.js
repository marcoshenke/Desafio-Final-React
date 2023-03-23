import React from "react";
import { Box, Typography } from "@mui/material";

import { NavBar, FooterPag } from "components";
import nba from "../../images/nba.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${nba})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { sm: "100%", md: "100%", lg: "100%" },
        backgroundPosition: { xs: "-50rem", sm: "0rem" },
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: {sm: "-13rem", lg: "-20rem"},
        }}
      >
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            backgroundColor: "darkblue",
            opacity: "88%",
            borderRadius: {xs: "1rem", lg: "5rem"},
            width: {xs: 'none', sm: '40rem', lg: "61rem"},
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Bem-vindo a sua página sobre NBA!
        </Typography>
      </Box>
      <FooterPag />
    </Box>
  );
};

export default Home;
