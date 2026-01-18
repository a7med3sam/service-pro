import { Box, Typography, Paper } from "@mui/material";

const categories = [
  {
    title: "Family Visa Services",
    desc: "We verify all required documents to ensure they meet official standards, preventing delays and rejections.",
    icon: "/assets/icons/stash_people-group-light.svg",
    active: true,
  },
  {
    title: "Company Startup & Renewal",
    desc: "Our experts provide personalized guidance to navigate complex business visa applications with ease.",
    icon: "/assets/icons/advanced-training1.svg",
  },
  {
    title: "Notary Public Services",
    desc: "We help students prepare their applications and gather necessary documentation for studying abroad.",
    icon: "/assets/icons/digital-services1.svg",
  },
  {
    title: "Corporate Tax Services",
    desc: "Receive step-by-step support for obtaining travel visas to various destinations worldwide.",
    icon: "/assets/icons/stash_people-group-light.svg",
  },
];

export default function OurCategory() {
  return (
    <Box sx={{ py: 8, maxWidth: 900, mx: "auto", textAlign: "center" }}>
      <Typography
        fontSize={40}
        fontWeight={600}
        textAlign="center"
        sx={{
          background: "linear-gradient(to left, #101828, #8D744C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our category
      </Typography>

      <Typography color="text.secondary" mt={1} mb={5}>
        Choose the level of support that fits your government service needs,
        from basic assistance to fully managed application handling.
      </Typography>

      <Box display="flex" flexDirection="column" gap={3}>
        {categories.map((item, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              p: "20px",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              borderRadius: "20px",
              width: "100%",

              transition: "0.3s",

              background: item.active
                ? "linear-gradient(90deg, #F2E4CE 0%, #F7F7F7 50%, #EDE3D2 100%)"
                : "#FFFFFF",

              boxShadow: item.active
                ? "0px 4px 4px rgba(88, 67, 34, 0.2)"
                : "0px 4px 12px rgba(0,0,0,0.08)",

              backdropFilter: item.active ? "blur(6px)" : "none",

              "&:hover": !item.active
                ? {
                    transform: "translateY(-3px)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                  }
                : {},
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: 32,
                  height: 32,
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box textAlign="left">
              <Typography fontWeight="500">{item.title}</Typography>
              <Typography color="text.secondary" fontSize={14}>
                {item.desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
