import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/terms");
  };

  return (
    <Box sx={{ backgroundColor: "#F7F7F7", pt: 8 }}>
      <Container maxWidth="lg">
        {/* Top */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 2fr" },
            gap: 6,
          }}
        >
          {/* Left */}
          <Box>
            <Typography variant="h4" fontWeight={600} mb={3}>
              Contact US
            </Typography>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                maxWidth: 360,
                mb: 3,
              }}
            >
              <TextField
                placeholder="Enter your email address"
                fullWidth
                size="small"
              />
              <IconButton
                sx={{
                  backgroundColor: "#9c7b4a",
                  color: "#fff",
                  borderRadius: 2,
                  "&:hover": { backgroundColor: "#8a6b3f" },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>

            {/* Info */}
            <Stack direction="row" spacing={4} mb={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">UAE, Dubai</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+971-XXX-XXXX</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            {[
              ["Linkedin", "Instagram"],
              ["Dribbble", "Twitter"],
              ["Behance", "WhatsApp"],
              ["Awwwards", "Telegram"],
            ].map((row, i) => (
              <Box key={i}>
                {row.map((item) => (
                  <Typography
                    key={item}
                    variant="body1"
                    sx={{
                      color: "#808080",
                      mb: 1,
                      cursor: "pointer",
                      "&:hover": { color: "text.primary" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            pb: 5,
          }}
        >
          <Typography
            variant="body2"
            component="a"
            onClick={handleExplore}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "primary.dark",
              },
            }}
          >
            © services pro - 2025 All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton size="small">
              <Image
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
              />
            </IconButton>
            <IconButton size="small">
              <Image
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                width={25}
                height={25}
              />
            </IconButton>
            <IconButton size="small">
              <Image src="/assets/icons/x.svg" alt="X" width={25} height={25} />
            </IconButton>
            <IconButton size="small">
              <Image
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
              />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
