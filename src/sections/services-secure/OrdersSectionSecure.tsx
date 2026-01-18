import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

const InfoItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Stack direction="row" spacing={0.5} alignItems="center">
    <IconButton size="small" disableRipple>
      {icon}
    </IconButton>
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

const OrderCardSecure = ({
  title,
  desc,
  price,
  date,
  time,
  location,
}: {
  title: string;
  desc: string;
  price: string;
  date: string;
  time: string;
  location: string;
}) => {

  const router = useRouter();
    
      // const handleCheckout = () => {
      //   router.push("/checkout");
      // };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        background: "linear-gradient(90deg, #f6ebda 0%, #faf6ef 100%)",
      }}
    >
      {/* Content */}
      <Box sx={{ p: 3, display: "flex", gap: 3 }}>
        {/* Icon */}
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
          <Box
            component="img"
            src="/assets/icons/stash_people-group-light.svg"
            alt="order icon"
            sx={{ width: 48, height: 48, objectFit: "contain" }}
          />
        </Box>

        {/* Info */}
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, mb: 2 }}
          >
            {desc}
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <InfoItem icon={<GroupsIcon />} text={price} />
            <InfoItem icon={<CalendarTodayIcon />} text={date} />
            <InfoItem icon={<AccessTimeIcon />} text={time} />
            <InfoItem icon={<LocationOnIcon />} text={location} />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

const OrdersSectionSecure = () => {
  const order = {
    title: "Work Permit Issuance",
    desc: "This is a secure order card example.",
    price: "23 AED",
    date: "Monday 23 Dec",
    time: "05:00 AM",
    location: "Ajman",
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <OrderCardSecure {...order} />
      </Container>
    </Box>
  );
};

export default OrdersSectionSecure;
