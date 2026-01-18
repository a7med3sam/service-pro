import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const cities = ["Dubai", "Abu Dhabi", "Sharjah"];
const areas = ["Business Bay", "Downtown", "Dubai Marina"];

export default function ReliableSupportSection() {
  const [city, setCity] = useState("Dubai");
  const [area, setArea] = useState("Business Bay");

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            fontWeight: 600,
            textAlign: "center",
            color: "#0D0D0D",
            mb: 2,
          }}
        >
          Reliable Support for All Your Government Transactions
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: 16,
            color: "#808080",
            textAlign: "center",
            maxWidth: 820,
            mx: "auto",
            mb: 6,
          }}
        >
          Choose the service you need and let our specialists handle the
          documentation, submission, and follow-up on your behalf.
        </Typography>

        {/* Filters */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* City */}
          <FormControl sx={{ minWidth: "40%" }}>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                height: 56,
                borderRadius: "40px",
                color: "#6F6F6F",
                px: 2,
                fontSize: 18,
                "& fieldset": {
                  borderColor: "#8D8D8D",
                },
              }}
            >
              {cities.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Area */}
          <FormControl sx={{ minWidth: "40%" }}>
            <Select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                height: 56,
                borderRadius: "40px",
                px: 2,
                color: "#6F6F6F",
                fontSize: 18,
                "& fieldset": {
                  borderColor: "#8D8D8D",
                },
              }}
            >
              {areas.map((a) => (
                <MenuItem key={a} value={a}>
                  {a}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
}
