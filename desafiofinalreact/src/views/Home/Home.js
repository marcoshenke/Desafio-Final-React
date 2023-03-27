import React from "react";
import { Box } from "@mui/material";

import { NavBar, FooterPag, WelcomeNba } from "components";
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
        backgroundSize: { sm: "200%", md: "100%", lg: "100%" },
        backgroundPosition: { xs: "-50rem", sm: "0rem" },
      }}
    >
      <NavBar />
      <WelcomeNba
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      />
      <FooterPag />
    </Box>
  );
};

export default Home;
