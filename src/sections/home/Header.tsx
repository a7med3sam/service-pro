"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navItems = [
  { label: "Home", paths: ["/"] },
  { label: "About Us", paths: ["/about"] },
  {
    label: "Services",
    paths: ["/services", "/services-work", "/services-get-started"],
  },
  { label: "Contact Us", paths: ["/contact"] },
];

const myServicesPaths = [
  "/my-services",
  "/order-details-edit",
  "/order-details-previous",
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/check-session");
        const data = await res.json();
        setIsLoggedIn(data.loggedIn);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleLogin = () => {
    setAnchorEl(null);
    router.replace("/my-services");
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    await fetch("/api/logout", { method: "POST" });
    setIsLoggedIn(false);
    router.replace("/login");
  };

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ backgroundColor: "transparent", mt: 2 }}
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
              sx={{ justifyContent: "space-between", minHeight: 70 }}
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
                  "&:hover": { transform: "scale(1.05)" },
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
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                {[
                  ...navItems,
                  ...(isLoggedIn
                    ? [{ label: "My Services", paths: myServicesPaths }]
                    : []),
                ].map((item) => {
                  const isActive = item.paths.some((path) => {
                    if (path === "/") {
                      return pathname === "/";
                    }
                    return pathname.startsWith(path);
                  });

                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.paths[0]}
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {/* Search */}
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

                <IconButton sx={{ p: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      component="img"
                      src="/assets/icons/circle-flags--en.svg"
                      alt="order icon"
                      sx={{ width: 20, height: 20, objectFit: "contain" }}
                    />
                    <Box
                      component="span"
                      sx={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}
                    >
                      English
                    </Box>
                  </Box>
                </IconButton>

                <IconButton
                  sx={{ color: "#1a1a1a", p: 0 }}
                  onClick={handleAvatarClick}
                >
                  {isLoggedIn ? (
                    <Box
                      component="img"
                      src="/assets/home/man.png"
                      alt="User Avatar"
                      sx={{ height: 40 }}
                    />
                  ) : (
                    <AccountCircleIcon fontSize="large" />
                  )}
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  disableScrollLock
                  PaperProps={{
                    sx: {
                      borderRadius: 2,
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                      minWidth: 180,
                    },
                  }}
                >
                  {isLoggedIn
                    ? [
                        <MenuItem
                          key="profile"
                          component={Link}
                          href="/profile"
                          onClick={handleClose}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                              color: "#1976d2",
                            },
                          }}
                        >
                          <AccountCircleIcon sx={{ mr: 1 }} />
                          Profile
                        </MenuItem>,

                        <MenuItem
                          key="my-services"
                          component={Link}
                          href="/my-services"
                          onClick={handleClose}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                              color: "#1976d2",
                            },
                          }}
                        >
                          <SearchIcon sx={{ mr: 1 }} />
                          My Services
                        </MenuItem>,

                        <MenuItem
                          key="terms"
                          component={Link}
                          href="/terms"
                          onClick={handleClose}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                              color: "#1976d2",
                            },
                          }}
                        >
                          <DescriptionIcon sx={{ mr: 1 }} />
                          Terms
                        </MenuItem>,

                        <Divider key="divider" />,

                        <MenuItem
                          key="logout"
                          onClick={handleLogout}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#ffe6e6",
                              color: "#d32f2f",
                            },
                          }}
                        >
                          <LogoutIcon sx={{ mr: 1 }} />
                          Logout
                        </MenuItem>,
                      ]
                    : [
                        <MenuItem
                          key="login"
                          onClick={handleLogin}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#e0f7fa",
                              color: "#00796b",
                            },
                          }}
                        >
                          <AccountCircleIcon sx={{ mr: 1 }} />
                          Login
                        </MenuItem>,
                      ]}
                </Menu>

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

      {/* Mobile Drawer */}
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
              "&:active": { transform: "scale(0.95)" },
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
            {[
              ...navItems,
              ...(isLoggedIn
                ? [{ label: "My Services", paths: myServicesPaths }]
                : []),
            ].map((item) => {
              const isActive = item.paths.some((path) => {
                if (path === "/") {
                  return pathname === "/";
                }
                return pathname.startsWith(path);
              });

              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.paths[0]}
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
