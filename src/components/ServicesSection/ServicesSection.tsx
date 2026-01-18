import { Box, Container, Typography, Card, CardContent } from "@mui/material";

const steps = [
  {
    title: "Full Service Overview",
    desc: "Get a complete breakdown of the service requirements, fees, and processing time",
    image: "/assets/home/FullServiceOverview.jpg",
    imageLeft: true,
  },
  {
    title: "Compare Services",
    desc: "Easily compare different government services and choose what suits your situation best",
    image: "/assets/home/CompareServices.png",
    imageLeft: false,
  },
  {
    title: "Plan Your Next Step",
    desc: "Use service insights to prepare your documents and avoid delays in future requests",
    image: "/assets/home/PlanYourNextStep.jpg",
    imageLeft: true,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="md">
        <Typography
          fontSize={40}
          fontWeight={600}
          textAlign="center"
          mb={6}
          sx={{
            background: "linear-gradient(to left, #101828, #8D744C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore Services That Fit Your Needs
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Center Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              borderLeft: "1.5px dashed",
              borderColor: "#101828",
            }}
          />

          {/* Circles */}
          {[1, 2, 3].map((num, i) => (
            <Box
              key={num}
              sx={{
                position: "absolute",
                left: "50%",
                top: i === 0 ? 0 : i === 1 ? "50%" : "100%",
                transform: "translate(-50%, -50%)",
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "2px solid #B08D57",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                userSelect: "none",
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#8D744C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FCFCFC",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                {num}
              </Box>
            </Box>
          ))}

          {/* Steps */}
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 1fr",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {/* Left */}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {step.imageLeft && (
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      width: 360,
                      height: 220,
                      borderRadius: 4,
                      objectFit: "cover",
                    }}
                  />
                )}
                {!step.imageLeft && (
                  <Card
                    elevation={0}
                    sx={{
                      maxWidth: 400,
                      borderRadius: 4,
                      border: "1px solid",
                      borderColor: "#E8D7BD",
                    }}
                  >
                    <CardContent>
                      <Typography fontWeight={600} mb={1}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>

              {/* Spacer */}
              <Box />

              {/* Right */}
              <Box>
                {!step.imageLeft && (
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      width: 360,
                      height: 220,
                      borderRadius: 4,
                      objectFit: "cover",
                    }}
                  />
                )}
                {step.imageLeft && (
                  <Card
                    elevation={0}
                    sx={{
                      maxWidth: 400,
                      borderRadius: 4,
                      border: "1px solid",
                      borderColor: "#E8D7BD",
                    }}
                  >
                    <CardContent>
                      <Typography fontWeight={600} mb={1}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
