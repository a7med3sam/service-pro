import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  return (
   <Box
  sx={{
    height: "100vh",
    backgroundImage: "url('/assets/home/home.jpg')",
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

    <Typography sx={{ maxWidth: 600, mb: 4, fontSize: 16, color: "#E0E0E0" }}>
      A secure and streamlined platform that helps you submit requests,
      upload documents, and track your government service progress with full
      transparency.
    </Typography>

    <Link href="/services" passHref>
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
    </Link>
  </Container>
</Box>

  );
};

export default Hero;
