import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState) => () => {
    setOpen(openState);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(148, 147, 147, 0.5)",
          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={assets.logo}
            alt="Logo"
            style={{ width: "150px", height: "150px" }}
          />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <ScrollLink
            to="Header"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Home</Button>
          </ScrollLink>
          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>About</Button>
          </ScrollLink>
          <ScrollLink
            to="Projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Projects</Button>
          </ScrollLink>
          <ScrollLink
            to="Testimonials"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Testimonials</Button>
          </ScrollLink>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "white",
            color: "black",
            borderRadius: "50px",
            padding: "8px 16px",
          }}
        >
          Signup
        </Button>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundImage: "url('/header_img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "100vh",
          }}
        >
          <ScrollLink
            to="Header"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Home</Button>
          </ScrollLink>
          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>About</Button>
          </ScrollLink>
          <ScrollLink
            to="Projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Projects</Button>
          </ScrollLink>
          <ScrollLink
            to="Testimonials"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button sx={{ color: "white" }}>Testimonials</Button>
          </ScrollLink>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "gray",
              color: "black",
              borderRadius: "50px",
              padding: "8px 0px",
            }}
          >
            Signup
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
