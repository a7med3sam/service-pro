import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    
    document.cookie = "isLoggedIn=true; path=/; max-age=3600; SameSite=Lax";

    
    router.replace("/my-services");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/home/wp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(255deg, #4242423D 23.92%, #212121D6 83.92%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <Box color="#fff">
            <Typography sx={{ fontSize: 28, fontWeight: 600, mb: 2 }}>
              Government of Ajman
            </Typography>

            <Typography sx={{ fontSize: 42, fontWeight: 700, mb: 2 }}>
              welcome to ajman
            </Typography>

            <Typography sx={{ maxWidth: 420, color: "rgba(255,255,255,0.8)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          {/* Right Card */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "24px",
              p: 5,
              maxWidth: 420,
              width: "100%",
              ml: "auto",
              boxShadow: "0px 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            {/* Header */}
            <Typography sx={{ fontSize: 12, color: "text.secondary", mb: 1 }}>
              {isSignup ? "LET’S GET YOU STARTED" : "WELCOME BACK"}
            </Typography>

            <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 4 }}>
              {isSignup ? "Create an Account" : "Log In to your Account"}
            </Typography>

            {/* Signup Fields */}
            {isSignup && (
              <>
                <TextField
                  label="First Name"
                  defaultValue="Johnson"
                  fullWidth
                  sx={{ mb: 3 }}
                />
                <TextField
                  label="Last Name"
                  defaultValue="Doe"
                  fullWidth
                  sx={{ mb: 3 }}
                />
                <TextField
                  label="Number"
                  defaultValue="+971 2334 334 3433"
                  fullWidth
                  sx={{ mb: 3 }}
                />
              </>
            )}

            {/* Common Fields */}
            <TextField
              label="Email"
              defaultValue="johnsondoe@nomail.com"
              fullWidth
              sx={{ mb: 3 }}
            />

            <TextField
              label="Password"
              defaultValue="************"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
            />

            {/* Remember me (Login only) */}
            {!isSignup && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <FormControlLabel control={<Checkbox />} label="Remember me" />

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#8D744C",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Box>
            )}

            {/* Submit Button */}
            <Button
              fullWidth
              sx={{ bgcolor: "#8D744C", color: "#fff" }}
              onClick={async () => {
                await fetch("/api/login", { method: "POST" });

                document.cookie = "isLoggedIn=true; path=/; max-age=3600";

                router.replace("/my-services");
              }}
            >
              {isSignup ? "GET STARTED" : "CONTINUE"}
            </Button>

            <Divider sx={{ my: 3 }}>Or</Divider>

            {/* Social */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mb: 2, borderRadius: "10px", py: 1.3 }}
            >
              {isSignup ? "Sign up with Google" : "Log In with Google"}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ borderRadius: "10px", py: 1.3 }}
            >
              {isSignup ? "Sign up with Facebook" : "Log In with Facebook"}
            </Button>

            {/* Toggle */}
            <Typography
              textAlign="center"
              mt={4}
              fontSize={14}
              color="text.secondary"
            >
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsSignup(false)}
                    style={{
                      color: "#8D744C",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    LOGIN HERE
                  </span>
                </>
              ) : (
                <>
                  New User?{" "}
                  <span
                    onClick={() => setIsSignup(true)}
                    style={{
                      color: "#8D744C",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    SIGN UP HERE
                  </span>
                </>
              )}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
