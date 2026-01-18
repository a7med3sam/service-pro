import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Container,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const DownloadProjects: React.FC = () => {

  return (
    <Container maxWidth="md" sx={{my:5}}>
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        border: "1px solid #eee",
      }}
    >
      <Typography variant="h6" fontWeight={300} mb={2}>
        Completed Services
      </Typography>

      {/* File */}
      <Box
        sx={{
          backgroundColor: "#f5f3ef",
          borderRadius: 1.5,
          px: 2,
          py: 1.5,
          mb: 3,
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <DescriptionOutlinedIcon sx={{ color: "#8b6f47" }} />
          <Typography fontWeight={500}>File 2024.pdf</Typography>
        </Stack>
      </Box>

      {/* Download Button */}
      <Button
        fullWidth
        sx={{
          backgroundColor: "#8b6f47",
          color: "#fff",
          py: 1.5,
          fontWeight: 600,
          borderRadius: 1.5,
          "&:hover": {
            backgroundColor: "#755d3b",
          },
        }}
      >
        Download
      </Button>
    </Paper>
    </Container>
  );
};

export default DownloadProjects;
