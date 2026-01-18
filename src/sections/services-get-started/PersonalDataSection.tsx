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


const PersonalDataSection: React.FC = () => {
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
          Specify exactly as in your passport
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Full name"
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Email"
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Phone number"
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Passport number"
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            select
            label="Nationality"
            variant="standard"
          >
            <MenuItem value="egyptian">Egyptian</MenuItem>
            <MenuItem value="saudi">Saudi</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Paper>
    </Container>
  );
};

export default PersonalDataSection;
