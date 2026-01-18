import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const AboutUsHero = () => {
  return (
   <Box
  sx={{
    height: "460px",
    backgroundImage: "url('/assets/home/people2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  }}
>
  {/* Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.55)",
    }}
  />

  <Container
    sx={{
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      Services
    </Typography>
  </Container>
</Box>

  );
};

export default AboutUsHero;
