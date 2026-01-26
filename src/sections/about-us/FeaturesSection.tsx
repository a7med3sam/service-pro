import { Box, Card, CardContent, Container, Typography } from "@mui/material";

const FeaturesSection = () => {
  const features = [
    {
      title: "Transparent Workflow",
      description:
        "A dedicated specialist assists you throughout the process, ensuring clarity and smooth communication.",
      image: "/assets/home/TransparentWorkflow.png",
    },
    {
      title: "Accurate Document Review",
      description:
        "We verify all required documents to ensure they meet official standards, preventing delays and rejections.",
      image: "/assets/home/AccurateDocumentReview.png",
    },
    {
      title: "Fast & Reliable Processing",
      description:
        "A dedicated specialist assists you throughout the process, ensuring clarity and smooth communication.",
      image: "/assets/home/ReliableProcessing.png",
    },
    {
      title: "Personalized Support",
      description:
        "A dedicated specialist assists you throughout the process, ensuring clarity and smooth communication.",
      image: "/assets/home/PersonalizedSupport.png",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* 🔹 Section Title */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
          maxWidth: 780,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            // fontFamily: "Roboto",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: "44px",
            color: "#0D0D0D",
            mb: 2,
          }}
        >
          Raising the Standard for Government Service Excellence
        </Typography>

        <Typography
          sx={{
            // fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#808080",
          }}
        >
          With extensive experience in processing government applications, we
          help individuals and businesses complete their requests quickly,
          accurately, and with full compliance with official requirements.
        </Typography>
      </Box>

      {/* 🔹 Cards */}
      {features.map((item, index) => {

        return (
          <Card
  key={index}
  elevation={0}
  sx={{
    display: "flex",
    alignItems: "center",
    p: "24px",
    mb: 3,
    borderRadius: "20px",
    flexDirection: { xs: "column", sm: "row" },

    background: "#FFFFFF",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",

    "&:hover": {
      background:
        "linear-gradient(180deg, #F2E4CE 0%, #F7F7F7 50%, #EDE3D2 100%)",
      boxShadow: "0px 8px 20px rgba(88, 67, 34, 0.2)",
      backdropFilter: "blur(6px)",
      transform: "translateY(-3px)",
    },
  }}
>

            {/* Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: 306,
                height: 228,
                borderRadius: "20px",
                objectFit: "cover",
                mr: { sm: 3 },
                mb: { xs: 2, sm: 0 },
                flexShrink: 0,
              }}
            />

            {/* Text */}
            <CardContent sx={{ p: 0 }}>
              <Typography
  sx={{
    // fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "28px",
    color: "#0D0D0D",
    mb: "12px",
  }}
>
  {item.title}
</Typography>


              <Typography
                sx={{
                  // fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#808080",
                  maxWidth: 420,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default FeaturesSection;
