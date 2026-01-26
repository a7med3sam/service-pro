import { Box, Container, Typography, Card, CardContent } from "@mui/material";

const steps = [
  {
    title: "Required Documents",
    type: "bullet", // نقاط
    desc: [
      "Passport copy (valid for at least 6 months)",
      "Personal photo (white background)",
      "Entry permit copy",
      "Emirates ID copy (if available)",
      "Company trade license",
      "Establishment card",
      "Labor contract signed by both parties",
    ],

    image: "/assets/home/gov.png",
    imageLeft: true,
  },
  {
    title: "Steps to Complete the Service",
    type: "number", // أرقام
    desc: [
      "Submit the employee information through our platform",
      "Upload all required documents",
      "Our specialists review the documents for accuracy",
      "The application is submitted to MOHRE",
      "You receive real-time updates",
      "Final approval is issued",
      "The work permit is generated and shared with you",
    ],
    image: "/assets/home/steps.png",
    imageLeft: false,
  },
  {
    title: "Service Details",
    type: "bullet", // مؤجل، ممكن تغييره لاحقًا
    desc: [
      "Estimated Processing Time: 1–3 working days (depending on MOHRE approval)",
      "Fees:",
      "  - Government Fees: AED 300 – 600 (based on company category)",
      "  - Service Fee: AED 30",
      "  - Optional Fast-Track: AED 20",
      "Important Information:",
      "  - All documents must be clear and valid",
      "  - Missing or incorrect documents may delay approval",
      "  - Work permit fees may vary depending on company classification",
    ],
    image: "/assets/home/check.png",
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

                      <Box
                        component={step.type === "bullet" ? "ul" : "ol"}
                        sx={{ pl: 2, m: 0 }}
                      >
                        {step.desc.map((item, i) => (
                          <Typography
                            key={i}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
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

                      <Box
                        component={step.type === "bullet" ? "ul" : "ol"}
                        sx={{ pl: 2, m: 0 }}
                      >
                        {step.desc.map((item, i) => (
                          <Typography
                            key={i}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
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
