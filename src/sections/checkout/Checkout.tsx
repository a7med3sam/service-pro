import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
  Container,
} from "@mui/material";

const Checkout = () => {
  return (
    <Container maxWidth="lg">
    <Box sx={{ p: 4, bgcolor: "#fafafa" }}>
      <Grid container spacing={4}>
        {/* Billing Details */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Billing Details
            </Typography>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField fullWidth label="Full Name" required />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth label="Email" type="email" required />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth label="Phone No" required />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth label="Billing Address" required />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField fullWidth label="Emirate" required />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField fullWidth label="City" required />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField fullWidth label="Street" required />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Building" required />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Floor" required />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Payment Details */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>

            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Family Visa Renewal</Typography>
              <Typography>AED 350</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Medical Test Booking</Typography>
              <Typography>AED 1150</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Residence Stamping</Typography>
              <Typography>AED 150</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" justifyContent="space-between" mb={3}>
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">AED 1650</Typography>
            </Box>

            <Button
              fullWidth
              size="large"
              sx={{
                bgcolor: "#8B6F47",
                color: "#fff",
                "&:hover": { bgcolor: "#7a5f3c" },
              }}
            >
              Pay
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default Checkout;
