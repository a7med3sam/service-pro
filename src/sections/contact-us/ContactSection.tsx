import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function ContactSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 6,
          }}
        >
          {/* Left Form */}
          <Box>
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 600,
                mb: 4,
              }}
            >
              Leave Us Your Info.
            </Typography>

            {/* Name & Email */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
                mb: 4,
              }}
            >
              <TextField
                label="Your Name"
                defaultValue="John Trangely"
                variant="standard"
                fullWidth
              />

              <TextField
                label="Your Email"
                defaultValue="hello@nrs.com"
                variant="standard"
                fullWidth
              />
            </Box>

            {/* Subject */}
            <TextField
              label="Your Subject"
              defaultValue="I want to..."
              variant="standard"
              fullWidth
              sx={{ mb: 4 }}
            />

            {/* Message */}
            <TextField
              label="Message"
              placeholder="Write to here..."
              variant="standard"
              fullWidth
              multiline
              rows={4}
            />

            <Divider sx={{ my: 4, borderColor: "#B08968" }} />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#101828",
                borderRadius: "8px",
                px: 3,
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#101828",
                },
              }}
            >
              Send Message
            </Button>
          </Box>

          {/* Right Info */}
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                mb: 4,
              }}
            >
              Contact Information
            </Typography>

            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <PhoneOutlinedIcon sx={{ color: "#B08968" }} />
              <Typography color="text.secondary">
                +971 XXX XXXX
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <EmailOutlinedIcon sx={{ color: "#B08968" }} />
              <Typography color="text.secondary">
                support@yourservice.ae
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
              <LocationOnOutlinedIcon sx={{ color: "#B08968" }} />
              <Typography color="text.secondary">
                Dubai, UAE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
