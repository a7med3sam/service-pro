import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function ProfilePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", gap: 6 }}>
        {/* Sidebar */}
        <Box sx={{ width: 260 }}>
          <Typography fontWeight={600} mb={2}>
            Manage My Account
          </Typography>

          <Box mb={4}>
            <Typography sx={{ color: "#8D744C", mb: 1 }}>My Profile</Typography>
            <Typography sx={{ color: "#999", mb: 1 }}>
              My Payment Options
            </Typography>
          </Box>

          <Typography fontWeight={600} mb={2}>
            My Orders
          </Typography>
          <Typography sx={{ color: "#999", mb: 1 }}>
            Successful orders
          </Typography>
          <Typography sx={{ color: "#999" }}>Cancelled</Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#fff",
            p: 5,
            borderRadius: "20px",
            boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          <Typography sx={{ color: "#8D744C", fontWeight: 600, mb: 3 }}>
            Edit Your Profile
          </Typography>

          {/* Row 1 */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              mb: 3,
            }}
          >
            <Box>
              <Typography mb={1}>First Name</Typography>
              <TextField fullWidth defaultValue="Md" />
            </Box>

            <Box>
              <Typography mb={1}>Last Name</Typography>
              <TextField fullWidth defaultValue="Rimel" />
            </Box>
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              mb: 3,
            }}
          >
            <Box>
              <Typography mb={1}>Email</Typography>
              <TextField fullWidth defaultValue="rimellll@gmail.com" />
            </Box>

            <Box>
              <Typography mb={1}>Address</Typography>
              <TextField
                fullWidth
                defaultValue="Kingston, 5236, United State"
              />
            </Box>
          </Box>

          {/* Password Section */}
          <Typography mb={1} mt={3}>
            Password Changes
          </Typography>

          <TextField
            fullWidth
            placeholder="Current Password"
            type="password"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            placeholder="New Password"
            type="password"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            placeholder="Confirm New Password"
            type="password"
            sx={{ mb: 4 }}
          />

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button sx={{ color: "#000" }}>Cancel</Button>

            <Button
              sx={{
                bgcolor: "#8D744C",
                color: "#fff",
                px: 4,
                "&:hover": { bgcolor: "#7a6341" },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
