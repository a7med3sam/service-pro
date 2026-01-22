import React from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

const OrderCardPay = () => {
  const router = useRouter();

  const handlePay = () => {
    router.push("/checkout");
  };

  const order = {
    title: "Work Permit Issuance",
    desc: "This is a secure order card example.",
    price: "23 AED",
    date: "Monday 23 Dec",
    time: "05:00 AM",
    location: "Ajman",
    // status: "Documents Uploaded",
  };

  return (
    <Container maxWidth="lg">
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "linear-gradient(90deg, #f6ebda 0%, #faf6ef 100%)",
        }}
      >
        <Box sx={{ p: 3, display: "flex", gap: 3 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <AttachMoneyIcon sx={{ fontSize: 48, color: "#8b6a3e" }} /> */}
            {/* Icon */}
            <Box
              component="img"
              src="/assets/icons/tdesign--money.svg"
              alt="upload icon"
              sx={{
                width: 48,
                height: 48,
                objectFit: "contain",
                mb: 1,
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={600}>{order.title}</Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  borderColor: "#8b6a3e",
                  color: "#8b6a3e",
                }}
                onClick={handlePay}
              >
                Pay
              </Button>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5, mb: 2 }}
            >
              {order.desc}
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton size="small" disableRipple>
                  <AttachMoneyIcon />
                </IconButton>
                <Typography variant="body2">{order.price}</Typography>
              </Stack>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton size="small" disableRipple>
                  <CalendarTodayIcon />
                </IconButton>
                <Typography variant="body2">{order.date}</Typography>
              </Stack>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton size="small" disableRipple>
                  <AccessTimeIcon />
                </IconButton>
                <Typography variant="body2">{order.time}</Typography>
              </Stack>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton size="small" disableRipple>
                  <LocationOnIcon />
                </IconButton>
                <Typography variant="body2">{order.location}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#8b6a3e",
            color: "#fff",
            px: 3,
            py: 1,
            fontSize: 12,
          }}
        ></Box>
      </Card>
    </Container>
  );
};

export default OrderCardPay;
