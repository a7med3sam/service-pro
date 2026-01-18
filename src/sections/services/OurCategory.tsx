import { Box, Typography, Paper, Collapse } from "@mui/material";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const categories = [
  {
    id: "family",
    title: "Family Visa Services",
    desc: "We verify all required documents to ensure they meet official standards, preventing delays and rejections.",
    icon: "/assets/icons/stash_people-group-light.svg",
    active: true,
    services: [
      { title: "New Family Visa", price: 150 },
      { title: "Family Visa Renewal", price: 350 },
      { title: "Dependent Entry Permit", price: 546 },
      { title: "Visa Status Change", price: 994 },
      { title: "Family Visa Cancellation", price: 200 },
      { title: "Dependent Medical ", price: 180 },
    ],
  },
  {
    id: "company",
    title: "Company Startup & Renewal",
    desc: "Our experts provide personalized guidance to navigate complex business visa applications with ease.",
    icon: "/assets/icons/advanced-training1.svg",
    services: [{ title: "New Company Setup", price: 2500 }],
  },
  {
    id: "notary",
    title: "Notary Public Services",
    desc: "We help clients with official document notarization and legal attestations.",
    icon: "/assets/icons/digital-services1.svg",
    services: [
      { title: "Document Notarization", price: 300 },
      { title: "Power of Attorney (POA)", price: 450 },
    ],
  },
  {
    id: "tax",
    title: "Corporate Tax Services",
    desc: "Professional support to ensure corporate tax compliance and registration.",
    icon: "/assets/icons/stash_people-group-light.svg",
    services: [
      { title: "Corporate Tax Registration", price: 500 },
      { title: "FTA Compliance Consultation", price: 750 },
      { title: "Accounting & Bookkeeping Support", price: 1200 },
    ],
  },
];

export default function OurCategory() {
  const [activeCategory, setActiveCategory] = useState<string | null>("family");

  return (
    <Box sx={{ py: 8, maxWidth: 1200, mx: "auto" }}>
      {categories.map((item) => {
        const isActive = activeCategory === item.id;

        return (
          <Box key={item.id} sx={{ mb: 6 }}>
            {/* Category Header */}
            <Paper
              onClick={() =>
                setActiveCategory((prev) => (prev === item.id ? null : item.id))
              }
              sx={{
                cursor: "pointer",
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 3,
                borderRadius: "20px",
                background: isActive
                  ? "linear-gradient(90deg, #F2E4CE 0%, #F7F7F7 50%, #EDE3D2 100%)"
                  : "#fff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <Box component="img" src={item.icon} width={40} />
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography fontSize={14} color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Paper>

            {/* Services */}
            <Collapse
              in={isActive}
              timeout={450}
              easing={{
                enter: "cubic-bezier(0.4, 0, 0.2, 1)",
                exit: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Box
                sx={{
                  mt: 5,
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 3,
                  rowGap: 4,
                  justifyItems: "center",
                }}
              >
                {item.services.map((service, i) => (
                  <ServiceCard
                    key={i}
                    title={service.title}
                    price={service.price}
                    icon="/assets/icons/service.svg"
                  />
                ))}
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
