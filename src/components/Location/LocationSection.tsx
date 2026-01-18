import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

const LocationSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h4" fontWeight={600} mb={1}>
          Where to Find Us
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Visit our office for in-person support, or contact us anytime online
          for questions and assistance.
        </Typography>

        <Divider sx={{ mb: 5 }} />

        {/* Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "flex-start",
          }}
        >
          {/* Left Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Column 1 */}
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={1}>
                Contact
              </Typography>
              <Stack spacing={0.5} mb={2} color={"#808080"}>
                <Typography variant="body2">+971 XXX XXX</Typography>
                <Typography variant="body2">support@yourservice.ae</Typography>
                <Typography variant="body2">
                  XYZ Government Services Center
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} mb={3}>
                <IconButton size="small">
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    width={35}
                    height={35}
                  />
                </IconButton>
                <IconButton size="small">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    width={35}
                    height={35}
                  />
                </IconButton>
                <IconButton size="small">
                  <Image
                    src="/assets/icons/x.svg"
                    alt="X"
                    width={35}
                    height={35}
                  />
                </IconButton>
                <IconButton size="small">
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    width={35}
                    height={35}
                  />
                </IconButton>
              </Stack>

              <Button
                variant="contained"
                startIcon={<LocationOnIcon />}
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Get Direction
              </Button>
            </Box>

            {/* Divider بين العمودين */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Column 2 */}
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={1}>
                Hours
              </Typography>
              <Stack spacing={0.5} mb={2} color={"#808080"}>
                <Typography variant="body2">Mon - 08:00 - 14:00</Typography>
                <Typography variant="body2">Tue - 08:00 - 14:00</Typography>
                <Typography variant="body2">Wed - 08:00 - 15:00</Typography>
                <Typography variant="body2">Thu - 08:00 - 17:00</Typography>
                <Typography variant="body2">Fri - 08:00 - 17:00</Typography>
                <Typography variant="body2">Sat - Closed</Typography>
                <Typography variant="body2">Sun - Closed</Typography>
              </Stack>
            </Box>
          </Box>

          {/* Map */}
          <Box
            sx={{
              width: "90%",
              height: 280,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationSection;
