import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const AboutUsHero = () => {
  return (
   <Box
  sx={{
    height: "100vh",
    backgroundImage: "url('/assets/home/delivering.png')",
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
      Your Trusted Gateway to <br /> Government Services
    </Typography>

    <Typography sx={{ maxWidth: 600, mb: 4, fontSize: 16 }}>
      A secure and streamlined platform that helps you submit requests,
      upload documents, and track your government service progress with full
      transparency.
    </Typography>

    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "#8b6b3d",
        px: 4,
        py: 1.5,
        borderRadius: 3,
        "&:hover": {
          backgroundColor: "#745832",
        },
      }}
    >
      Start Your Service
    </Button>
  </Container>
</Box>

  );
};

export default AboutUsHero;
