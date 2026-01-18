import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  MobileStepper,
  Stack,
} from "@mui/material";

const testimonials = [
  {
    name: "Fatima Al Mansoori",
    location: "Sharjah",
    text: "Great service! They handled everything for my residency renewal, including the medical test and Emirates ID. I didn’t have to visit any center — everything was done online.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai",
    text: "Very smooth process and excellent support. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Ali",
    location: "Abu Dhabi",
    text: "Fast and professional service. Everything was clear and easy.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
    {
    name: "Fatima Al Mansoori",
    location: "Sharjah",
    text: "Great service! They handled everything for my residency renewal, including the medical test and Emirates ID. I didn’t have to visit any center — everything was done online.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export default function TestimonialsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = Math.ceil(testimonials.length / 2);

  const visibleTestimonials = testimonials.slice(
    activeStep * 2,
    activeStep * 2 + 2,
  );

  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" mb={6} fontWeight={500}>
        Experiences Shared by Our Clients
      </Typography>

      {/* Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
      >
        {visibleTestimonials.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 520,
              p: 4,
              borderRadius: 4,
              background: "linear-gradient(180deg, #f6ead7 0%, #fbf6ee 100%)",
            }}
          >
            <Stack direction="row" spacing={2} mb={2} alignItems="center">
              <Avatar src={item.avatar} />
              <Box textAlign="left">
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.location}
                </Typography>
              </Box>
            </Stack>

            <Typography variant="body1" color="text.secondary" textAlign="left">
              “{item.text}”
            </Typography>
          </Card>
        ))}
      </Stack>

      {/* Dots */}
      <Box mt={4}>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            justifyContent: "center",
            background: "linear-gradient(to left, #101828, #8D744C)",
          WebkitBackgroundClip: "text",

            "& .MuiMobileStepper-dot": {
              width: 16,
              height: 16,
              mx: 1,
            },

            
          }}
          nextButton={null}
          backButton={null}
          onClick={() => setActiveStep((prev) => (prev + 1) % maxSteps)}
        />
      </Box>
    </Box>
  );
}
