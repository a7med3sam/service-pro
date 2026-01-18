import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const features = [
  {
    title: "Experienced Team",
    icon: "/assets/icons/two.svg",
  },
  {
    title: "Smart Guidance",
    icon: "/assets/icons/files.svg",
  },
  {
    title: "Fast Processing",
    icon: "/assets/icons/rocket.svg",
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        flexWrap: "wrap",
      }}
    >
      {/* Left Images */}
      <Box
        sx={{
          position: "relative",
          flex: "1 1 450px",
          maxWidth: 400,
          height: { xs: 400, md: 460 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "10%",
            borderBottomRightRadius: "10%",
            background: "linear-gradient(to bottom, #101828, #8D744C)",
          }}
        />

        <Box
          component="img"
          src="assets/home/welcome.png"
          sx={{
            width: { xs: "90%", md: "110%" },
            borderRadius: 3,
            position: "absolute",
            top: { xs: 20, md: 30 },
            left: { xs: "-20%" },
            boxShadow: 5,
            zIndex: 1,
            objectFit: "cover",
          }}
        />

        <Box
          component="img"
          src="assets/home/tech.jpg"
          sx={{
            width: { xs: "60%", md: "65%" },
            maxWidth: "100%",
            borderRadius: 3,
            position: "absolute",
            bottom: { xs: 20, md: 20 },
            right: { xs: "-5%" },
            boxShadow: 6,
            zIndex: 2,
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          flex: "1 1 450px",
          maxWidth: 520,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          A Smarter Way to Access Government Services
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Our platform simplifies the entire process – from requesting a
          service, to uploading the required documents, to receiving real-time
          updates.
        </Typography>

        {features.map((item, i) => (
          <Box
            key={i}
            sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "#f1e3cf",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
            </Box>
            <Typography fontWeight="500">{item.title}</Typography>
          </Box>
        ))}

        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 4,
            py: 1.2,
            borderRadius: 3,
            bgcolor: "#111827",
            "&:hover": { bgcolor: "#000" },
          }}
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
}
