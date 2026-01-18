import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

const currentOrders = [
  {
    id: 1,
    title: "Work Permit Issuance",
    desc: "Current order description...",
    price: "23 AED",
    date: "Monday 23 Dec",
    time: "05:00 AM",
    location: "Ajman",
    status: "Documents Uploaded",
  },
  {
    id: 2,
    title: "Residence Visa",
    desc: "Current order description...",
    price: "40 AED",
    date: "Tuesday 24 Dec",
    time: "10:00 AM",
    location: "Dubai",
    status: "Submitted to Government",
  },
  {
    id: 3,
    title: "Labour Card",
    desc: "Current order description...",
    price: "30 AED",
    date: "Wednesday 25 Dec",
    time: "02:00 PM",
    location: "Sharjah",
    status: "Document Review",
  },
];

const previousOrders = [
  {
    id: 101,
    title: "Employment Visa",
    desc: "This order has been completed successfully.",
    price: "50 AED",
    date: "Monday 10 Nov",
    time: "11:00 AM",
    location: "Abu Dhabi",
    status: "Completed",
  },
  {
    id: 102,
    title: "Medical Test",
    desc: "All procedures completed and approved.",
    price: "15 AED",
    date: "Thursday 14 Nov",
    time: "09:30 AM",
    location: "Dubai",
    status: "Completed",
  },
];

const OrdersSection = () => {
  const [tab, setTab] = React.useState(0);
  const router = useRouter();

  const handleEdit = () => {
    router.push("/services-secure");
  };

  const InfoItem = ({
    icon,
    text,
  }: {
    icon: React.ReactNode;
    text: string;
  }) => (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <IconButton size="small" disableRipple>
        {icon}
      </IconButton>
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );

  const OrderCard = ({
    title,
    desc,
    price,
    date,
    time,
    location,
    status,
    isPrevious,
  }: {
    title: string;
    desc: string;
    price: string;
    date: string;
    time: string;
    location: string;
    status: string;
    isPrevious?: boolean;
  }) => (
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
            sx={{
              width: 48,
              height: 48,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Info */}
        <Box sx={{ flex: 1 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={600}>{title}</Typography>

            {isPrevious ? (
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    borderColor: "#8b6a3e",
                    color: "#8b6a3e",
                  }}
                >
                  Explore
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    borderColor: "#8b6a3e",
                    color: "#8b6a3e",
                  }}
                >
                  Invoice
                </Button>
              </Stack>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  borderColor: "#8b6a3e",
                  color: "#8b6a3e",
                }}
                onClick={handleEdit}
              >
                Edit
              </Button>
            )}
          </Box>

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

      {/* Status */}
      <Box
        sx={{
          backgroundColor: "#8b6a3e",
          color: "#fff",
          px: 3,
          py: 1,
          fontSize: 12,
        }}
      >
        {status}
      </Box>
    </Card>
  );

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          centered
          sx={{
            mb: 5,
            "& .MuiTab-root": {
              textTransform: "none",
              borderRadius: 2,
              mx: 1,
            },
            "& .MuiTab-root.Mui-selected": {
              backgroundColor: "#8b6a3e",
              color: "#fff",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Current orders" />
          <Tab label="Previous orders" />
        </Tabs>

        {/* Orders */}
        <Stack spacing={4}>
          {(tab === 0 ? currentOrders : previousOrders).map((order) => (
            <OrderCard key={order.id} {...order} isPrevious={tab === 1} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default OrdersSection;
