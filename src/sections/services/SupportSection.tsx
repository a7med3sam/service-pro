import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const SupportSection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Box
        sx={{
          position: "relative",
          height: 220,
          borderRadius: "20px",
          overflow: "hidden",
          backgroundImage: "url('/assets/home/welcome.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <Box
  sx={{
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(56, 42, 18, 0.32)",
    backdropFilter: "blur(3px)",
  }}
/>


        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
            color: "#fff",
            px: 2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            gutterBottom
          >
            Need help with your government service request?
          </Typography>

          <Typography sx={{ mb: 3 }}>
            We’re here to support you every step of the way.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#3c3420",
              borderRadius: "10px",
              px: 3,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SupportSection;
