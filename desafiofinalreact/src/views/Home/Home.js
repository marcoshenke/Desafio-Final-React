import React from "react";
import { Box, Typography } from "@mui/material";

import { NavBar, FooterPag } from "components";
import nba from "../../images/nba.jpg";

import basketball from "../../images/basketball.png"

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
          mb: {xs:"-14rem", sm: "-13rem", lg: "-28rem"},
        }}
      >
        <Typography
          fontSize={{xs:'1.2rem', lg:'4rem'}}
          color="secondary"
          sx={{
            backgroundColor: "darkblue",
            borderRadius: {xs: "1rem", lg: "5rem"},
            width: {xs: 'none', sm: '40rem', lg: "65rem"},
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Bem-vindo a sua página sobre NBA!
          <img style={{width: '7rem'}}alt="basktball" src={basketball}/>
        </Typography>
      </Box>
      <FooterPag />
    </Box>
  );
};

export default Home;
