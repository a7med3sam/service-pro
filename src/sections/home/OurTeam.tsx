import { Box, Typography, Card, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const team = [
  {
    name: "Ahmed",
    role: "Document Specialist",
    img: "assets/home/employee1.jpg",
  },
  {
    name: "Abdallah",
    role: "Case Manager",
    img: "assets/home/employee2.jpg",
  },
  {
    name: "Mohamed",
    role: "Service Coordinator",
    img: "assets/home/employee3.jpg",
  },
];

export default function OurTeam() {
  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#F7F7F7" }}>
      <Typography fontSize={40}
          fontWeight={600}
          textAlign="center"
          mb={6}
          sx={{
            background: "linear-gradient(to left, #101828, #8D744C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
        Our Team
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {team.map((member, i) => (
          <Card
            key={i}
            sx={{
              width: 280,
              height: 380,
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              backgroundImage: `url(${member.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: 5,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                color: "white",
                p: 3,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,.10), rgba(0,0,0,1))",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="body2">{member.role}</Typography>

              <IconButton
                sx={{
                  position: "absolute",
                  right: 16,
                  bottom: 16,
                  bgcolor: "#b8955b",
                  color: "white",
                  "&:hover": { bgcolor: "#a07c45" },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
