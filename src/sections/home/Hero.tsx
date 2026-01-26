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
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // نص + زر في منتصف الهيرو
          height: "100%", // مهم لتمركز عمودي
          pt: 20,
        }}
      >
        {/* النص الرئيسي */}
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Your Trusted Gateway to <br /> Government Services
        </Typography>

        <Typography
          sx={{
            maxWidth: 600,
            mb: 4,
            fontSize: 16,
            color: "#E0E0E0",
            textAlign: "center",
          }}
        >
          A secure and streamlined platform that helps you submit requests,
          upload documents, and track your government service progress with full
          transparency.
        </Typography>

        {/* الزر */}
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

        {/* Cards Section */}
        <Box
          sx={{
            width: "100%",
            // mt: 6, // مسافة بين النص والكروت
            position: "relative",
            height: 280, // ارتفاع مناسب لاحتواء الصفين
          }}
        >
          {/* الصف الأول */}
          <Box
            component="img"
            src="/assets/home/seha.png"
            alt="Seha"
            sx={{
              position: "absolute",
              top: -50,
              left: 0,
              width: 180,
              height: 120,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              objectFit: "contain",
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            component="img"
            src="/assets/home/tasheel.png"
            alt="Tasheel"
            sx={{
              position: "absolute",
              top: -50,
              right: 0,
              width: 180,
              height: 120,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              objectFit: "contain",
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          />

          {/* الصف الثاني */}
          <Box
            component="img"
            src="/assets/home/identity.png"
            alt="Identity"
            sx={{
              position: "absolute",
              top: 100, // أسفل الصف الأول بمسافة بسيطة
              left: 100, // أقرب للداخل من اليسار
              width: 180,
              height: 120,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              objectFit: "contain",
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            component="img"
            src="/assets/home/hayia.png"
            alt="Hayia"
            sx={{
              position: "absolute",
              top: 100,
              right: 100, // أقرب للداخل من اليمين
              width: 180,
              height: 120,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              objectFit: "contain",
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
