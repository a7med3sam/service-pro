"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  InputBase,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "16px",
              px: { xs: 2, md: 3 },
              color: "#1a1a1a",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                minHeight: 70,
              }}
            >
              {/* Logo */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  src="/assets/home/logo.svg"
                  alt="Government of Ajman"
                  width={140}
                  height={40}
                  priority
                />
              </Box>

              {/* Desktop Navigation */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 3,
                }}
              >
                {navItems.map((item) => {
  const isActive = pathname === item.path;

  return (
    <Button
      key={item.label}
      component={Link}
      href={item.path}
      sx={{
        color: isActive ? "primary" : "#999696",
        fontWeight: isActive ? 700 : 600,
        textTransform: "none",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -6,
          left: 0,
          width: isActive ? "100%" : "0%",
          height: "2px",
          backgroundColor: "#1a1a1a",
          transition: "width 0.3s ease",
        },
      }}
    >
      {item.label}
    </Button>
  );
})}


              </Box>

              {/* Actions */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Search - Desktop */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                    px: 1.5,
                    borderRadius: "10px",
                    color: "#555",
                  }}
                >
                  <SearchIcon fontSize="small" />
                  <InputBase
                    placeholder="Search..."
                    sx={{ ml: 1, width: 140 }}
                  />
                </Box>

                <IconButton sx={{ color: "#1a1a1a" }}>
                  <LanguageIcon />
                </IconButton>

                <IconButton sx={{ color: "#1a1a1a" }}>
                  <AccountCircleIcon />
                </IconButton>

                {/* Mobile Menu Button */}
                <IconButton
                  sx={{ display: { xs: "flex", md: "none" } }}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>

      {/* ================= Mobile Drawer ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box
            component={Link}
            href="/"
            onClick={() => setOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              mb: 2,
              transition: "transform 0.2s ease",
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            <Image
              src="/assets/home/logo.svg"
              alt="Government of Ajman"
              width={140}
              height={40}
              priority
            />
          </Box>

          <Divider />

          <List>
            {navItems.map((item) => {
  const isActive = pathname === item.path;

  return (
    <ListItem key={item.path} disablePadding>
      <ListItemButton
        component={Link}
        href={item.path}
        onClick={() => setOpen(false)}
        sx={{
          backgroundColor: isActive ? "#f5f5f5" : "transparent",
          "& .MuiListItemText-primary": {
            fontWeight: isActive ? 700 : 500,
            color: isActive ? "primary" : "#999696",
          },
        }}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  );
})}

          </List>

          <Divider />

          {/* Mobile Search */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              px: 1.5,
              borderRadius: "10px",
            }}
          >
            <SearchIcon fontSize="small" />
            <InputBase placeholder="Search..." sx={{ ml: 1 }} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
