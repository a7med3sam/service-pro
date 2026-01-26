import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

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
    <Typography variant="h3" fontWeight="bold" gutterBottom>
      Committed to Delivering <br /> Trusted Government Services
    </Typography>

    <Typography sx={{ maxWidth: 600, mb: 4, fontSize: 16 }}>
      We simplify complex government procedures by offering reliable support, document handling, 
      and transparent tracking—ensuring your applications are processed accurately and on time.
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

export default AboutUsHero;
