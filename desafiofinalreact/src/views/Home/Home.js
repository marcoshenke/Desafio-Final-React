import React from "react";
import { Box, Typography } from "@mui/material";

import { NavBar, FooterPag, WelcomeNba } from "components";
import nba from "../../images/nba.jpg";

import basketball from "../../images/basketball.png";

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
      <WelcomeNba
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: { xs: "-14rem", sm: "-13rem", lg: "-28rem" },
        }}
      />
      <FooterPag />
    </Box>
  );
};

export default Home;
