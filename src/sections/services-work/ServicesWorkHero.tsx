"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const ServicesWorkHero = () => {
  const router = useRouter();

  const isLoggedIn =
    typeof window !== "undefined" &&
    document.cookie.includes("isLoggedIn=true");

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      router.push(`/login?redirect=/services-get-started`);
    } else {
      router.push("/services-get-started");
    }
  };

  return (
    <Box
      sx={{
        height: "550px",
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
        <Typography variant="h3" fontWeight="500" gutterBottom>
          Services
        </Typography>
        <Typography variant="h3" fontWeight="500" gutterBottom>
          Work Permit Issuance
        </Typography>

        <Typography
          sx={{ maxWidth: 600, mb: 4, fontSize: 16, color: "#E0E0E0" }}
        >
          This service allows companies to apply for a new work permit for
          employees. Our team handles document preparation, verification, and
          submission through the official MOHRE system, ensuring compliance with
          regulations and timely processing.
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
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default ServicesWorkHero;
