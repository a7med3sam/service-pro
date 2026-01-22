import React from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Container,
} from "@mui/material";

const PersonalDataDisplaySection: React.FC = () => {
  const personalData = {
    fullName: "Ahmed Mohamed Ali",
    email: "ahmed@example.com",
    phone: "+201234567890",
    passportNumber: "A12345678",
    nationality: "Egyptian",
  };

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
        }}
      >
        <Box mb={3}>
          <Typography variant="h6" fontWeight={600}>
            Personal data
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Specified exactly as in your passport
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Full name"
              variant="standard"
              value={personalData.fullName}
              disabled
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              value={personalData.email}
              disabled
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Phone number"
              variant="standard"
              value={personalData.phone}
              disabled
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Passport number"
              variant="standard"
              value={personalData.passportNumber}
              disabled
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              select
              label="Nationality"
              variant="standard"
              value={personalData.nationality}
              disabled
            >
              <MenuItem value="Egyptian">Egyptian</MenuItem>
              <MenuItem value="Saudi">Saudi</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PersonalDataDisplaySection;
