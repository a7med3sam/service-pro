"use client";

import { Box, Typography, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  price: number;
  icon: string;
  currency?: string;
}

export default function ServiceCard({
  title,
  price,
  currency = "AED",
  icon,
}: ServiceCardProps) {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/services-work");
  };

  return (
    <Box
      sx={{
        width: 250,
        height: 310,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        p: "24px",
        borderRadius: "16px",
        background:
          "linear-gradient(90deg, rgba(242,228,206,0.9) 0%, rgba(247,247,247,0.9) 50%, rgba(237,227,210,0.9) 100%)",
        boxShadow:
          "0px 4px 4px -1px rgba(12, 12, 13, 0.1), 0px 4px 4px -1px rgba(88, 67, 34, 0.2)",
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 56,
          borderRadius: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "26px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
        <Typography sx={{ fontSize: "40px", fontWeight: 500, color: "#8D744C" }}>
          {price}
        </Typography>
        <Typography sx={{ fontSize: "20px", color: "#8D744C", mb: "6px" }}>
          {currency}
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Button
        onClick={handleExplore}
        sx={{
          height: 42,
          px: 2,
          backgroundColor: "#101828",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#fff",
          textTransform: "none",
          "&:hover": { backgroundColor: "#000" },
        }}
      >
        Explore
      </Button>
    </Box>
  );
}
